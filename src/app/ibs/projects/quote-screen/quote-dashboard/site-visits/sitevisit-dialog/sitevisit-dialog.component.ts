import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-sitevisit-dialog',
  templateUrl: './sitevisit-dialog.component.html',
  styleUrls: ['./sitevisit-dialog.component.scss']
})
export class SitevisitDialogComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(public dialogRef: MatDialogRef<SitevisitDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
