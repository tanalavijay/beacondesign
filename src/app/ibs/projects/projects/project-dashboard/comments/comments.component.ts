import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentsForm:FormGroup;
  
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public comments: any ,public dialogRef: MatDialogRef<CommentsComponent>) {
    this.createCommentsForm();
   }

  ngOnInit() {

  }

  get comment() { return this.commentsForm.get('comment'); }

  createCommentsForm() {
    this.commentsForm = this.fb.group({
      comment : new FormControl('',[Validators.required , Validators.maxLength(500)])
    })
  }

  saveComment(){

  }

  close(){
    this.dialogRef.close();
  }
}
