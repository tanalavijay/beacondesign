import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-screen',
  templateUrl: './settings-screen.component.html',
  styleUrls: ['./settings-screen.component.scss']
})
export class SettingsScreenComponent implements OnInit {

  public popoverStatusTitle = 'Confirm Save Change';
  public popoverStatusMessage = 'Are you sure you want to save changes ?';
  public cancelClicked = false;
  enabledCheckbox = true;

  constructor() { }

  ngOnInit() {
  }

}
