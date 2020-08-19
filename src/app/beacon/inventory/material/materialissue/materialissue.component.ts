import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddslipComponent } from './addslip/addslip.component';

@Component({
  selector: 'app-materialissue',
  templateUrl: './materialissue.component.html',
  styleUrls: ['./materialissue.component.scss']
})
export class MaterialissueComponent implements OnInit {

  public showEmpty: boolean = false;
  filterToggle = false;
  consignments= [{issue:"OM001",date:"05-06-2020",by:"Harish",to:"Lavanya",itemmake:"Tata",itemmodel:"xc60",items:"2",status:"pending"},
  {issue:"OM002",date:"06-06-2020",by:"Naven",to:"Surya",itemmake:"jcb",itemmodel:"xj74",items:"3",status:"In Progress"},]
  

  constructor(public dialog: MatDialog,private location:Location) { }

  ngOnInit() {

  }

 goBack() {
    this.location.back();
  }
  
  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddslipComponent, {
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
