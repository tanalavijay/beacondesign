import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {
  public showEmpty: boolean = false;
  filterToggle = false;
  purchaseorders= [{ponumber:"OM-001",items:"10",branch:"Amit Enterprises|HYD",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"56000.00"},
{ponumber:"OM-002",branch:"ABC Stores|GNT",items:"4",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"56020.00"},
{ponumber:"OM-003",branch:"Alka Accessories|HYD",items:"6",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"23500.00"},
{ponumber:"OM-004",branch:"123 Markets|Mumbai",items:"1",issuedate:"14-08-2020",duedate:"24-08-2020",totalamount:"562100.00"},
{ponumber:"OM-005",branch:"Amit Enterprises|HYD",items:"3",issuedate:"12-09-2020",duedate:"24-09-2020",totalamount:"651000.00"}]
  constructor() { }

  ngOnInit() {
  }

}
