import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RestService } from "../../rest/rest.service";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar
} from "@angular/material";
import { Inject } from '@angular/core';

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
  objects = [{ value: "", viewValue: "Select an Object" }];
  fields: Fields[] = [];
  childRlnMapping = [];
  show_result = true;
  columns = [];
  resultsFields = [];
  setClickedRow: Function;
  selectedRow: Number;
  selectedRecord: {};
  queryIndex = "";
  queryString = "";
  exportObj = {};
  creatableFields = [];
  sObjectsNameLabelMap = {};

  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    //this.byPassAPI();
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
      fieldValue: "",
      exportResult: {},
      expRelRecords: false      
    });

    this.queryForms.push(query);
    this.addFilterBy();
    let obj = {
      fields: [],
      queryString: "",
      columns: [],
      exportResult: []
    }
    this.exportObj[this.queryForms.length - 1] = obj;
  }

  deletequery(i) {
    this.queryForms.removeAt(i);
    delete this.exportObj[i];
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
    this.spinnerService.show();
    let  sObjMap = {}; 
    this.restService.getAllOrgObjects().subscribe(
      data => {
        data.sobjects.forEach(element => {
          sObjMap[element.name] = element.label;
          let object = {
            value: element.name,
            viewValue: element.name
          };

          this.objects.push(object);
         
        });
        this.sObjectsNameLabelMap = sObjMap;        
        //this.getFieldsObj();
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
  }

  //get the list of all fields to show in dropdown
  getFieldsObj(objectName: string) {
    this.spinnerService.show();
    var that = this;

    this.restService.getFieldsOfObject(objectName).subscribe(
      data => {
        this.fields = [];
        this.creatableFields = [];
        let fields = [];
        data.fields.forEach(element => {
          if (element.createable) this.creatableFields.push(element.name);
          fields.push({ value: element.name, viewValue: element.label });
        });
        that.exportObj[this.queryIndex].fields = fields;
        
        let rln = {};
        data.childRelationships.forEach(element => {
          var obj = {};
         let nameLableMap =  this.sObjectsNameLabelMap;
          if (element.relationshipName != null) {
            let viewVal = nameLableMap[element.childSObject];
            obj = {
              value: element.relationshipName,
              viewValue: viewVal//element.childSObject
            }
            this.childRlnMapping.push(obj);
          }          
        });
        sessionStorage.setItem(
          "creatableFields",
          JSON.stringify(this.creatableFields)
        );
        sessionStorage.setItem(
          "childRlnMapping",
          JSON.stringify(this.childRlnMapping)
        );
        console.log("aman3", JSON.parse(JSON.stringify(this.childRlnMapping)));
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
  }

  objectChangeHandler(event: any, index) {
    // debugger;
    this.queryIndex = index.toString();
    let exportForm = this.exportForm.value.queries;
    let objectName = exportForm[index].object;
    //added by aman for fetching fields for particular objects
    if (objectName !== "Select an Object") {
      this.getFieldsObj(objectName);
    }
    let obj = {};
    obj[index] = objectName;
    sessionStorage.setItem("curObjSelected", JSON.stringify(obj));
    this.queryStringBuilder();
    //this.queryString = `SELECT * FROM ${exportForm[index].object}`;
  }

  querySOQL(index) {
    this.queryIndex = index;
    var retrievedData;
    
    let exportForm = this.exportFormValue[this.queryIndex];
    
    this.spinnerService.show();
    this.restService.soql_query(exportForm.queryString).subscribe(
      data => {
        retrievedData = data.body;
        let sessionExportResults = JSON.parse(
          sessionStorage.getItem("exportResults")
        );
        if (!sessionExportResults) sessionExportResults = {};

        sessionExportResults[index] = data.body;
        sessionStorage.setItem(
          "exportResults",
          JSON.stringify(sessionExportResults)
        );

        this.updateResultsTable(JSON.parse(retrievedData));
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
  }

  updateResultsTable(data) {
    this.show_result = true;
    let index = this.queryIndex;
    let exportForm = this.exportForm.value.queries;
    let sSelect = "SELECT", sFrom = "FROM";
    let queryString = exportForm[index].queryString;
    let columns = exportForm[index].field;
    if (queryString) {
      let aMatch = queryString.match(new RegExp(sSelect + "(.*)" + sFrom));
      if (aMatch != null) {
        columns = aMatch[1].trim().split(", ");
      }
    }
    
    this.exportObj[this.queryIndex].columns = columns;
    this.exportObj[this.queryIndex].exportResult = data.records;

    this.columns = exportForm[index].field;
    this.resultsFields = data.records;
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
    sessionStorage.setItem("curQueryIndex", this.queryIndex);
    this.dialog.open(ExportToOrgComponent, {
      data: { description }
    });
  }
  viewRelatedRecord(index) {
    /*this.queryIndex = index.toString();
    let exportForm = this.exportForm.value.queries;
    let nameOfObject = exportForm[index].object;

    let id = this.selectedRecord["Id"];
    let relationName = this.childRlnMapping[nameOfObject];
    var relNames = Object.values("");*/
    /*this.restService.getChildData(nameOfObject, id, "Contacts").subscribe(
      data => {
        console.log("childData record", JSON.parse(JSON.stringify(data)));
        this.dialog.open(ViewRelatedRecord, {
          data: {}
        });
      },
      error => console.log(error)
    );*/
    let id = this.selectedRecord["Id"];
    let exportForm = this.exportForm.value.queries;
    let nameOfObject = exportForm[index].object;
    if (nameOfObject) {
      this.dialog.open(ViewRelatedRecord, {
        data: {
          recId: id,
          objectName: nameOfObject
        }
      });
    }

  }

  exportRelatedRecord(index) {
    //let id = this.selectedRecord["Id"];
    let exportForm = this.exportForm.value.queries;
    let nameOfObject = exportForm[index].object;
    let queryResult = this.exportObj[index].exportResult;
    if (nameOfObject) {

    }
    this.dialog.open(ExportRelatedRecord, {
      data: {
        recId: "id",
        objectName: nameOfObject,
        queryResult: queryResult
      }
    });

  }

  queryStringBuilder() {
    let exportForm = this.exportFormValue[this.queryIndex];
    let object = exportForm.object;
    let field = exportForm.field;
    let sortBy = exportForm.sortBy;
    let maxRecord = exportForm.maxRecord;
    let sortDir = exportForm.sortDir;
    let nulls = exportForm.null;
    let filterBy = exportForm.filterBy;
    let operator = exportForm.operator;
    let fieldValue = exportForm.fieldValue;
    
    let queryString = "";
    if (object.length > 0) {
      queryString = `SELECT * FROM ${object}`;
    }
    if (field.length > 0) {
      queryString = `SELECT ${field.join(", ")} FROM ${object}`;
    }

    if (filterBy && operator && fieldValue) {
      queryString = `${queryString} WHERE ${filterBy} ${operator} '${fieldValue}'`;
    }

    if (sortBy.length > 0) {
      queryString = `${queryString} ORDER BY ${sortBy}`;
    }

    if (sortDir.length > 0) {
      queryString = `${queryString} ${sortDir}`;
    }

    if (nulls.length > 0) {
      queryString = `${queryString} ${nulls}`;
    }

    if (maxRecord.length > 0) {
      queryString = `${queryString} LIMIT ${maxRecord}`;
    } 

    if (exportForm.queryString.length > 0 && queryString !== exportForm.queryString) {
      exportForm.queryString = exportForm.queryString.replace(/\s+/g,' ').trim();
      queryString = exportForm.queryString;
    }
        
    this.queryString = queryString;
    if(!this.exportObj[this.queryIndex])
      this.exportObj[this.queryIndex].queryString = "";
    this.exportObj[this.queryIndex].queryString = queryString;
    this.exportFormValue[this.queryIndex].queryString = queryString;
  }

  byPassAPI(){
    let  sObjMap = {}; 
    let sDelLater = sessionStorage.getItem("delLater");
    if (!sDelLater) {
      this.getAllObjects();
      return false;
    }
    
    console.log("don't come until here for the first time.");    
    let oDelLater = JSON.parse(sDelLater);
    this.objects = oDelLater.objects;
    this.sObjectsNameLabelMap = oDelLater.sObjectsNameLabelMap;
  }
}

@Component({
  selector: "view-related-record",
  templateUrl: "viewRelatedRecord.html"
})
export class ViewRelatedRecord {
  childRecords = []
  recordForm: FormGroup;
  recordId = '';
  childRecResults = [];
  title = '';
  objectName = '';

  constructor(public dialogConfRef: MatDialogRef<ViewRelatedRecord>, fb: FormBuilder, private restService: RestService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.recordForm = fb.group({
      bottom: 0,
      fixed: false,
      top: 60,
      results: {}
    });
    this.recordId = data.recId;
    this.objectName = data.objectName;
    this.title = `${data.objectName} - Related Records`;
  }

  ngOnInit() {
    let childRecords = [];
    childRecords = JSON.parse(sessionStorage.getItem("childRlnMapping"));
    this.childRecords = childRecords;
    console.log("Loaded succesfully", this.childRecords);
  }


  onNoClick(): void {
    this.dialogConfRef.close();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  onChildRecSelect(child){
    var curIndex = sessionStorage.getItem("curQueryIndex");
    var curObjSelected = JSON.parse(sessionStorage.getItem("curObjSelected"));
    var nameOfObject = curObjSelected[curIndex];
    var results = this.recordForm.value.results;
    var that = this;

    if(child.value == null){
      this.openSnackBar("Please use a different record");
      return false;
    }
    console.log("getChildData", this.objectName, this.recordId, child);
    this.childRecResults = [];
    if(results[child.value]){
      this.childRecResults = results[child.value];
    } else {
      this.spinnerService.show();
      this.restService.getChildData(this.objectName, this.recordId, child.value).subscribe(
        data => {
          if(!results[child.value])
            results[child.value] = []
          console.log("data", data);
          if(data.done) {
            data.records.forEach(function(rec){
              var obj = {
                name: rec.Name || 'N/A',
                createdDate: new Date(rec.CreatedDate).toLocaleDateString("en-US"),
                LastModifiedDate: new Date(rec.LastModifiedDate).toLocaleDateString("en-US"),
              }
              results[child.value].push(obj);
              that.childRecResults.push(obj);
            });
          } else
            that.openSnackBar("Something went wrong")
          console.log("childData record", results);

        },
        error => console.log(error),
        () => this.spinnerService.hide()
      );
    }

  }


}

@Component({
  selector: "export-related-record",
  templateUrl: "exportRelatedRecord.html",
  styleUrls: ["./export.component.css"]
})
export class ExportRelatedRecord {
  @ViewChild('chips') chips;

  recordForm: FormGroup;
  title = '';
  objectName = '';
  recordId = "";
  visible = true;
  selectable: boolean = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  childRecCtrl = new FormControl();
  filteredChildRec: Observable<string[]>;
  selChildRecords = [];
  childRecords = [];
  recordIds = [];
  queryResult = [];

  @ViewChild('childRecInput') childRecInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(public dialogConfRef: MatDialogRef<ExportRelatedRecord>, fb: FormBuilder, private restService: RestService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.recordForm = fb.group({
      bottom: 0,
      fixed: false,
      top: 60,
      results: {}
    });
    this.recordId = data.recId;
    this.objectName = data.objectName;
    this.title = `${data.objectName} - Related Records`;
    
    data.queryResult.map((qr) => {
      this.recordIds.push(qr.Id);
    });
    console.log("this.queryResult", data.queryResult);

    this.filteredChildRec = this.childRecCtrl.valueChanges.pipe(
      startWith(null),
      map((record: string | null) => record ? this._filter(record) : this.childRecords.slice()));
  }

  ngOnInit() {
    //TODO: Optimize below code
    let childRecords = [];
    childRecords = JSON.parse(sessionStorage.getItem("childRlnMapping"));
    let childRecArr = [];
    childRecords.forEach(function(cr) {
      childRecArr.push(cr.viewValue);
    });
    this.childRecords = childRecArr;

    /*let refIdMapping = JSON.parse(sessionStorage.getItem("refIdMapping"));
    let that = this;
    refIdMapping.forEach(function(cri) {
      that.recordIds.push(cri.referenceId);
    });*/    
  }

  onChildRecSelect() {

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.selChildRecords.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.childRecCtrl.setValue(null);
    }
  }

  remove(record): void {
    const index = this.selChildRecords.indexOf(record);
    console.log("this.selChildRecords", this.selChildRecords);
    console.log("Does it reaches here?", index, record);
    if (index >= 0) {
      this.selChildRecords.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if(this.selChildRecords.length < 5)
      this.selChildRecords.push(event.option.viewValue);
    else
      this.openSnackBar("Please select a maximum of 5 child records!");
    this.childRecInput.nativeElement.value = '';
    this.childRecCtrl.setValue(null);

  }

  private _filter(value): string[] {
    const filterValue = value.toLowerCase();
    return this.childRecords.filter(cr => {
      cr.toLowerCase().indexOf(filterValue) === 0});
  }

  onNoClick() {
    this.dialogConfRef.close();
  }

  onYesClick() {
    let childRlnMapping = JSON.parse(sessionStorage.getItem("childRlnMapping"));
    let objNameMap = {};
    if(this.selChildRecords.length < 1) {
      this.openSnackBar("Please select atleast one child record.");
      return false;
    }

    if(this.objectName.length < 1) {
      this.openSnackBar("Please select a parent object.");
      return false;
    }

    if(this.recordIds.length < 1) {
      this.openSnackBar("Please export parents records first.");
      return false;
    }
    
    childRlnMapping.map(crm => {
      if(this.selChildRecords.indexOf(crm.viewValue) > -1) {
        objNameMap[crm.viewValue] = crm.value;
      }
    })
    
    console.log("child records push", this.objectName, objNameMap, this.recordIds);
    this.child_record_transfer(this.objectName, objNameMap, this.recordIds);
  }

  child_record_transfer(parent_object, objectNames, record_ids) {
    var result_map = this.get_response_map();
    for (var object in objectNames) {
      //Get Object Information
      this.restService.getFieldsOfObject(object).subscribe(
        data => {
          let creatableFields = [];
          let referenceFields = {};
          //let fields = [];
          data.fields.forEach(element => {
            if (element.createable) creatableFields.push(element.name);
            if (element.createable && element.type == 'reference') referenceFields[element.name] = '';
            /*fields.push({
              value: element.name,
              viewValue: element.label
            });*/
          });
         // that.exportObj[this.queryIndex].fields = fields;
          for (var i = 0; i < record_ids.length; i++) {
            //Get Child Records
            console.log("records ids", record_ids[i], record_ids);
            let recordId = record_ids[i];
            this.restService.getChildData(parent_object, recordId, objectNames[object]).subscribe(
              data => {               
                if (data.done) {
                 this.transfer_data(object, this.formatData(creatableFields, data.records, recordId, result_map[recordId.substring(3)],referenceFields ));
                } else
                  this.openSnackBar("Something went wrong");                  
              },
              error => console.log(error),
              () => this.spinnerService.hide()
            );
          }
  
        },
        error => console.log(error),
        () => this.spinnerService.hide()
      );
    }
  } 

  formatData(creatableFields, records, record_id, replacement_id,referenceFields) {
    let recordArr = [];
    records.forEach(rec => {
      let recordObj = rec;
      let objKeys = Object.keys(recordObj);
      let uniquekeyArr = this.compareArr(creatableFields, objKeys);
      let refId = recordObj.Id.substring(3);
      recordObj.attributes["referenceId"] = refId;
      objKeys.forEach(function (ele) {
        if (creatableFields.indexOf(ele) == -1 && ele != "attributes")
          delete recordObj[ele];
        if (recordObj[ele] == record_id) {
          recordObj[ele] = replacement_id;
        }else if(referenceFields.hasOwnProperty(ele)){
          delete recordObj[ele];
        }
      });
      delete recordObj.attributes.url;
      recordArr.push(recordObj);
    });
    return recordArr;
  }

  compareArr(arr1, arr2) {
    const finalArr = [];
    arr1.forEach(e1 =>
      arr2.forEach(e2 => {
        if (e1 === e2) {
          finalArr.push(e1);
        }
      })
    );
    return finalArr;
  }

  transfer_data(objectName, recordData) {
    this.spinnerService.show();
    console.log("request object", objectName, recordData);
    var reqData = {
      records: recordData
    };
    var reqDataString = JSON.stringify(reqData)
      .split("null")
      .join('""');
    var that = this;
    this.restService.orgtoOrgTransfer(objectName, reqDataString).subscribe(
      data => {
        console.log("records confirmation data", data.results);
        /*sessionStorage.setItem(
          "refIdMapping",
          JSON.stringify(data.results)
        );*/
        that.openSnackBar(objectName + "Records exported to destination org.");
      },
      error => {
        console.log(error);
        that.openSnackBar("Something went wrong! Please try again.");
      },
      () => {
        this.spinnerService.hide();
        this.onNoClick();
      }
    );
  }

  get_response_map() {
    var response_map = {};
    var resposne = JSON.parse(sessionStorage.getItem("refIdMapping"));
    for (var i = 0; i < resposne.length; i++) {
      response_map[resposne[i].referenceId] = resposne[i].id;
    }
    return response_map;
  }

}
