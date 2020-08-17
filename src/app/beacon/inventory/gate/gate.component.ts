import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit {
  
  public showEmpty: boolean = false;
  filterToggle = false;
  consignments= [{vendorname:"Amit Enterprises",branch:"HYD",No:"OM-001",items:"2",POdate:"24-08-2020",POdeliverydate:"Pending",POvalue:"56000.00",PObalancevalue:"23000.00"},
  {vendorname:"ABC Mangers",branch:"Guntur",No:"OM-108",POdate:"24-08-2020",items:"1",POdeliverydate:"Pending",POvalue:"56000.00",PObalancevalue:"23000.00"},
  {vendorname:"Elight Materials",branch:"Hyderabad",No:"OM-125",POdate:"24-08-2020",items:"3",POdeliverydate:"In Progress",POvalue:"56000.00",PObalancevalue:"23000.00"},
  {vendorname:"Integrated Construction Materials",branch:"Pune",No:"OM-1035",items:"2",POdate:"24-08-2020",POdeliverydate:"Pending",POvalue:"56000.00",PObalancevalue:"23000.00"},
  {vendorname:"Amit Enterprises",branch:"HYD",No:"OM-5623",POdate:"24-08-2020",items:"5",POdeliverydate:"In Progress",POvalue:"56000.00",PObalancevalue:"23000.00"},
  {vendorname:"Amit Enterprises",branch:"HYD",No:"OM-5612",POdate:"24-08-2020",items:"1",POdeliverydate:"Pending",POvalue:"56000.00",PObalancevalue:"23000.00"}]
  constructor(public dialog : MatDialog) { }

  ngOnInit() {

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
