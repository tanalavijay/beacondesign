import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addsurvey-dialog',
  templateUrl: './addsurvey-dialog.component.html',
  styleUrls: ['./addsurvey-dialog.component.scss']
})
export class AddsurveyDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddsurveyDialogComponent> ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
