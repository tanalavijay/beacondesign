import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addmaterial-dialog',
  templateUrl: './addmaterial-dialog.component.html',
  styleUrls: ['./addmaterial-dialog.component.scss']
})
export class AddmaterialDialogComponent implements OnInit {

  countries = [{'conuntry_id': 1,'conuntry_name': 'accident'},
  {'conuntry_id': 2,'conuntry_name': 'miscellaneous'},
  {'conuntry_id': 3,'conuntry_name': 'preventative'},
  ]
  type = [{'conuntry_id': 1,'conuntry_name': 'forklift'},
  {'conuntry_id': 2,'conuntry_name': 'backhoeloader'},
  {'conuntry_id': 3,'conuntry_name': 'crane'},
  ]
  make = [{'conuntry_id': 1,'conuntry_name': 'Tata'},
  {'conuntry_id': 2,'conuntry_name': 'jcb'},
  {'conuntry_id': 3,'conuntry_name': 'caterpillar'},
  ]
  model = [{'conuntry_id': 1,'conuntry_name': 'xc60'},
  {'conuntry_id': 2,'conuntry_name': 'xj74'},
  {'conuntry_id': 3,'conuntry_name': 'xc62'},
  ]
  constructor(public dialogRef: MatDialogRef<AddmaterialDialogComponent>) { }

  ngOnInit() {

  }
  close(): void {
    this.dialogRef.close();
  }

}
