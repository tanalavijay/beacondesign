import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RolesDialogComponent } from './roles-dialog/roles-dialog.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;


roles:object[] =[
  {role_id:1,role_name:'Field Officer ',permissions:'15/15',users:'Dwayne, Dave',status:true},
  {role_id:2,role_name:'Project Manager',permissions:'0/15',users:'Emily', status:true},
  {role_id:3,role_name:'Engineer',permissions:'10/15',users:'Joe', status:true},
  // {role_id:4,role_name:'Administration',permissions:'15/15',users:'Kate', status:true},
  // {role_id:5,role_name:'Field Staff',permissions:'0/15',users:'Scott, Ryan, Chris, Justin and Ken', status:true},
  // {role_id:5,role_name:'CAD Staff',permissions:'8/15',users:'Dan, Tony', status:true},
  // {role_id:6,role_name:'Finance',permissions:'0/15',users:'Stephanie, Laurie', status:true},
]

public openUserDialog(id) {
  let dialogRef = this.dialog.open(RolesDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

  

  ngOnInit() {
  }

}
