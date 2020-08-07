import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { CommentsComponent } from '../comments/comments.component';
import { BriefDialogComponent } from '../brief/brief-dialog/brief-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  sitevisits = [
    {sd:"Project Scope -01",ts:"Navin",vd:"05-02-2020",observations:false,report:true},
    {sd:"Project Scope -02",ts:"Sai",vd:"06-03-2020",observations:false,report:true},
    {sd:"Project Scope -03",ts:"Siva",vd:"23-06-2020",observations:true,report:false},
    {sd:"Project Scope -04",ts:"Nikhil",vd:"05-03-2020",observations:false,report:true},
    {sd:"Project Scope -05",ts:"Dhawal",vd:"06-06-2020",observations:true,report:false},
    {sd:"Project Scope -06",ts:"Praveen",vd:"05-08-2020",observations:false,report:false},
    {sd:"Project Scope -07",ts:"Ramesh",vd:"23-09-2020",observations:true,report:true},
    {sd:"Project Scope -08",ts:"Sai",vd:"07-07-2020",observations:false,report:false},
    {sd:"Project Scope -09",ts:"Srinu",vd:"09-02-2020",observations:false,report:true},
    {sd:"Project Scope -10",ts:"Shesha",vd:"05-08-2020",observations:true,report:false}]

  ngOnInit() {

  }

openDocDialog(stat){
    let dialogRef = this.dialog.open(BriefDialogComponent, {
      data: {data:stat,from:true},
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

  openRemarksDialog(assets) {
    let dialogRef = this.dialog.open(CommentsComponent, {
      data: assets,
      height: 'auto',
      width: '400px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
}
