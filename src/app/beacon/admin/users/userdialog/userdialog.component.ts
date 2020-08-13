import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.scss']
})
export class UserdialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UserdialogComponent> ) { }
  


  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
