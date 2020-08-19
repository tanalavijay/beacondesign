import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addstock-dialog',
  templateUrl: './addstock-dialog.component.html',
  styleUrls: ['./addstock-dialog.component.scss']
})
export class AddstockDialogComponent implements OnInit {

  countries = [{'conuntry_id': 1,'conuntry_name': 'Amit Enterprises'},
  {'conuntry_id': 2,'conuntry_name': 'Elight Materials'},
  {'conuntry_id': 3,'conuntry_name': 'Integrated Construction Materials'},
  ]

  constructor(public dialogRef: MatDialogRef<AddstockDialogComponent>) { }

  ngOnInit() {

  }
  close(): void {
    this.dialogRef.close();
  }

}
