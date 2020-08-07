import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SitevisitDialogComponent } from 'src/app/ibs/projects/projects/project-dashboard/sitevisits/sitevisit-dialog/sitevisit-dialog.component';

@Component({
  selector: 'app-assignteam-dialog',
  templateUrl: './assignteam-dialog.component.html',
  styleUrls: ['./assignteam-dialog.component.scss']
})
export class AssignteamDialogComponent implements OnInit {
  filesToUpload = [];
  teamForm: FormGroup;
  
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public team: any ,public dialogRef: MatDialogRef<SitevisitDialogComponent>) { 
    this.createTeamDetails()
  }
  teams = [{is_selected:false,name:"sai"},
  {is_selected:false,name:"siva"},
  {is_selected:false,name:"nikhil"},
  {is_selected:false,name:"ram"},
  {is_selected:false,name:"akhil"},
  {is_selected:false,name:"navin"}]

  ngOnInit() {

  }
  get City() { return this.teamForm.get('City'); }
  createTeamDetails() {
    this.teamForm = this.fb.group({
      City : new FormControl('' , [Validators.required]),
    })
  }
  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }
  close(): void {
    this.dialogRef.close();
  }

}
