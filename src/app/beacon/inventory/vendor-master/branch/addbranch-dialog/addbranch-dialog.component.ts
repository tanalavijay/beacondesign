import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addbranch-dialog',
  templateUrl: './addbranch-dialog.component.html',
  styleUrls: ['./addbranch-dialog.component.scss']
})
export class AddbranchDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddbranchDialogComponent>) { }

  ngOnInit() {

  }
  
  close(): void {
    this.dialogRef.close();
  }

}
