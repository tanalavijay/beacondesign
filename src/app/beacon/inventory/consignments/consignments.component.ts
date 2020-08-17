import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-consignments',
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.scss']
})
export class ConsignmentsComponent implements OnInit {
  public showEmpty: boolean = false;
  filterToggle = false;
  consignments= [{vendorname:"Amit Enterprises",branch:"HYD",No:"OM-001",items:"2",POdate:"24-08-2020",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00"},
{vendorname:"ABC Mangers",branch:"Guntur",No:"OM-108",POdate:"24-08-2020",items:"1",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00"},
{vendorname:"Elight Materials",branch:"Hyderabad",No:"OM-125",POdate:"24-08-2020",items:"3",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00"},
{vendorname:"Integrated Construction Materials",branch:"Pune",No:"OM-1035",items:"2",POdate:"24-08-2020",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00"},
{vendorname:"Amit Enterprises",branch:"HYD",No:"OM-5623",POdate:"24-08-2020",items:"5",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00"},
{vendorname:"Amit Enterprises",branch:"HYD",No:"OM-5612",POdate:"24-08-2020",items:"1",POdeliverydate:"24-08-2020",POvalue:"56000.00",PObalancevalue:"23000.00"}]
  constructor(public dialog : MatDialog) { }

  ngOnInit() {

  }

  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
}
