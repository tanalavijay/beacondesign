import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addtask-dialog',
  templateUrl: './addtask-dialog.component.html',
  styleUrls: ['./addtask-dialog.component.scss']
})
export class AddtaskDialogComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  isMenuOn : boolean = false;
   specs = [{is_selected:false,item:"Machinery check"},{is_selected:true,item:"Fix molding injection"}]
  constructor(public dialogRef: MatDialogRef<AddtaskDialogComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }
}
