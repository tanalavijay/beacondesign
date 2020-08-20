import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { ScheduleorderDialogComponent } from './scheduleorder-dialog/scheduleorder-dialog.component';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {

  audit = [{auditid:"OM001",project:"P12002",constructionsubcategory:"Structure",checklist:"Fire Safety Checklist",auditor:"Navin",startdate:"01-08-2020",enddate:"08-08-2020",submissiondate:"12-08-2020",Status:"In Progress"},
  {auditid:"OM002",project:"P12007",constructionsubcategory:"Architecture",checklist:"Routine Inspection Checklist",auditor:"Siva",startdate:"02-08-2020",enddate:"09-08-2020",submissiondate:"13-08-2020",Status:"Delayed"},
  {auditid:"OM003",project:"P12301",constructionsubcategory:"Plumbing",checklist:"Site Safety Inspection Checklist",auditor:"Vijay",startdate:"03-08-2020",enddate:"10-08-2020",submissiondate:"14-08-2020",Status:"Completed"},
  {auditid:"OM004",project:"P12012",constructionsubcategory:"Electrical",checklist:"Fire Safety Checklist",auditor:"Raj",startdate:"04-08-2020",enddate:"18-08-2020",submissiondate:"22-08-2020",Status:"In Progress"},
  {auditid:"OM005",project:"P12082",constructionsubcategory:"Structure",checklist:"Routine Inspection Checklist",auditor:"Navin",startdate:"05-08-2020",enddate:"28-08-2020",submissiondate:"31-08-2020",Status:"Completed"}]

  constructor(public dialog : MatDialog) { }

  ngOnInit() {

  }

  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(ScheduleorderDialogComponent, {
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
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
}
