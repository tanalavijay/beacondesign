import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-roles-dialog',
  templateUrl: './roles-dialog.component.html',
  styleUrls: ['./roles-dialog.component.scss']
})
export class RolesDialogComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Administrator', 'Director', 'Permission 1', 'Permission 2', 'Permission 3', 'Permission 4'];
  
  constructor( public dialogRef: MatDialogRef<RolesDialogComponent> ) { }


  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
