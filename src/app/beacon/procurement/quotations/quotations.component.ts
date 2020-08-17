import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {

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

  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
}
