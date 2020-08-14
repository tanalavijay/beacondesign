import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addvendir-dialog',
  templateUrl: './addvendir-dialog.component.html',
  styleUrls: ['./addvendir-dialog.component.scss']
})
export class AddvendirDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddvendirDialogComponent>) { }

  ngOnInit() {

  }
  close(): void {
    this.dialogRef.close();
  }
}
