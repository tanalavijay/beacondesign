import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  sitevisits = [
    {projects:'Architectural', status:'Active' },
    {projects:'Construction', status:'Inactive' },
    {projects:'Renovation', status:'Active' },
    {projects:'Installation',  status:'Active'},

  ]
  constructor() { }

  ngOnInit() {
  }

}
