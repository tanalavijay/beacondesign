import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {
  projectForm: FormGroup;

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddProjectDialogComponent>) { 
    this.createProjectDetails();
  }
  countries = [{'conuntry_id': 1,'conuntry_name': 'Construction'},
  {'conuntry_id': 2,'conuntry_name': 'Engineering'},
  {'conuntry_id': 3,'conuntry_name': 'Machine work'},
  ]
  
  States = [{'state_id': 1,'state_name': 'Nikhil'},
  {'state_id': 2,'state_name': 'Akhil Reddy'},
  {'state_id': 3,'state_name': 'Siva'},
  {'state_id': 4,'state_name': 'Sai'},
  {'state_id': 5,'state_name': 'Navin'},
  {'state_id': 6,'state_name': 'RK'}]

  ngOnInit() {

  }

  get contactName() { return this.projectForm.get('contactName'); }
  get jobTitle() { return this.projectForm.get('jobTitle'); }
  get contactNumber() { return this.projectForm.get('contactNumber'); }
  get contactEmail() { return this.projectForm.get('contactEmail'); }
  get streetAddress() { return this.projectForm.get('streetAddress'); }
  get Country() { return this.projectForm.get('Country'); }
  get State() { return this.projectForm.get('State'); }
  get City() { return this.projectForm.get('City'); }
  get postal() { return this.projectForm.get('postal'); }
  get invoice() { return this.projectForm.get('invoice'); }

    createProjectDetails() {
      this.projectForm = this.fb.group({
        contactName : new FormControl('' , [Validators.required]),
        jobTitle : new FormControl('' , [Validators.required]),
        contactNumber : new FormControl('' , [Validators.required]),
        contactEmail : new FormControl('' , [Validators.required ]),
        streetAddress : new FormControl('' , [Validators.required ]),
        Country : new FormControl('' , [Validators.required]),
        State : new FormControl('',[Validators.required]),
        City : new FormControl('',[Validators.required]),
        postal : new FormControl('',[Validators.required]),
        invoice : new FormControl('',[Validators.required])
      })
    }
  
    close(): void {
      this.dialogRef.close();
    }
}
