import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BriefDialogComponent } from 'src/app/ibs/projects/projects/project-dashboard/brief/brief-dialog/brief-dialog.component';

@Component({
  selector: 'app-adddocs-dialog',
  templateUrl: './adddocs-dialog.component.html',
  styleUrls: ['./adddocs-dialog.component.scss']
})
export class AdddocsDialogComponent implements OnInit {

  docxForm: FormGroup;
  filesToUpload = [];
  jobCodeArryForm: FormArray;
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public doc: any ,public dialogRef: MatDialogRef<AdddocsDialogComponent>) {
    this.createFormBuild();
   }

  ngOnInit() {
    this.addItem();
  }

  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }
   
  get docRef() { return this.docxForm.get('docRef'); }  
  get filesSelect() { return this.docxForm.get('filesSelect'); }
  
  createFormBuild() {
    this.docxForm = this.fb.group({
      jobCodeDetails : new FormArray([]),
    })
  }
  
  createItem(docRef,filesSelect): FormGroup {
    return this.fb.group({
      docRef: [docRef,[Validators.maxLength(50)]],
      filesSelect: [filesSelect, [Validators.required]],
    });
  }
  
  addItem(): void {
    this.jobCodeArryForm = this.docxForm.get('jobCodeDetails') as FormArray;
    this.jobCodeArryForm.push(this.createItem( null, null));
  }
  
  removeItem(index) {
    this.jobCodeArryForm.removeAt(index);
  }
  
 close(): void {
    this.dialogRef.close();
  }
}
