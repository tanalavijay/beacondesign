import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { AddrequistionDialogComponent } from './addrequistion-dialog/addrequistion-dialog.component';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.scss']
})
export class RequisitionComponent implements OnInit {
  public showEmpty: boolean = false;
  filterToggle = false;
  purchaseorders= [{ponumber:"OM-001",items:"10",branch:"Need to get Materials",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"Pending"},
{ponumber:"OM-002",branch:"Received Materials",items:"4",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"In Process"},
{ponumber:"OM-003",branch:"Started working",items:"6",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"Completed"},
{ponumber:"OM-004",branch:"Work in progress",items:"1",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"Not Approved"},
{ponumber:"OM-005",branch:"Need to get Materials",items:"3",issuedate:"12-09-2020",duedate:"24-09-2020",totalamount:"IN Process"}]

  constructor(public dialog : MatDialog) { }

  ngOnInit() {

  }
  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddrequistionDialogComponent, {
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

  dowloadBulkUploadCampaignTemplate(item) {}

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
