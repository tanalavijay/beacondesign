import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
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
