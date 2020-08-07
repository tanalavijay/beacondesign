import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
