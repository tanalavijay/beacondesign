import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddmaterialDialogComponent } from './addmaterial-dialog/addmaterial-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  public showEmpty: boolean = false;
  filterToggle = false;
  consignments= [{jobcardnumber:"OM001",jobcarddate:"05-06-2020",maintenencetype:"accident",itemtype:"forklift",itemmake:"Tata",itemmodel:"xc60",items:"2",status:"pending"},
  {jobcardnumber:"OM002",jobcarddate:"06-06-2020",maintenencetype:"miscellaneous",itemtype:"backhoeloader",itemmake:"jcb",itemmodel:"xj74",items:"3",status:"In Progress"},
  {jobcardnumber:"OM003",jobcarddate:"07-06-2020",maintenencetype:"preventative",itemtype:"forklift",itemmake:"Tata",itemmodel:"xc61",items:"4",status:"Completed"},
  {jobcardnumber:"OM004",jobcarddate:"08-06-2020",maintenencetype:"overhauling",itemtype:"crane",itemmake:"caterpillar",itemmodel:"rf543",items:"6",status:"In Progress"},
  {jobcardnumber:"OM005",jobcarddate:"09-06-2020",maintenencetype:"running",itemtype:"forklift",itemmake:"Tata",itemmodel:"xc62",items:"2",status:"Completed"}]

 constructor(public dialog : MatDialog) { }

  ngOnInit() {
    
  }
  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddmaterialDialogComponent, {
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
