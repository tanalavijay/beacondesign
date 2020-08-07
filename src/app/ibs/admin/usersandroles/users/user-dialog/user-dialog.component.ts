import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UserDialogComponent> ) { }
  
  roles:object[] =[
    {role_id:1,role_name:'Administrator ',permissions:'15/15',users:'Dwayne, Dave',status:true},
    {role_id:2,role_name:'Auditor',permissions:'0/15',users:'Emily', status:true},
    {role_id:3,role_name:'Auditee',permissions:'10/15',users:'Joe', status:true},
  ]

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
