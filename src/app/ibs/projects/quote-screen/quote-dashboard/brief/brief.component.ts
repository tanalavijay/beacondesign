import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SitevisitDialogComponent } from '../../../projects/project-dashboard/sitevisits/sitevisit-dialog/sitevisit-dialog.component';
import { AssignteamDialogComponent } from '../site-visits/assignteam-dialog/assignteam-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AdddocsDialogComponent } from './adddocs-dialog/adddocs-dialog.component';
import { RemarksDialogComponent } from './remarks-dialog/remarks-dialog.component';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss']
})
export class BriefComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { }

  sitevisits = [
  {sd:"Project Brief - 01",ts:"4",vd:"05-02-2020", dt:'Navin', observations:false,report:true},
  {sd:"Project Brief - 02",ts:"5",vd:"06-03-2020", dt:'Shiva', observations:false,report:true},
  {sd:"Project Brief - 03",ts:"3",vd:"23-06-2020", dt:'Navin', observations:true,report:false},
  {sd:"Project Brief - 04",ts:"1",vd:"05-03-2020", dt:'Lavanya', observations:false,report:true},
  {sd:"Project Brief - 05",ts:"7",vd:"06-06-2020", dt:'Raj', observations:true,report:false},
  {sd:"Project Brief - 06",ts:"6",vd:"05-08-2020", dt:'Shivanee', observations:false,report:false},
  ]
  ngOnInit() {

  }

  openAssignDialog1(stat){
    let dialogRef = this.dialog.open(RemarksDialogComponent, {
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
    let dialogRef = this.dialog.open(AdddocsDialogComponent, {
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
