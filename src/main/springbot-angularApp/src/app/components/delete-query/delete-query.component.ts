import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl} from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { RestService } from '../../rest/rest.service';
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable, observable, forkJoin} from 'rxjs';
import {map, startWith, switchMap, mergeMap} from 'rxjs/operators';
import { element } from '@angular/core/src/render3';
import { CHECKBOX_REQUIRED_VALIDATOR } from '@angular/forms/src/directives/validators';
import { delay } from 'q';
//import { type } from 'os';



export interface Fields {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-delete-query',
  templateUrl: './delete-query.component.html',
  styleUrls: ['./delete-query.component.css']
})
export class DeleteQueryComponent implements OnInit {
  deleteForm: FormGroup;
  objects = [{ value: "", viewValue: "Select an Object" }];
  fields: Fields[] = [];
  queryString = "";
  show_result = true;
  queryIndex="";
  exportObj = {};
  sObjectsNameLabelMap = {};
  creatableFields = [];
  childRlnMapping = [];
  columns = [];
  resultsFields = [];
  deleteRows= [];
  arrayOfIds= [];
  deleteWarning="";
  delFlag=false;
  addNewFilterRowFlag=false;
  statusCode="";
  csv="";
  jobId="";
  allJobIds=[];
  processDelJobResp="";
  countOfRows=0;
  batchSize;

  idSelector= [];



  queryRow = [{value: ''}, {value: ''}, {value: ''}, {value: ''}];

  setClickedRow: Function;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private restService: RestService,
    private spinnerService: Ng4LoadingSpinnerService) {

      this.getAllObjects();

      this.setClickedRow = function(index) {
        this.selectedRow = index;
        this.selectedRecord = this.resultsFields[index];
        console.log("this.resultsFields[index]", this.resultsFields[index]);
      };
      
     }

  ngOnInit() {
    /** this.form = this.fb.group({
      objects: [{ value: "", viewValue: "Select an Object" }],
      where: "",
      orderBy: "",
      bulkApi: false,
      hardDelete: false,
      serialCode: false
      */

    this.deleteForm = this.fb.group({
      queries: this.fb.array([])
      });
    this.addquery();

  }



  get queryForms() {
    return this.deleteForm.get("queries") as FormArray;
  }

  get deleteFormValue() {
    return this.deleteForm.value.queries;
  }

  

  onSubmit(){
    console.log("this.form", this.deleteForm.value);
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
    let deleteForm = this.deleteForm.value.queries;
    let objectName = deleteForm[index].object;
    //added by aman for fetching fields for particular objects
    if (objectName !== "Select an Object") {
      this.getFieldsObj(objectName);
    }
    let obj = {};
    obj[index] = objectName;
    sessionStorage.setItem("curObjSelected", JSON.stringify(obj));
    this.queryStringBuilder();
    //this.queryString = `SELECT * FROM ${deleteForm[index].object}`;
  }


  queryStringBuilder() {
    let deleteForm = this.deleteFormValue[this.queryIndex];
    let object = deleteForm.object;
    let field = deleteForm.field;
    let filterBy = deleteForm.filterBy;
    let operator = deleteForm.operator;
    let fieldValue = deleteForm.fieldValue;
    
    let queryString = "";
    if (object.length > 0) {
      //queryString = `SELECT * FROM ${object}`;
      queryString = `SELECT Id FROM ${object}`;
    }
    if (field.length > 0) {
      queryString = `SELECT ${field.join(", ")} FROM ${object}`;
    }

    if (filterBy && operator && fieldValue) {
      queryString = `${queryString} WHERE ${filterBy} ${operator} '${fieldValue}'`;
    }

    if (deleteForm.queryString.length > 0 && queryString !== deleteForm.queryString) {
      deleteForm.queryString = deleteForm.queryString.replace(/\s+/g,' ').trim();
      queryString = deleteForm.queryString;
    }
        
    this.queryString = queryString;
    if(!this.exportObj[this.queryIndex])
      this.exportObj[this.queryIndex].queryString = "";
    this.exportObj[this.queryIndex].queryString = queryString;
    this.deleteFormValue[this.queryIndex].queryString = queryString;
  }


  addquery() {
    const query = this.fb.group({
      object: "",
      field: "",
      queryString: "",
      filterBy: "",
      operator: "",
      fieldValue: ""  
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



  querySOQL(index) {
    this.queryIndex = index;
    var retrievedData;
    
    let deleteForm = this.deleteFormValue[this.queryIndex];
    
    this.spinnerService.show();
    this.restService.soql_query(deleteForm.queryString).subscribe(
      data => {
        retrievedData = JSON.parse(data.body);
        this.countOfRows=retrievedData.records.length;
        this.resultsFields=retrievedData.records;
        let sessionExportResults = JSON.parse(
          sessionStorage.getItem("exportResults")
        );
        if (!sessionExportResults) sessionExportResults = {};

        sessionExportResults[index] = data.body;
        sessionStorage.setItem(
          "exportResults",
          JSON.stringify(sessionExportResults)
        );

        //this.updateResultsTable(JSON.parse(retrievedData));
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
  }

  updateResultsTable(data) {
    this.show_result = true;
    let index = this.queryIndex;
    let deleteForm = this.deleteForm.value.queries;
    let sSelect = "SELECT", sFrom = "FROM";
    let queryString = deleteForm[index].queryString;
    let columns = deleteForm[index].field;
    if (queryString) {
      let aMatch = queryString.match(new RegExp(sSelect + "(.*)" + sFrom));
      if (aMatch != null) {
        columns = aMatch[1].trim().split(", ");
      }
    }
    
    this.exportObj[this.queryIndex].columns = columns;
    this.exportObj[this.queryIndex].exportResult = data.records;

    this.columns = deleteForm[index].field;
    this.resultsFields = data.records;
  }

  onCheckboxChange(index, event) {
    let status= event.currentTarget.checked;
      if(status) {
        console.log("Adding index of the selected row"+index);
        this.idSelector.push(index);
      } else {
        //this.idSelector.pop(result.id);
        console.log("Removing index of the selected row"+index);
        let tmpIndx= this.idSelector.indexOf(index);
        this.idSelector.splice(tmpIndx,1);
    }
  
  console.log("Check whether selected checkbox indexes are present"+this.idSelector);
  
  }


  idsToBedeletedFromTable(){
    console.log("Inside idsToBedeletedFromTable function::")
    if(this.idSelector!=null){
      this.idSelector.forEach(element =>{
        if(!(this.deleteRows.indexOf(this.resultsFields[element].Id)!=-1))
          this.deleteRows.push(this.resultsFields[element].Id);
      })
    }
    console.log("Rows with following IDs to be deleted::");
    this.deleteRows.forEach(element=>{
      console.log(element);
    })
  }

  checkAll() {
    let checkboxes = (<HTMLInputElement[]><any>document.getElementsByName("selected"));
    let selectallcb =(<HTMLInputElement[]><any>document.getElementsByName("selectAll"));
    if (selectallcb[0].type=="checkbox" && selectallcb[0].checked) {
      for (let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i]);
        if (checkboxes[i].type == "checkbox") {
          checkboxes[i].checked = true;
          this.idSelector.push(i);
        }
      }
    } else {
      this.idSelector =[];
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox") {
          checkboxes[i].checked = false;
          
        }
      }
    }
  }

  convertToCSV(): any {
    let csvArr = [];
    var str = "\"id\"\n";  
    for(let i=0;i<this.resultsFields.length;i++){
      if (i==this.resultsFields.length-1){
          str += '"' + this.resultsFields[i].Id + '"';
          //csvArr.push(str);
      }
      else str += '"' + this.resultsFields[i].Id + '"' + "\n";
      /*if(this.batchSize.value!=0 && i%(this.batchSize.value)==0 && i!=0){
        console.log(str.substring(0,str.length-1));
        csvArr.push(str.substring(0,str.length-1));
        str = "\"id\"\n";
      }*/
    }  
    console.log("CSV in str::"+str); 

    let tempArr = str.split("\n");
    console.log("Values in tempArr::");
    console.log(tempArr);
    if(this.batchSize.value>0 && tempArr.length>this.batchSize.value){
      let tmpStr = "\"id\"\n";  
      for(let j=1;j<tempArr.length;j++){
        tmpStr+=tempArr[j]+"\n";
        if(j%this.batchSize.value==0){
          csvArr.push(tmpStr);
          tmpStr = "\"id\"\n";
        }
      }
      csvArr.push(tmpStr);
    }
    else{
      csvArr.push(str);
    }
    console.log(" Array of Comma seperated IDs::\n"+csvArr);
    return csvArr;
  }

  createDeleteJob(){
    
    this.batchSize = <HTMLInputElement>document.getElementById('batchSize');
    let csvArr = this.convertToCSV();
    //console.log(csvArr);
    let obj=this.deleteFormValue[this.queryIndex].object;
    console.log("Inside createDeleteJob()::"+obj);
    this.spinnerService.show();
    console.log("Before forkJoin...")
    /*forkJoin([this.restService.createDeleteJob(obj,"DELETE")]).pipe(switchMap(result=>{
      console.log(result[0]);
      this.jobId=result[0].id;
      console.log("Job Id::"+this.jobId);
      this.allJobIds = JSON.parse(localStorage.getItem("allJobs"));
      this.allJobIds.push(result[0].id);       
      localStorage.setItem("allJobs",JSON.stringify(this.allJobIds));
      let response=[];
      csvArr.forEach(csv=>{
        //this.processDeleteJob(csv,result[0].id);
        delay(200);
         this.restService.processDeleteJob(csv,result[0].id).subscribe((resp)=>{
           console.log("csv::"+csv);
           console.log(resp);
           response=resp;
         },
         error => console.log(error),
          () => this.spinnerService.hide()
         );
        }
      )
      if(null!=this.jobId){
        this.restService.changeStatusJob(this.jobId);
      }
      return response;
      //return this.restService.processDeleteJob(csvArr[0],result[0].id);
    })).subscribe((data)=>{


    },
    error => console.log(error),
    () => this.spinnerService.hide()
  
    
    );*/



    //Trying to process all three service calls in one go
    this.restService.createDeleteJob(obj,"DELETE").subscribe(createJobData=>{
      console.log("Inside new subscribe method::");
      //debugger;
      console.log(createJobData);
      this.jobId=createJobData.id;
      console.log("Job Id::"+this.jobId);
      this.allJobIds = JSON.parse(localStorage.getItem("allJobs"));
      this.allJobIds.push(createJobData.id);       
      localStorage.setItem("allJobs",JSON.stringify(this.allJobIds));
      let response=[];
      /*csvArr.forEach(csv=>{
        //this.processDeleteJob(csv,result[0].id);
         this.restService.processDeleteJob(csv,createJobData.id).subscribe((resp)=>{
           console.log("csv::"+csv);
           debugger;
           console.log(resp);
           response=resp;
           
         });
      });*/
      //debugger;
      this.restService.uploadBatches(csvArr,createJobData.id);
      //debugger;
      this.restService.changeStatus(createJobData.id);
      //debugger;
    },
    error => console.log(error),
    () => this.spinnerService.hide()
    );

  }
      
   processDeleteJob(csv,id){
    this.spinnerService.show();
    this.restService.processDeleteJob(csv, id).subscribe(
      (data)=>{
        //this.statusCode=data;
        this.processDelJobResp=data.code;
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
   }

  
  }
  

