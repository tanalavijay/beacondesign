import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-scheduleorder-dialog',
  templateUrl: './scheduleorder-dialog.component.html',
  styleUrls: ['./scheduleorder-dialog.component.scss']
})
export class ScheduleorderDialogComponent implements OnInit {

  site = [{branch_id:"1",branch_name:"P12007"},{branch_id:"1",branch_name:"P12002"},{branch_id:"1",branch_name:"P12300"}]
  construction = [{branch_id:"1",branch_name:"Structure"},{branch_id:"1",branch_name:"Architecture"},{branch_id:"1",branch_name:"Plumbing"}]
  checklist = [{branch_id:"1",branch_name:"Fire Safety Checklist"},{branch_id:"1",branch_name:"Routine Inspection Checklist"},{branch_id:"1",branch_name:"Weekly site safety inspection checklist"}]
  frequency = [{branch_id:"1",branch_name:"1"},{branch_id:"1",branch_name:"2"},{branch_id:"1",branch_name:"3"}]
  auditor = [{branch_id:"1",branch_name:"Vijay"},{branch_id:"1",branch_name:"Siva"},{branch_id:"1",branch_name:"Raj"}]
  
  constructor(public dialogRef: MatDialogRef<ScheduleorderDialogComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

}
