import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotaion-review',
  templateUrl: './quotaion-review.component.html',
  styleUrls: ['./quotaion-review.component.scss']
})
export class QuotaionReviewComponent implements OnInit {

  public showEmpty: boolean = false;
  filterToggle = false;
  purchaseorders= [{ponumber:"OM-001",items:"10",branch:"Need to get Materials",issuedate:"14-08-2020",duedate:"View",totalamount:"Pending",require:"Siva",review:"2/2 (Pending)"},
     {ponumber:"OM-002",branch:"Received Materials",items:"4",issuedate:"14-08-2020",duedate:"View",totalamount:"In Process",require:"Shayam",review:"2/2 (Reverted)"},
     {ponumber:"OM-003",branch:"Started working",items:"6",issuedate:"14-08-2020",duedate:"View",totalamount:"Completed",require:"Surya",review:"2/2 (Pending)"},
     {ponumber:"OM-004",branch:"Work in progress",items:"1",issuedate:"14-08-2020",duedate:"View",totalamount:"Not Approved",require:"Vijay",review:"2/2 (Reverted)"},
     {ponumber:"OM-005",branch:"Need to get Materials",items:"3",issuedate:"12-09-2020",duedate:"View",totalamount:"IN Process",require:"Prasanth",review:"2/2 (Pending)"}]


  constructor() { }

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
