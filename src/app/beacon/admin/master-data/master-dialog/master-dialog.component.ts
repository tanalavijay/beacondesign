import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-master-dialog',
  templateUrl: './master-dialog.component.html',
  styleUrls: ['./master-dialog.component.scss']
})
export class MasterDialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public doc: any ,public dialogRef: MatDialogRef<MasterDialogComponent>) { 
    this.createProjectDetails();
  }
  conceptForm : FormGroup;
  
  countries = [{'conuntry_id': 1,'conuntry_name': 'Branches'},
  {'conuntry_id': 2,'conuntry_name': 'Construction Team'},
  {'conuntry_id': 3,'conuntry_name': 'Business Development Team'},
  {'conuntry_id': 4,'conuntry_name': 'Engineering Team'},
  {'conuntry_id': 5,'conuntry_name': 'Finance Team'},
  ]
  unit = [{'unit_id': 1,'unit_name': '$ / day'},
  {'unit_id': 2,'unit_name': '$ / km'},
  {'unit_id': 3,'unit_name': '$ each'},
  {'unit_id': 4,'unit_name': 'liters / km'}]

  limit =[{'limit_id': 1,'limit_name': 'Daily'},
  {'limit_id': 1,'limit_name': 'Weekly'},
  {'limit_id': 1,'limit_name': 'Monthly'},
  {'limit_id': 1,'limit_name': 'Yearly'},
  ]
  asset = [{'asset_id': 1,'asset_name': 'Damaged'},
  {'asset_id': 1,'asset_name': 'Excellent'},
  {'asset_id': 1,'asset_name': 'Has issues'},
  {'asset_id': 1,'asset_name': 'Minor Issues'}]
  
  ngOnInit() {

  }

  get code() { return this.conceptForm.get('code'); }
  get title() { return this.conceptForm.get('title'); }
  get Country() { return this.conceptForm.get('Country'); }
  get streetAddress() { return this.conceptForm.get('streetAddress'); }
  get budget() { return this.conceptForm.get('budget'); }
  get Reimbursable() { return this.conceptForm.get('Reimbursable'); }
  get Attachment() { return this.conceptForm.get('Attachment'); }

  createProjectDetails() {
    this.conceptForm = this.fb.group({
      code : new FormControl('' , [Validators.required]),
      title : new FormControl('',[Validators.required]),
      Country : new FormControl('',[Validators.required]),
      streetAddress : new FormControl('',[Validators.required]),
      budget : new FormControl('',[Validators.required]),
      Reimbursable : new FormControl('',[Validators.required]),
      Attachment : new FormControl('',[Validators.required]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }
}
