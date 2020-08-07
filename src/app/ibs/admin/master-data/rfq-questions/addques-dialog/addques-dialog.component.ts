import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addques-dialog',
  templateUrl: './addques-dialog.component.html',
  styleUrls: ['./addques-dialog.component.scss']
})
export class AddquesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddquesDialogComponent> ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
