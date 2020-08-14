import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddvendirDialogComponent } from './addvendir-dialog/addvendir-dialog.component';

@Component({
  selector: 'app-vendor-master',
  templateUrl: './vendor-master.component.html',
  styleUrls: ['./vendor-master.component.scss']
})
export class VendorMasterComponent implements OnInit {
  
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  public showEmpty: boolean = false;
  filterToggle = false;

  vendormaster=[{vendorname:"Amit Constructions",code:"AC",branch:"2",contactperson:"Abhilash kumar",designation:"manager",email:"abhilash@gmail.com",phonenumber:"+91 8691256318",Status:"true"},
{vendorname:"Action Construction Equipment Limited",code:"ACEL",branch:"4",contactperson:"K. ranjith",designation:"gm",email:"ranjith@acel.com",phonenumber:"+91 8656321318",Status:"true"},
{vendorname:"Anand Enterprises",code:"AE",contactperson:"Vaibhav gupta",branch:"1",designation:"supervisor",email:"vaibhav@gmail.com",phonenumber:"+91 9875321318",Status:"true"},
{vendorname:"APS Heavy Engineering Company",code:"APSH",contactperson:"Amit kulkarni",branch:"2",designation:"hod",email:"amit.hod@gmail.com",phonenumber:"+91 6892321318",Status:"true"},
{vendorname:"Anjith Automotives (RCVND)",code:"AA",contactperson:"Neeraja naidu",branch:"1",designation:"manager",email:"aa@aa.com",phonenumber:"+91 9875325692",Status:"true"},
{vendorname:"Alpha Teknisk Pvt Ltd",code:"ATPL",contactperson:"Siva kumar",branch:"2",designation:"manager",email:"atpl.manager@gmail.com",phonenumber:"+91 8975621318",Status:"true"}]

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddvendirDialogComponent, {
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
