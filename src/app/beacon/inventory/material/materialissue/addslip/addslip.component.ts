import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addslip',
  templateUrl: './addslip.component.html',
  styleUrls: ['./addslip.component.scss']
})
export class AddslipComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddslipComponent>) { }

  ngOnInit() {

  }
  close(): void {
    this.dialogRef.close();
  }

}
