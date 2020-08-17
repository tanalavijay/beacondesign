import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { QuotationDialogComponent } from './quotation-dialog/quotation-dialog.component';

@Component({
  selector: 'app-send-quotation',
  templateUrl: './send-quotation.component.html',
  styleUrls: ['./send-quotation.component.scss']
})
export class SendQuotationComponent implements OnInit {
  
  jobCodeArryForm: FormArray;
  docxForm: FormGroup;
  showEmpty: boolean = false;
  vendors = [{vendor_id:"1",vendor_name:"OM-01"},{vendor_id:"2",vendor_name:"OM-02"},{vendor_id:"3",vendor_name:"OM-03"}]
  branch = [{branch_id:"1",branch_name:"BM-01"},{branch_id:"2",branch_name:"BM-02"},{branch_id:"3",branch_name:"BM-03"}]

  constructor(public dialog: MatDialog,private location:Location,public fb:FormBuilder) { 
    this.createFormBuild();
  }

  ngOnInit() {
    this.addItem();
  }

  createFormBuild() {
    this.docxForm = this.fb.group({
      jobCodeDetails : new FormArray([]),
    })
  }

createItem(serviceDate, fromLocation, toLocation): FormGroup {
    return this.fb.group({
      serviceDate: [serviceDate,[Validators.required]],
      fromLocation: [fromLocation],
      toLocation: [toLocation,[Validators.required]],
    });
  }

  addItem(): void {
    this.jobCodeArryForm = this.docxForm.get('jobCodeDetails') as FormArray;
    this.jobCodeArryForm.push(this.createItem(false, null, null));
  }

  removeItem(index) {
    this.jobCodeArryForm.removeAt(index);
  }
  public openQuotationDialog(Campaign) {
    const dialogRef = this.dialog.open(QuotationDialogComponent, {
      data: Campaign,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(campaign => {
      if (campaign === 'save') {
        
      } else {
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
