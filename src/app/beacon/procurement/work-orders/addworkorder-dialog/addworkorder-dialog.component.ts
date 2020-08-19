import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addworkorder-dialog',
  templateUrl: './addworkorder-dialog.component.html',
  styleUrls: ['./addworkorder-dialog.component.scss']
})
export class AddworkorderDialogComponent implements OnInit {

  countries = [{'conuntry_id': 1,'conuntry_name': 'Naveen'},
  {'conuntry_id': 2,'conuntry_name': 'Siva'},
  {'conuntry_id': 3,'conuntry_name': 'Sai'},
  ]
  type = [{'conuntry_id': 1,'conuntry_name': 'Nikhil'},
  {'conuntry_id': 2,'conuntry_name': 'Vijay'},
  {'conuntry_id': 3,'conuntry_name': 'Prasanth'},
  ]
  make = [{'conuntry_id': 1,'conuntry_name': 'Canada'},
  {'conuntry_id': 2,'conuntry_name': 'USA'},
  {'conuntry_id': 3,'conuntry_name': 'UK'},
  ]

  constructor(public dialogRef: MatDialogRef<AddworkorderDialogComponent>) { }

  ngOnInit() {

  }
  close(): void {
    this.dialogRef.close();
  }
}
