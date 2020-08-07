import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-remarks-dialog',
  templateUrl: './remarks-dialog.component.html',
  styleUrls: ['./remarks-dialog.component.scss']
})
export class RemarksDialogComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(public dialogRef: MatDialogRef<RemarksDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
