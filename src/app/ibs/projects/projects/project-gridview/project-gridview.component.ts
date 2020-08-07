import { Component, OnInit } from '@angular/core';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component';
import { MatDialog, PageEvent } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-gridview',
  templateUrl: './project-gridview.component.html',
  styleUrls: ['./project-gridview.component.scss']
})
export class ProjectGridviewComponent implements OnInit {

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
  startendDate = new FormControl();
  startdueDate = new FormControl();
  activityDate = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [{projectNumber: "P12007",streetAddress: "AJAX",clientName: "2314535 Ontario Limited (The King Street Condos)",struct:"38/97",arch:"33/45",plumbing:"67/98",ele:"47/98",fire:"99/123",
  projectType: "Engineering",projectManager: "Monika Amasa",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$10000.00",bt_status: true},
  {struct:"23/97",arch:"32/48",plumbing:"37/93",ele:"67/98",fire:"54/103",projectNumber: "P12002",streetAddress: "Alabama",clientName: "1799882 Ontario Inc.",
  projectType: "Construction",projectManager: "Akhil Reddy",strDueDate: "2019-12-20",strFollowUpDate: "2019-07-18",strProjectAwaredDate: "2020-05-17",
  awardedAmount: "$24590.00",bt_status: true},
  {struct:"28/97",arch:"12/48",plumbing:"57/83",ele:"27/198",fire:"24/113",projectNumber: "P12300",streetAddress: "AJAX",clientName: "The King Street Condos",
  projectType: "Engineering",projectManager: "Sai",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$1000.00",bt_status: true},
  {struct:"38/97",arch:"43/48",plumbing:"93/93",ele:"78/98",fire:"64/103",projectNumber: "P2390",streetAddress: "Canada #240",clientName: "2314535 Ontario Limited",
  projectType: "Machine Work",projectManager: "Raj",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$32980.00",bt_status: true},
  {struct:"11/12",arch:"32/48",plumbing:"37/93",ele:"67/98",fire:"54/103",projectNumber: "P12374",streetAddress: "AJAX",clientName: "The King Street Condos",
  projectType: "Engineering",projectManager: "Siva",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$23410.00",bt_status: true},
  {struct:"09/12",arch:"33/48",plumbing:"97/100",ele:"56/76",fire:"74/103",projectNumber: "P12009",streetAddress: "AJAX",clientName: "2314535 Ontario Limited (The King Street Condos)",
  projectType: "Engineering",projectManager: "RK",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$78610.00",bt_status: true},
  {struct:"01/09",arch:"32/48",plumbing:"37/93",ele:"67/98",fire:"54/103",projectNumber: "P12092",streetAddress: "AJAX",clientName: "The Street Condos",
  projectType: "Engineering",projectManager: "Praveen",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$7650.00",bt_status: true},
  {struct:"10/97",arch:"48/48",plumbing:"91/93",ele:"78/98",fire:"98/99",projectNumber: "P12007",streetAddress: "AJAX",clientName: "The King Street",
  projectType: "Engineering",projectManager: "Monika Amasa",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "0.00",bt_status: true},
  {struct:"38/97",arch:"32/48",plumbing:"37/93",ele:"67/98",fire:"54/103",projectNumber: "9-12007",streetAddress: "AJAX",clientName: " Ontario Limited ",
  projectType: "Engineering",projectManager: "Naveen",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$23120.00",bt_status: true},
  {struct:"18/87",arch:"32/48",plumbing:"37/93",ele:"67/98",fire:"54/103",projectNumber: "10-12007",streetAddress: "AJAX",clientName: "2314535 Ontario Limited (The King Street Condos)",
  projectType: "Engineering",projectManager: "Nikhil",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",
  awardedAmount: "$98710.00",bt_status: true}];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openProjectDialog(stat){
    let dialogRef = this.dialog.open(AddProjectDialogComponent, {
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
  fliterSearch() {}
  clearFilters() {
    this.contactName.setValue([]);
    this.clientName.setValue([]);
    this.jobTitle.setValue([]);
    this.startendDate.setValue([]);
    this.startdueDate.setValue([]);
    this.activityDate.setValue([]);
    this.contactNumber.setValue([]);
    this.statu.setValue([]);
    this.status_filter = '';
  }
}
