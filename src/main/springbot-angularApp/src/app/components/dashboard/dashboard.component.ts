import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest/rest.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jobIds = [];
  jobStatusFlag=false;
  selectedJobId;
  jobState="";
  recordsProcessed="";
  recordsFailed="";
  jobStatusObj;
  operation="";
  inProgressJobIds=[];

  constructor(private restService: RestService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    console.log("Generated job IDs::"+localStorage.getItem("allJobs"));
    this.jobIds = JSON.parse(localStorage.getItem("allJobs"));
    console.log(this.jobIds);
    this.inProgressJobIds=[];
    this.jobIds.forEach(id=>{
      this.restService.getJobStatus(id).subscribe(
        data =>{
          //console.log(data);
          this.jobStatusObj=JSON.parse(data.body);
          console.log(this.jobStatusObj);
          this.operation=this.jobStatusObj.operation;
          if(this.jobStatusObj.state=="InProgress" || this.jobStatusObj.state=="Open" || this.jobStatusObj.state=="UploadComplete"){
            this.inProgressJobIds.push(this.jobStatusObj);
          }
          else{
            this.jobIds.splice(this.jobIds.indexOf(id),1);
            //this.inProgressJobIds.splice(this.inProgressJobIds.indexOf(this.jobStatusObj),1);
          }
          //this.recordsProcessed=this.jobStatusObj.numberRecordsProcessed;
          //this.recordsFailed=this.jobStatusObj.numberRecordsFailed;
        },
        error => console.log(error),
        () => this.spinnerService.hide()
      );

    })
    localStorage.setItem("allJobs",JSON.stringify(this.jobIds));

    console.log("In progress Job Ids"+this.inProgressJobIds.length);
  }

  populateJobIdDropDown(){

  }

  getJobStatus(){
    this.spinnerService.show();
    
    //let textFld = <HTMLInputElement><any>document.getElementById("jobIdTxtFld");
    console.log(this.selectedJobId);
    if(this.selectedJobId!=null){
      this.restService.getJobStatus(this.selectedJobId).subscribe(
        data =>{
          //console.log(data);
          this.jobStatusObj=JSON.parse(data.body);
          console.log(this.jobStatusObj);
          this.operation=this.jobStatusObj.operation;
          this.jobState=this.jobStatusObj.state;
          this.recordsProcessed=this.jobStatusObj.numberRecordsProcessed;
          this.recordsFailed=this.jobStatusObj.numberRecordsFailed;
        },
        error => console.log(error),
        () => this.spinnerService.hide()
      );
      this.jobStatusFlag=true;
    }

  }

}
