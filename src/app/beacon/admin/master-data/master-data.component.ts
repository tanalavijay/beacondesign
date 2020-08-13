import { Component, OnInit } from '@angular/core';
import { MasterDialogComponent } from './master-dialog/master-dialog.component';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.scss']
})
export class MasterDataComponent implements OnInit {

  job: boolean = true;
  expense: boolean = false;
  asset: boolean = false;
  client: boolean = false;
  project: boolean = false;
  lead: boolean = false;
  level: boolean = false;
  delay: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

   jobcodes = [{code:"1DR",title:"1st Draft Reviewer",cat:"Production Team",rate:"$85.00",Status:true},
   {code:"AA",title:"Admin Assistant",cat:"Business Services Team",rate:"$60.00",Status:true},
   {code:"AM",title:"Account Manager",cat:"Business Development Team",rate:"$145.00",Status:false},
   {code:"BDM",title:"Business Development Manager",cat:"Business Development Team",rate:"$200.00",Status:true},
   {code:"CEO",title:"Chief Executive Officer",cat:"Senior Management",rate:"$250.00",Status:true},
   {code:"CNC",title:"Construction Coordinator",cat:"Production Team",rate:"$85.00",Status:false}]
   expensecodes = [{code:"Breakfast",unit:"Rupee/day",type:"Daily",amount:"15.00",rate:"85.00",budget:"No",reimbursable:"Yes",attachment:"No",Status:true},{code:"Dinner",unit:"Rupee/day",type:"Daily",amount:"15.00",rate:"50.00",budget:"Yes",reimbursable:"Yes",attachment:"No",Status:true},{code:"Lunch",unit:"Rupee/day",type:"Daily",amount:"15.00",rate:"85.00",budget:"No",reimbursable:"No",attachment:"No",Status:true},{code:"Workboots",unit:"Rupee/day",type:"Yearly",amount:"15.00",rate:"185.00",budget:"No",reimbursable:"Yes",attachment:"Yes",Status:true},
   {code:"Toll Highway",unit:"Rupee/KM",type:"None",rate:"85.00",amount:"155.00",budget:"Yes",reimbursable:"Yes",attachment:"No",Status:true},]
   assetcategories = [{assetcat:"Bar Finders",prefix:"BF",conditions:"Damaged, Excellent, Minor Issues",Status:true},
{assetcat:"Computers",prefix:"PC",conditions:"Damaged, Excellent, Minor Issues",Status:true},
{assetcat:"Data Collectors",prefix:"DC",conditions:"Damaged, Excellent, Minor Issues",Status:true},
{assetcat:"General Equipment",prefix:"GE",conditions:"Damaged, Excellent, Minor Issues",Status:true},
{assetcat:"TV's",prefix:"TV",conditions:"Damaged, Excellent, Minor Issues",Status:true}]
clienttype = [{clienttype:"Architect",Status:true},
{clienttype:"Developer",Status:true},
{clienttype:"Engineer",Status:true},
{clienttype:"Financial Institution",Status:true},
{clienttype:"Real Estate",Status:true}]

projecttype = [{projecttype:"Construction",Status:true},
{projecttype:"Engineering",Status:true},
{projecttype:"Internal",Status:true},
{projecttype:"Legal",Status:true},
{projecttype:"Real Estate",Status:true}]

leadsource = [{leadsource:"Google",Status:true},
{leadsource:"LinkedIn",Status:true},
{leadsource:"Referral",Status:true},
{leadsource:"Returning Client",Status:true},
{leadsource:"Others",Status:true}]

levels = [{leadsource:"Completed Follow Up with Client",colorCode:"#2591a7",Status:true},
{leadsource:"Covid",colorCode:"#25a791",Status:true},
{leadsource:"Normal",colorCode:"#038317",Status:false},
{leadsource:"PYB",colorCode:"#fff500",Status:false},
{leadsource:"Rush",colorCode:"#dc3411",Status:true}]

delayreason = [{delayreason:"Equipment",Status:true},
{delayreason:"Site Conditions",Status:true},
{delayreason:"Transportation",Status:false},
{delayreason:"Weather",Status:true},
{delayreason:"Others",Status:true}]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  fnJob() {
    this.job = true;
    this.expense = false;
    this.asset = false;
    this.client = false;
    this.project = false;
    this.lead = false;
    this.level = false;
    this.delay = false;
    }
  
    fnExpense() {
      this.job = false;
      this.expense = true;
      this.asset = false;
      this.client = false;
      this.project = false;
      this.lead = false;
      this.level = false;
      this.delay = false;
    }
  
    fnAsset() {
      this.job = false;
      this.expense = false;
      this.asset = true;
      this.client = false;
      this.project = false;
      this.lead = false;
      this.level = false;
      this.delay = false;
    }
    fnClient() {
      this.job = false;
      this.expense = false;
      this.asset = false;
      this.client = true;
      this.project = false;
      this.lead = false;
      this.level = false;
      this.delay = false;
    }
    fnProject() {
      this.job = false;
      this.expense = false;
      this.asset = false;
      this.client = false;
      this.project = true;
      this.lead = false;
      this.level = false;
      this.delay = false;
    }
    fnLead() {
      this.job = false;
      this.expense = false;
      this.asset = false;
      this.client = false;
      this.project = false;
      this.lead = true;
      this.level = false;
      this.delay = false;
    }
    fnLevel() {
      this.job = false;
      this.expense = false;
      this.asset = false;
      this.client = false;
      this.project = false;
      this.lead = false;
      this.level = true;
      this.delay = false;
    }
  
    fnDelay() {
      this.job = false;
      this.expense = false;
      this.asset = false;
      this.client = false;
      this.project = false;
      this.lead = false;
      this.level = false;
      this.delay = true;
    }

    openJobCodeDialog(item){
      let dialogRef = this.dialog.open(MasterDialogComponent, {
        data: item,
        height: 'auto',
        width: '650px',
        autoFocus: false,
      });
      
      dialogRef.afterClosed().subscribe(prospects => {
        if(prospects == 'save') {
    
        }
      });
    }
    openDeleteDialog(assets) {
      let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
        data: assets,
        height: 'auto',
        width: 'auto',
        autoFocus: false
      });
      
      dialogRef.afterClosed().subscribe(data => {
        if (data != null && data !== undefined) {
        }
      });
    }
}
