import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { SitevisitdialogComponent } from './sitevisitdialog/sitevisitdialog.component';
import { SitevisitadddocComponent } from './sitevisitadddoc/sitevisitadddoc.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sitevisits',
  templateUrl: './sitevisits.component.html',
  styleUrls: ['./sitevisits.component.scss']
})
export class SitevisitsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  sitevisits = [
  {sd:"01-02-2020",ts:"4",vd:"05-02-2020",observations:false,report:true},
  {sd:"04-03-2020",ts:"5",vd:"06-03-2020",observations:false,report:true},
  {sd:"02-06-2020",ts:"3",vd:"23-06-2020",observations:true,report:false},
  {sd:"03-03-2020",ts:"1",vd:"05-03-2020",observations:false,report:true},
  {sd:"11-04-2020",ts:"7",vd:"06-06-2020",observations:true,report:false},
  {sd:"13-02-2020",ts:"6",vd:"05-08-2020",observations:false,report:false},
  {sd:"21-11-2020",ts:"2",vd:"23-09-2020",observations:true,report:true},
  {sd:"23-10-2020",ts:"3",vd:"07-07-2020",observations:false,report:false},
  {sd:"11-02-2020",ts:"9",vd:"09-02-2020",observations:false,report:true},
  {sd:"01-05-2020",ts:"10",vd:"05-08-2020",observations:true,report:false}]

  ngOnInit() {

  }

  openAssignDialog1(stat){
    let dialogRef = this.dialog.open(SitevisitdialogComponent, {
      data: stat,
      height: 'auto',
      width: '730px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if(prospects == 'save') {
  
      }
    });
  }
  
  openAssignDialog(stat){
    let dialogRef = this.dialog.open(SitevisitadddocComponent, {
      data: stat,
      height: 'auto',
      width: '730px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if(prospects == 'save') {
  
      }
    });
  }
  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

}
