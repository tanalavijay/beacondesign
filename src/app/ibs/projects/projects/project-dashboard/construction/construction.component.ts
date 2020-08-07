import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {

  constructor() { }

  isInception: boolean = true;
  isControl: boolean = false;
  isTests: boolean = false;
  isElectrical:boolean = false;
  isFire:boolean = false;

  ngOnInit() {

  }

  fnInception() {
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
    this.isElectrical = false;
    this.isFire = false
  }

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
    this.isElectrical = false;
    this.isFire = false
  }

  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
    this.isElectrical = false;
    this.isFire = false
  }

  fnElectrical(){
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isElectrical = true;
    this.isFire = false
  }

  fnFire(){
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isElectrical = false;
    this.isFire = true;
  }
}
