import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {

  isInception: boolean = true;
  isControl: boolean = false;
  isTests: boolean = false;
  isContractor : boolean = false;

  constructor() { }

  ngOnInit() {

  }
 fnInception() {
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
    this.isContractor = false;
  }

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
    this.isContractor = false;
  }

  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
    this.isContractor = false;
  }
  fnContractor() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isContractor = true;
  }
}
