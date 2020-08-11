import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  filterToggle: boolean = false;
  checked: boolean;
  isWeekMenuEnable:boolean=true;
  isMenuOn : boolean = true;
  isInception: boolean = true;
  isControl: boolean = false;
  isTests: boolean = false;
  isContractor : boolean = false;
  isFighting : boolean = false;
  
  constructor() { }

  summaryTable=[
    { user:'Shahnawaaz', sunday:'00:00', monday:'05:15', tuesday:'19:30', wednesday:'05:00', thursday:'02:20', friday:'10:04', saturday:'00:14', total:'24:00' },
    { user:'Navin', sunday:'11:00', monday:'09:00', tuesday:'00:00', wednesday:'14:15', thursday:'13:20', friday:'12:04', saturday:'00:14', total:'19:00' },
    { user:'Shiva', sunday:'16:30', monday:'01:15', tuesday:'18:00', wednesday:'06:00', thursday:'08:20', friday:'10:04', saturday:'03:14', total:'32:00' },
    { user:'Sachin', sunday:'00:00', monday:'09:45', tuesday:'00:00', wednesday:'05:00', thursday:'00:20', friday:'07:04', saturday:'00:14', total:'42:00' },
  ]

  gridtable=[
    { created:'2020-08-05, 9:55 PM', refno:'RF-017245', projman:'Shiva', site:'36/3 B-block', sow:'Default', streetadd:'B123 Ajax', actions:'Prepare Quotation', jobcode:'CPC1', planned:'0.53', due:'2020-08-06'},
    { created:'2020-08-03, 9:55 PM', refno:'RF-017245', projman:'Navin', site:'36/3 B-block', sow:'Default', streetadd:'	159 Cavan Street, Port Hope', actions:'Admin Assistance', jobcode:'QA', planned:'0.53', due:'2020-08-06'},
    { created:'2020-28-02, 9:55 PM', refno:'RF-857392', projman:'Raj', site:'36/3 B-block', sow:'Default', streetadd:'B/123  ON L8K 2W3', actions:'Prepare Quotation', jobcode:'QA', planned:'0.53', due:'2020-08-06'},
    { created:'2020-18-05, 9:55 PM', refno:'RF-567593', projman:'Sameer', site:'36/3 B-block', sow:'Default', streetadd:'Hemlock Grove 2W3', actions:'Admin Assistance', jobcode:'AA', planned:'0.53', due:'2020-08-06'},
    { created:'2020-12-05, 9:55 PM', refno:'RF-023678', projman:'Najim', site:'36/3 B-block', sow:'Default', streetadd:'B-12 Newark', actions:'Prepare Quotation', jobcode:'QA', planned:'0.53', due:'2020-08-06'},
    { created:'2020-08-05, 9:55 PM', refno:'RF-081628', projman:'Shiva', site:'36/3 B-block', sow:'Default', streetadd:'SJ Newark', actions:'Prepare Quotation', jobcode:'AA', planned:'0.53', due:'2020-08-06'},
    { created:'2020-17-05, 9:55 PM', refno:'RF-017999', projman:'Akhil', site:'36/3 B-block', sow:'Default', streetadd:'786 Garside, ON L8K 2W3', actions:'Prepare Quotation', jobcode:'QA', planned:'0.53', due:'2020-08-06'},
    
  ]

  
  ngOnInit() {
  }
  fnInception() {
     this.isInception = true;
     this.isControl = false;
     this.isTests = false;
     this.isContractor = false;
     this.isFighting = false;
   }
 
   fnTest() {
     this.isInception = false;
     this.isControl = false;
     this.isTests = true;
     this.isContractor = false;
     this.isFighting = false;
   }
 
   fnControl() {
     this.isInception = false;
     this.isControl = true;
     this.isTests = false;
     this.isContractor = false;
     this.isFighting = false;
   }
   fnContractor() {
     this.isInception = false;
     this.isControl = false;
     this.isTests = false;
     this.isContractor = true;
     this.isFighting = false;
   }

   fnFighting() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isContractor = false;
    this.isFighting = true;
  }
  changeMenu() {
    this.isMenuOn = !this.isMenuOn;
  }
}
