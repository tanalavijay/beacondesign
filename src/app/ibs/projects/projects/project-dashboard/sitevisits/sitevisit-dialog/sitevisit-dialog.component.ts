import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sitevisit-dialog',
  templateUrl: './sitevisit-dialog.component.html',
  styleUrls: ['./sitevisit-dialog.component.scss']
})
export class SitevisitDialogComponent implements OnInit {

  teamForm: FormGroup;
  
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public team: any ,public dialogRef: MatDialogRef<SitevisitDialogComponent>) { 
    // this.createTeamDetails()
  }
  teams = [{is_selected:false,name:"sai"},
  {is_selected:false,name:"siva"},
  {is_selected:false,name:"nikhil"},
  {is_selected:false,name:"ram"},
  {is_selected:false,name:"akhil"},
  {is_selected:false,name:"navin"}]

  ngOnInit() {

  }

  // get City() { return this.teamForm.get('City'); }
  // createTeamDetails() {
  //   this.teamForm = this.fb.group({
  //     City : new FormControl('' , [Validators.required]),
  //   })
  // }

  close(): void {
    this.dialogRef.close();
  }

}
