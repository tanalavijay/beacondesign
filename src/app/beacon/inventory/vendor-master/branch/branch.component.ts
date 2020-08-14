import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { Location } from '@angular/common';
import { AddbranchDialogComponent } from './addbranch-dialog/addbranch-dialog.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  coreModules = [{subject1:"Ayyapa Society",subject:"Hyd",colorcode:"#25a791",name:"Siva",location:"Madhapur,Hyd-50081"},
  {subject1:"Ayyapa Society",subject:"Hyd",colorcode:"#038317",name:"Siva",location:"Madhapur,Hyd-50081"},
  {subject1:"Ayyapa Society",subject:"Hyd",colorcode:"#25a791",name:"Siva",location:"Madhapur,Hyd-50081"},]
  
  constructor(public dialog: MatDialog,private location:Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
  public openBranchDialog(Campaign) {
    const dialogRef = this.dialog.open(AddbranchDialogComponent, {
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

  openDeleteDialog(value) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: value,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (value != null && value !== undefined) {
      
      }
    });
   }

}
