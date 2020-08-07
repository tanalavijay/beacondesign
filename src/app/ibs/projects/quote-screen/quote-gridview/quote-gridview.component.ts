import { Component, OnInit } from '@angular/core';
import { AddQuoteDialogComponent } from '../add-quote-dialog/add-quote-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PageEvent, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quote-gridview',
  templateUrl: './quote-gridview.component.html',
  styleUrls: ['./quote-gridview.component.scss']
})
export class QuoteGridviewComponent implements OnInit {

  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{'status_id':'1','status_name':'Active'},
           {'status_id':'2','status_name':'Inactive'}]

  public status_filter = ""; 
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();l
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [
    {quote:'R-02341', potential:'red', streetadd:'58 Hawley Crescent, Mumbai ', days:'5', ptype:'5', client:'DLF Inc. ', pmanage:'Shiva', recieved:'2020-07-31', activity:'2020-07-31', quoted:'19,000', awarded:'0 ', invoiced:'0'},
    {quote:'R-02491', potential:'green', streetadd:'59 Valecrest Drive, Etobicoke ', days:'5', ptype:'4 (Inc. Basement)', client:'	164 Maha Developments Inc. ', pmanage:'Raj', recieved:'2020-07-11', activity:'2020-07-31', quoted:'10,000', awarded:'45,000 ', invoiced:'0'},
    {quote:'R-16796', potential:'red', streetadd:'210 Baseline Rd, Bowmanville ', days:'5', ptype:'2', client:'	Kapoor Builders Inc. ', pmanage:'Neerja', recieved:'2020-07-14', activity:'2020-07-19', quoted:'10,000', awarded:'25000', invoiced:'29,000'},
    {quote:'R-09457', potential:'yellow', streetadd:'Wilson Road, Prince Edward County ', days:'5', ptype:'8', client:'	Hitech  ', pmanage:'Navin', recieved:'2020-09-22', activity:'2020-07-29', quoted:'30,000', awarded:'20,000 ', invoiced:'0'},
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openProjectDialog(stat){
    let dialogRef = this.dialog.open(AddQuoteDialogComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
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
