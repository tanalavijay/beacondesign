import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AdditemtypeDialogComponent } from 'src/app/shared/additemtype-dialog/additemtype-dialog.component';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-itemmake',
  templateUrl: './itemmake.component.html',
  styleUrls: ['./itemmake.component.scss']
})
export class ItemmakeComponent implements OnInit {

  public showEmpty: boolean = false;
  filterToggle = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  consignments= [{type:"Case",items:"2",Status:true},
  {type:"JCB",items:"3",Status:false},
]

constructor(public dialog : MatDialog,private location:Location) { }

  ngOnInit() {

  }
goBack() {
    this.location.back();
  }
  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AdditemtypeDialogComponent, {
      data: Campaign,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(campaign => {
      if (campaign === 'save') {
        
      } else {
      }
    });
  }
  openDeleteDialog(value) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: value,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (value != null && value !== undefined) {
      
      }
    });
   }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }

}
