import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AdditemtypeDialogComponent } from 'src/app/shared/additemtype-dialog/additemtype-dialog.component';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.scss']
})
export class ItemMasterComponent implements OnInit {

  public showEmpty: boolean = false;
  filterToggle = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  consignments= [{type:"Forklift",items:"2",Status:true},
  {type:"Tower crane",items:"3",Status:false},
]
  constructor(public dialog : MatDialog) { }

  ngOnInit() {
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
