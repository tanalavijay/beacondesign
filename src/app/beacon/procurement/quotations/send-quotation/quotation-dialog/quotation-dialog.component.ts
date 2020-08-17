import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-quotation-dialog',
  templateUrl: './quotation-dialog.component.html',
  styleUrls: ['./quotation-dialog.component.scss']
})
export class QuotationDialogComponent implements OnInit {
  notes:string = ""
  
  constructor(public dialogRef: MatDialogRef<QuotationDialogComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  toolBar = {
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"]
    ]
  }

  ngOnInit() {

  }
 close(){
    this.dialogRef.close(null)
  }
}
