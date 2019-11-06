import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from "@angular/core";

import { RestService } from "../../rest/rest.service";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, NgModel, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import * as Papa from 'papaparse';


import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar
} from "@angular/material";
import { Inject } from '@angular/core';

export interface Objects {
  value: string;
  viewValue: string;
}
export interface Fields {
  value: string;
  viewValue: string;
  fieldValue: string;
  sObjectField?: string;
  sObjectExternalIdFieldMap?: string;
  label?:string;
}
@Component({
  selector: 'app-insert-component',
  templateUrl: './insert-component.component.html',
  styleUrls: ['./insert-component.component.css']
})
export class InsertComponentComponent implements OnInit {

  setClickedRow: Function;
  resultsFields = [];
  sObjectsNameLabelMap = {};
  fileToUpload: File = null;
  finalStatusMessage: any;
  csvData: any;
  resultJob: any;
  csvColumn: any;
  selectedSObject: any;
  sobjectFields = [];
  sobjectFieldsObs: Observable<Fields[]>;
  sobjectFieldsAsync$: Observable<[]>;
  sobjectExternalIdFieldsAsync$: Map<String, Observable<[]>> = new Map<String, Observable<[]>>();

  objects = [{ value: "", viewValue: "Select an Object" }];

  fields: Fields[] = [];
  section: string = 'STEP_1';
  creatableFields: any[];
  exportObj: any = {};
  childRlnMapping: any = [];
  queryIndex: any;
  sObjectFieldsMaster: any = {};
  sObjectFieldDetailsMaster: any = {};
  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService
  ) {

  }

  ngOnInit() {


    this.getAllObjects();
   
    this.setClickedRow = function (index) {
      this.selectedRow = index;
      this.selectedRecord = this.resultsFields[index];
      console.log("this.resultsFields[index]", this.resultsFields[index]);
    };
  }

  handleNext() {
    console.log(this.selectedSObject);
    this.fields = [];
    Papa.parse(this.fileToUpload, {
      header: true,
      skipEmptyLines: true,
      complete: (result, file) => {
        console.log(result);
        this.csvData = result.data;
        this.csvColumn = result.meta.fields;
        debugger;
        result.meta.fields.forEach(csvColumn => {

          this.fields.push({ value: csvColumn, viewValue: csvColumn, fieldValue: '' });
        })
      }
    });

    this.sobjectFieldsAsync$ = this.restService.getCreatableFieldsOfObject(this.selectedSObject);

    this.getFieldsObj(this.selectedSObject);
    console.log('#RP-> Fields -  ' + this.fields.toString);
    this.section = 'STEP_2';
  }



  convertToCSV(fields: any, resultData: any): any {
    debugger;
    var finalData = [];
    var finalColumnData = [];
    fields.forEach(j => {
      if (j.sObjectField != null && j.sObjectField != undefined && j.sObjectField != "") {
        if (j.sObjectExternalIdFieldMap != null && j.sObjectExternalIdFieldMap != undefined && j.sObjectExternalIdFieldMap != "") {
          //  External Id Present
          var arrVal = this.restService.allSobjectField[this.selectedSObject][j.sObjectField].relationshipName + '.' + j.sObjectExternalIdFieldMap;
          finalData.push(arrVal);
          finalColumnData.push(arrVal);

        } else {

          finalData.push(j.sObjectField);
          finalColumnData.push(j.sObjectField);
        }
      }
    });
    resultData.forEach(i => {
      fields.forEach(j => {
        if (j.sObjectField != null && j.sObjectField != undefined && j.sObjectField != "") {
          finalData.push(i[j.value]);
        }
      });
    });
    var array = typeof finalData != "object" ? JSON.parse(finalData) : finalData;

    var str = "";
    console.log("fields" + fields.length);
    for (var i = 0; i < array.length; i++) {
      if ((i + 1) % finalColumnData.length == 0)
        str += '"' + array[i] + '"' + "\n";
      else str += '"' + array[i] + '"' + ",";
    }
    console.log(str);
    return str;
  }


  handleInsert() {
    debugger;
    // this.fields[0].value;// Column in CSV
    //this.fields[0].sObjectField;// sObjectFieldMapping in CSV
    //this.fields[0].sObjectExternalIdFieldMap;// sObjectFieldMapping to external ID in CSV
    this.spinnerService.show();
    this.restService.createInsertJob(this.selectedSObject, 'INSERT').subscribe((result => {
      console.log(result);
      this.resultJob = result;
      let csvProcessedData = this.convertToCSV(this.fields, this.csvData);
      debugger;
      return this.restService.processInsertJob(csvProcessedData, result.id).subscribe((result) => {
        debugger;
        this.restService.changeStatusJob(this.resultJob.id).subscribe((res) => {
          debugger; console.log(res);
          this.section = 'STEP_3';
          if (res.Code == '200') {
            this.finalStatusMessage = 'Operation In Progress. Check Dashboard for status.';
          } else {

            this.finalStatusMessage = 'Operation Failed';
          }
          this.spinnerService.hide();
        });

        console.log(this.resultJob)
      });
    }))

  }


  handleBack() {
    this.section = 'STEP_1';
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log('File Uploaded!');
    console.log(this.fileToUpload);

    //this.fieldList=this.csvData;
    //this.fieldListChange.emit(this.fieldList);
    console.log(this.csvData);
    // this.section = 'STEP_2';
  }

  //get the list of all objects to show in dropdown
  getAllObjects() {
    this.spinnerService.show();
    let sObjMap = {};
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

    console.log('this.objects');

    console.log(this.objects);
  }


  checkFieldTypeReference(fieldName: any, index: any) {
    this.fields[index].sObjectExternalIdFieldMap = undefined;
    if (fieldName && this.sObjectFieldDetailsMaster[fieldName].type == 'reference') {
      // set observable referenceTo
      this.sobjectExternalIdFieldsAsync$.set(fieldName, this.restService.getExternalIdOfObject(this.sObjectFieldDetailsMaster[fieldName].referenceTo[0]));
      return true;
    }
    else { return false; }
  }
  getSmartLookUpFieldsObj(objectName: string) {

    this.spinnerService.show();
    var that = this;

    this.restService.getFieldsOfObject(objectName).subscribe(
      data => {
        this.sObjectFieldsMaster[this.selectedSObject] = data;
        console.log('this.sObjectFieldsMaster');
        console.log(this.sObjectFieldsMaster);
        // this.fields = [];
        this.creatableFields = [];
        let fields = [];
        debugger;
        data.fields.forEach(element => {
          this.sObjectFieldDetailsMaster[element.name] = element;
          if (element.createable) {
            this.creatableFields.push(element.name);
            fields.push({ value: element.name, viewValue: element.label, name: element.label });
            this.sobjectFields.push({ value: element.name, viewValue: element.label, name: element.label });

          }

        });

        this.sobjectFieldsObs = Observable.create(function (obs) {
          obs.next(this.sobjectFields);
        });

        console.log("this.sobjectFields" + this.sobjectFields.toString())

        let rln = {};
        data.childRelationships.forEach(element => {
          var obj = {};
          let nameLableMap = this.sObjectsNameLabelMap;
          if (element.relationshipName != null) {
            let viewVal = nameLableMap[element.childSObject];
            obj = {
              value: element.relationshipName,
              viewValue: viewVal//element.childSObject
            }
            this.childRlnMapping.push(obj);
          }
        });

        that.exportObj[objectName] = { "fields": fields, "childRlnMapping": this.childRlnMapping };

        // console.log(this.exportObj);
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
      () => { this.spinnerService.hide(); }
    );
  }


  //get the list of all fields to show in dropdown
  getFieldsObj(objectName: string) {
    this.spinnerService.show();
    var that = this;

    this.restService.getFieldsOfObject(objectName).subscribe(
      data => {
        this.sObjectFieldsMaster[this.selectedSObject] = data;
        // this.fields = [];
        this.creatableFields = [];
        let fields = [];
        debugger;
        this.sobjectFields = [];
        data.fields.forEach(element => {
          this.sObjectFieldDetailsMaster[element.name] = element;
          if (element.createable) {
            this.creatableFields.push(element.name);
            fields.push({ value: element.name, viewValue: element.label, name: element.label });
            this.sobjectFields.push({ value: element.name, viewValue: element.label, name: element.label });

          }

        });

        this.sobjectFieldsObs = Observable.create(function (obs) {
          obs.next(this.sobjectFields);
        });

        console.log("this.sobjectFields" + this.sobjectFields.toString())

        let rln = {};
        data.childRelationships.forEach(element => {
          var obj = {};
          let nameLableMap = this.sObjectsNameLabelMap;
          if (element.relationshipName != null) {
            let viewVal = nameLableMap[element.childSObject];
            obj = {
              value: element.relationshipName,
              viewValue: viewVal//element.childSObject
            }
            this.childRlnMapping.push(obj);
          }
        });

        that.exportObj[objectName] = { "fields": fields, "childRlnMapping": this.childRlnMapping };

        // console.log(this.exportObj);
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
      () => { this.spinnerService.hide(); }
    );
  }




}
