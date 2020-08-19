import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddstockDialogComponent } from './addstock-dialog/addstock-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  public showEmpty: boolean = false;
  filterToggle = false;
  consignments= [{vendorname:"Amit Enterprises",branch:"Stock-01",No:"ST-001",items:"2",POdate:"24-08-2020",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00",Status:"Pending"},
{vendorname:"ABC Mangers",branch:"Stock-02",No:"ST-108",POdate:"24-08-2020",items:"1",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00",Status:"In Progress"},
{vendorname:"Elight Materials",branch:"Stock-04",No:"ST-125",POdate:"24-08-2020",items:"3",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00",Status:"Completed"},
{vendorname:"Integrated Construction Materials",branch:"Stock-02",No:"ST-1035",items:"2",POdate:"24-08-2020",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00",Status:"In Progress"},
{vendorname:"Amit Enterprises",branch:"Stock-03",No:"ST-5623",POdate:"24-08-2020",items:"5",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00",Status:"In Progress"},
{vendorname:"Amit Enterprises",branch:"Stock-04",No:"ST-5612",POdate:"24-08-2020",items:"1",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00",Status:"Pending"}]
  

constructor(public dialog : MatDialog) { }

  ngOnInit() {
    
  }
  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddstockDialogComponent, {
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
