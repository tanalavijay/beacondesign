import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addproject-dialog',
  templateUrl: './addproject-dialog.component.html',
  styleUrls: ['./addproject-dialog.component.scss']
})
export class AddprojectDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddprojectDialogComponent> ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
