import { Component, OnInit, Inject } from '@angular/core';
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PageEvent, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-gridview',
  templateUrl: './client-gridview.component.html',
  styleUrls: ['./client-gridview.component.scss']
})
export class ClientGridviewComponent implements OnInit {

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
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [
    {clientname:'Abhishek', clienttype:'Developer', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'2020-07-07', status:'true', },
    {clientname:'Amit', clienttype:'Property Owner', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'2020-07-07', status:'true', },
    {clientname:'Rajesh', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'2020-07-07', status:'false', },
    {clientname:'Sameer', clienttype:'Property Owner', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'2020-07-07', status:'true', },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openProjectDialog(stat){
    let dialogRef = this.dialog.open(AddClientDialogComponent, {
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
