import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})

export class ContactDialogComponent implements OnInit {

  contactForm: FormGroup;

  countries = [{'conuntry_id': 1,'conuntry_name': 'Canada'},
  {'conuntry_id': 2,'conuntry_name': 'USA'},
  {'conuntry_id': 3,'conuntry_name': 'India'},
  {'conuntry_id': 4,'conuntry_name': 'Aus'},
  {'conuntry_id': 5,'conuntry_name': 'Belgium'},
  {'conuntry_id': 6,'conuntry_name': 'Iceland'}]

  States = [{'state_id': 1,'state_name': 'Albama'},
  {'state_id': 2,'state_name': 'Alaska'},
  {'state_id': 3,'state_name': 'Alberta'},
  {'state_id': 4,'state_name': 'Arizona'},
  {'state_id': 5,'state_name': 'British'},
  {'state_id': 6,'state_name': 'Columbia'}]

  Cities = [{'city_id': 1,'city_name': 'Port Blair'},
  {'city_id': 2,'city_name': 'Adivivaram'},
  {'city_id': 3,'city_name': 'Balapur'},
  {'city_id': 4,'city_name': 'Chidiga'},
  {'city_id': 5,'city_name': 'Darnakal'},
  {'city_id': 6,'city_name': 'Dasnapur'}]


  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public contact: any ,public dialogRef: MatDialogRef<ContactDialogComponent>) { 
    this.createContactsDetails();
  }

  ngOnInit() {

  }


get contactName() { return this.contactForm.get('contactName'); }
get jobTitle() { return this.contactForm.get('jobTitle'); }
get contactNumber() { return this.contactForm.get('contactNumber'); }
get contactEmail() { return this.contactForm.get('contactEmail'); }
get streetAddress() { return this.contactForm.get('streetAddress'); }
get Country() { return this.contactForm.get('Country'); }
get State() { return this.contactForm.get('State'); }
get City() { return this.contactForm.get('City'); }
get postal() { return this.contactForm.get('postal'); }

  createContactsDetails() {
    this.contactForm = this.fb.group({
      contactName : new FormControl('' , [Validators.required]),
      jobTitle : new FormControl('' , [Validators.required]),
      contactNumber : new FormControl('' , [Validators.required]),
      contactEmail : new FormControl('' , [Validators.required ]),
      streetAddress : new FormControl('' , [Validators.required ]),
      Country : new FormControl('' , [Validators.required]),
      State : new FormControl('',[Validators.required]),
      City : new FormControl('',[Validators.required]),
      postal : new FormControl('',[Validators.required]),

    })
  }

  close(): void {
    this.dialogRef.close();
  }
}
