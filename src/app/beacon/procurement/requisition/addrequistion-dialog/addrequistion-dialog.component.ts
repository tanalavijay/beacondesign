import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addrequistion-dialog',
  templateUrl: './addrequistion-dialog.component.html',
  styleUrls: ['./addrequistion-dialog.component.scss']
})
export class AddrequistionDialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public asset: any ,public dialogRef: MatDialogRef<AddrequistionDialogComponent>) { 
   
  }
  
  ngOnInit() {
  }
  close(): void {
      this.dialogRef.close();
    }
}
