import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addclient-dialog',
  templateUrl: './addclient-dialog.component.html',
  styleUrls: ['./addclient-dialog.component.scss']
})
export class AddclientDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddclientDialogComponent> ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
