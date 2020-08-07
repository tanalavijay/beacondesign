import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sitevist-adddoc',
  templateUrl: './sitevist-adddoc.component.html',
  styleUrls: ['./sitevist-adddoc.component.scss']
})
export class SitevistAdddocComponent implements OnInit {

  filesToUpload = [];
  teamForm: FormGroup;
  
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public team: any ,public dialogRef: MatDialogRef<SitevistAdddocComponent>) { 
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
