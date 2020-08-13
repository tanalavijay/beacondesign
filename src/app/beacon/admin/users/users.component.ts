import { Component, OnInit } from '@angular/core';
import { UserdialogComponent } from './userdialog/userdialog.component';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;
constructor(
  public dialog: MatDialog,
  private alertService: AlertService) {

}



ngOnInit() {
  this.tableList =[
    {name:'Amit', email:'123amit@gmail.com', phone:'9845155555', assign:'6', assigrole:'Project Manager',status:true},
    {name:'Vinay', email:'vinay00@gmail.com', phone:'9852874785', assign:'3', assigrole:'Field Officer',status:true},
    {name:'Sachin', email:'sachin97@gmail.com', phone:'9412386785', assign:'4', assigrole:'Field Officer',status:true},
    {name:'Shiva', email:'shiva007@gmail.com', phone:'9789126785', assign:'1', assigrole:'Engineer',status:true},
  ]
}




public openUserDialog(id) {
  let dialogRef = this.dialog.open(UserdialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

// public openUnitsAssignedDialog(id) {
//   let dialogRef = this.dialog.open(UnitsassignedComponent, {
//       data: id,
//       height: 'auto',
//       width: '300px'
//   });
//   dialogRef.afterClosed().subscribe(data => {
//   });
// }


deleteUser(userid){
  
  this.tableList = this.tableList.filter(e=>e.intApplicantId != userid)
  this.alertService.createAlert('Successfully deleted.', 1);
  console.log(this.tableList)
}

saveStatus() {
  //this.alertService.createAlert('Successfully saved.', 1);
}

}