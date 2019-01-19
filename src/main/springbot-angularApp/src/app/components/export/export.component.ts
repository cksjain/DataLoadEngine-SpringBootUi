import { Component, OnInit } from "@angular/core";
import { RestService } from "../../rest/rest.service";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import { ExportToOrgComponent } from "../export-to-org/export-to-org.component";


export interface Fields {
  value: string;
  viewValue: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-export",
  templateUrl: "./export.component.html",
  styleUrls: ["./export.component.css"]
})
export class ExportComponent implements OnInit {
  exportForm: FormGroup;
  objects = [{value: "", viewValue: "Select an Object"}];
  fields: Fields[] = [];
  childRlnMapping: {};
  show_result = false;
  columns = [];
  resultsFields = [];
  setClickedRow: Function;
  selectedRow: Number;
  selectedRecord: {};
  queryIndex = '';
  queryString="";
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private fb: FormBuilder, private restService: RestService, private dialog: MatDialog) {
    this.getAllObjects();
    this.setClickedRow = function(index) {
      this.selectedRow = index;
      this.selectedRecord = this.resultsFields[index];
      console.log("this.resultsFields[index]", this.resultsFields[index]);
    };
  }

  ngOnInit() {
    this.exportForm = this.fb.group({
      queries: this.fb.array([])
    });
    this.addquery();       
  }

  get queryForms() {
    return this.exportForm.get("queries") as FormArray;
  }

  get filterByForm() {
    return this.queryForms.get("filterBy") as FormArray;
  }

  get exportFormValue() {
    return this.exportForm.value.queries;
  }

  addquery() {
    const query = this.fb.group({
      object: "",
      field: "",
      sortBy: "",
      sortDir: "",
      null: "",
      maxRecord: "",
      queryString: "",
      filterBy: "",
      operator: "",
      fieldValue: ""
    });

    this.queryForms.push(query);
    this.addFilterBy();
  }

  deletequery(i) {
    this.queryForms.removeAt(i);
  }

  addFilterBy() {
    const filterBy = this.fb.group({
      fieldName: "",
      fieldValue: "",
      operator: ""
    });

    //this.queryForms.controls.filterBy.controls.push(filterBy);
    //this.filterByForm.push(filterBy);
  }

  //get the list of all objects to show in dropdown
  getAllObjects() {
    this.restService.getAllOrgObjects().subscribe(
      data => {
        data.sobjects.forEach(element => {
          let object = {
            value: element.name,
            viewValue: element.name
          }
          
          this.objects.push(object);
        });

        console.log("aman1", JSON.parse(JSON.stringify(this.objects)));
        //this.getFieldsObj();
      },
      error => console.log(error)
    );
  }

  //get the list of all fields to show in dropdown
  getFieldsObj(objectName: string) {
    this.restService.getFieldsOfObject("Account").subscribe(
      data => {
        this.fields = [];
        data.fields.forEach(element => {
          this.fields.push({ value: element.name, viewValue: element.label });
        });
        let rln = {};
        data.childRelationships.forEach(element => {
          if (!rln[element.childSObject]) rln[element.childSObject] = "";
          rln[element.childSObject] = element.relationshipName;
        });
        this.childRlnMapping = rln;
        console.log("aman3", JSON.parse(JSON.stringify(data)));
      },
      error => console.log(error)
    );
  }

  objectChangeHandler(event: any, index) {    
    this.queryIndex = index.toString();
    let exportForm = this.exportForm.value.queries;
    let objectName = exportForm[index].object;
    console.log("let exportForm", exportForm, index);
    //added by aman for fetching fields for particular objects
    if (objectName !== "Select an Object") {
      this.getFieldsObj(objectName);
    }
    this.queryStringBuilder();
    //this.queryString = `SELECT * FROM ${exportForm[index].object}`;
  }

  querySOQL(index) {
    this.queryIndex = index;
    var retrievedData;
    //var queryString = this.query_string + ' limit 10';
    let queryString = this.queryString;//"SELECT Id, Name, LastModifiedDate FROM Account LIMIT 10";
    console.log("queryString", queryString);
    this.restService.soql_query(queryString).subscribe(
      data => {
        retrievedData = data.body;
        console.log("aman", JSON.parse(JSON.stringify(retrievedData)));
        this.updateResultsTable(JSON.parse(retrievedData));
      },
      error => console.log(error)
    );
  }

  updateResultsTable(data) {
    this.show_result = true;
    let index = this.queryIndex;
    let exportForm = this.exportForm.value.queries;
    console.log("exportForm", exportForm, this.exportForm.value);
    this.columns = exportForm[index].field;
    this.resultsFields = data.records;

    console.log("columns", this.columns);
    console.log("records", data.records);
  }

  downloadButtonPush() {
    var csvData = this.convertToCSV(this.columns, this.resultsFields);
    var blob = new Blob([csvData], { type: "text/csv" });
    var url = window.URL.createObjectURL(blob);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, "example");
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = "ETPHoldReview.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

  convertToCSV(columnRecord: any, resultData: any): any {
    var finalData = [];
    columnRecord.forEach(j => {
      finalData.push(j);
    });
    resultData.forEach(i => {
      columnRecord.forEach(j => {
        finalData.push(i[j]);
      });
    });
    //finalData.push(resultData);
    console.log("export1 " + resultData);
    console.log("export " + finalData);
    var array =
      typeof finalData != "object" ? JSON.parse(finalData) : finalData;

    var str = "";
    // var row = "";

    // for (var index in finalData) {
    //     //Now convert each value to string and comma-separated
    //     row += index + ',';
    // }
    // row = row.slice(0, -1);
    // //append Label row with line break
    // str += row + '\r\n';

    // for (var i = 0; i < array.length; i++) {
    //     var line = '';
    //     for (var index in array[i]) {
    //         if (line != '') line += ','

    //         line += array[i][index];
    //     }
    //     str += line + '\r\n';
    // }
    console.log("columnRecord" + columnRecord.length);
    for (var i = 0; i < array.length; i++) {
      if ((i + 1) % columnRecord.length == 0)
        str += '"' + array[i] + '"' + "\r\n";
      else str += '"' + array[i] + '"' + ",";
    }
    console.log(str);
    return str;
  }

  openDialog({ description }: any) {
    this.dialog.open(ExportToOrgComponent, {
      data: { description }
    });
  }
  viewRelatedRecord(){
    this.dialog.open(ViewRelatedRecord, {
      data: {}
    });  
    //(nameOfObject: any, id: any, relationName: any  
    /*(let nameOfObject = this.query_object["object"];
    (let id = this.selectedRecord['Id'];
    let relationName = this.childRlnMapping[nameOfObject];
    this.restService.getChildData(nameOfObject, id, relationName).subscribe(
      data => {       
        console.log('childData record', JSON.parse(JSON.stringify(data)));   
        this.dialog.open(ViewRelatedRecord, {
          data: {}
        });   
      },
      error => console.log(error));*/
  }

  queryStringBuilder() {
    let exportForm = this.exportFormValue[this.queryIndex];
    let object = exportForm.object;
    let field = exportForm.field;
    let sortBy = exportForm.sortBy;  
    let maxRecord =  exportForm.maxRecord;
    let sortDir =  exportForm.sortDir;
    let nulls = exportForm.null;
    let filterBy = exportForm.filterBy;
    let operator = exportForm.operator;
    let fieldValue = exportForm.fieldValue;

    let queryString = '';
    if(object.length > 0){
      queryString = `SELECT * FROM ${object}`;
    }
    if(field.length > 0){
      queryString = `SELECT ${field.join(', ')} FROM ${object}`;
    }

    if(filterBy && operator && fieldValue){
      queryString = `${queryString} WHERE ${filterBy} ${operator} '${fieldValue}'`;
    }

    if(sortBy.length > 0){
      queryString = `${queryString} ORDER BY ${sortBy}`;
    }

    if(sortDir.length > 0){
      queryString = `${queryString} ${sortDir}`;
    }

    if(nulls.length > 0){
      queryString = `${queryString} ${nulls}`;
    }
    
    if(maxRecord.length > 0){
      queryString = `${queryString} LIMIT ${maxRecord}`;
    }
    this.queryString = queryString;
  }
}

@Component({
  selector: 'view-related-record',
  templateUrl: 'viewRelatedRecord.html',
})
export class ViewRelatedRecord {

  constructor(public dialogConfRef: MatDialogRef<ViewRelatedRecord>) {}

  onNoClick(): void {
    this.dialogConfRef.close();
  }

}
