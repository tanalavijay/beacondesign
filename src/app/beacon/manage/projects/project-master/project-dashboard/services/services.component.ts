import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  filesToUpload = [];
  constructor() { }
  toolBar = {
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"],
    ]
    
  }

  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }

  DetailsText = ''
  ngOnInit() {
  }
}
