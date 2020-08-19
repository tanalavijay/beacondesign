import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddworkorderDialogComponent } from './addworkorder-dialog/addworkorder-dialog.component';
import { AddtaskDialogComponent } from './addtask-dialog/addtask-dialog.component';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit {

  public showEmpty: boolean = false;
  filterToggle = false;
  purchaseorders= [{workordernumber:"OM001",workordername:"Routine Maintenance",duedate:"05-06-2020",assignedto:"Siva",assignedby:"Navin",location:"Hyderabad",items:"2",Status: "In Progress"}, {workordernumber:"OM002",workordername:"Preventative Maintenance",duedate:"06-06-2020",assignedto:"Vinay",assignedby:"RK",location:"Mumbai",items:"4",Status: "Completed"}, {workordernumber:"OM003",workordername:"Predictive Maintenance",duedate:"07-06-2020",assignedto:"Vijay",assignedby:"RK",location:"Chennai",items:"1",Status: "In Progress"}, {workordernumber:"OM004",workordername:"Annual Maintenance",duedate:"08-06-2020",assignedto:"Aadi",assignedby:"Neeraja",location:"Coimbatore",items:"3",Status: "Delayed"}, {workordernumber:"OM005",workordername:"Repairs",duedate:"09-06-2020",assignedto:"Siva",assignedby:"Navin",location:"Bangalore",items:"6",Status: "Completed"}, {workordernumber:"OM006",workordername:"Routine Maintenance 2",duedate:"10-06-2020",assignedto:"John",assignedby:"Allison",location:"Vizag",items:"2",Status: "In Progress"}]
  constructor(public dialog : MatDialog) { }

  ngOnInit() {

  }
public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddworkorderDialogComponent, {
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

  public addTask(Campaign) {
    const dialogRef = this.dialog.open(AddtaskDialogComponent, {
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
