import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  site = [{branch_id:"1",branch_name:"P12007"},{branch_id:"1",branch_name:"P12002"},{branch_id:"1",branch_name:"P12300"}]
  construction = [{branch_id:"1",branch_name:"Structure"},{branch_id:"1",branch_name:"Architecture"},{branch_id:"1",branch_name:"Plumbing"}]
  public showEmpty: boolean = false;
  filterToggle = false;
  audit = [{auditid:"OM001",project:"P12002",constructionsubcategory:"Structure",checklist:"Fire Safety Checklist",auditor:"Navin",startdate:"01-08-2020",enddate:"08-08-2020",submissiondate:"12-08-2020",Status:"In Progress"},
  {auditid:"OM002",project:"P12007",constructionsubcategory:"Architecture",checklist:"Routine Inspection Checklist",auditor:"Siva",startdate:"02-08-2020",enddate:"09-08-2020",submissiondate:"13-08-2020",Status:"Delayed"},
  {auditid:"OM003",project:"P12301",constructionsubcategory:"Plumbing",checklist:"Site Safety Inspection Checklist",auditor:"Vijay",startdate:"03-08-2020",enddate:"10-08-2020",submissiondate:"14-08-2020",Status:"Completed"},
  {auditid:"OM004",project:"P12012",constructionsubcategory:"Electrical",checklist:"Fire Safety Checklist",auditor:"Raj",startdate:"04-08-2020",enddate:"18-08-2020",submissiondate:"22-08-2020",Status:"In Progress"},
  {auditid:"OM005",project:"P12082",constructionsubcategory:"Structure",checklist:"Routine Inspection Checklist",auditor:"Navin",startdate:"05-08-2020",enddate:"28-08-2020",submissiondate:"31-08-2020",Status:"Completed"}]

  constructor() { }

  ngOnInit() {

  }

}
