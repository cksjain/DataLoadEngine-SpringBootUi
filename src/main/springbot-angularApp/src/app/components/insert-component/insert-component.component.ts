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

export interface Objects {
  value: string;
  viewValue: string;
}
export interface Fields {
  value: string;
  viewValue: string;
  fieldValue: string;
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
  
  objects = [{ value: "", viewValue: "Select an Object" }];
/*
  objects: Objects[] = [
    {value: '', viewValue: 'Select an Object'},
    {value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation'},
    {value: 'Account', viewValue: 'Account'},
    {value: 'AccountBrand', viewValue: 'AccountBrand'},
    {value: 'AccountBrandShare', viewValue: 'AccountBrandShare'}
  ];*/
  fields: Fields[] = [
    {value: 'count()', viewValue: 'count()', fieldValue: ''},
    {value: 'AccountNumber', viewValue: 'AccountNumber', fieldValue: ''},
    {value: 'AccountSource', viewValue: 'AccountSource', fieldValue: ''},
    {value: 'AccountType__c', viewValue: 'AccountType__c', fieldValue: ''},
    {value: 'Account__ID', viewValue: 'ID', fieldValue: ''},
    {value: 'Name', viewValue: 'Name', fieldValue: ''},
    {value: 'Home Phone', viewValue: 'HomePhone', fieldValue: ''},
    {value: 'Cellphone', viewValue: 'Cellphone', fieldValue: ''},
    {value: 'City', viewValue: 'City', fieldValue: ''},
    
  ];
  section: string = 'STEP_1';
  creatableFields: any[];
  exportObj: any;
  childRlnMapping: any;
  queryIndex: any;

  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    
   }

  ngOnInit() {

    debugger;
    this.getAllObjects();
    debugger;
    this.setClickedRow = function(index) {
      this.selectedRow = index;
      this.selectedRecord = this.resultsFields[index];
      console.log("this.resultsFields[index]", this.resultsFields[index]);
    };
  }

  handleNext(){
    this.section = 'STEP_2';       
  }
  handlConfirm(){
    this.section = 'STEP_3';
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

    console.log('this.objects');

    console.log(this.objects);
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




}
