import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) { 

    this.treeData = {
      "data": [
        {
        "label": "71 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": true,
        "children": [{
          "label": "Reference Plan",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase red",
          "collapsedIcon": "fa fa-briefcase red",
          "selectable": true,
          "expanded": true
          // "children":[{
          //   "label": "Drafting",
          // "data": "Documents Folder",
          // "expandedIcon": "fas fa-folder-open dark-blue",
          // "collapsedIcon": "fas fa-folder dark-blue",
          // "selectable": true,
          // }]
        }
        ]
      },
      {
        "label": "20 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Topographic",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase red",
          "collapsedIcon": "fa fa-briefcase red",
          "selectable": true
        },
        {
          "label": "SRPR",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase red",
          "collapsedIcon": "fa fa-briefcase red",
          "selectable": true
        }
        ]
      },
      {
        "label": "60 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Topographic",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase red",
          "collapsedIcon": "fa fa-briefcase red",
          "selectable": true
        },
        {
          "label": "SRPR",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase red",
          "collapsedIcon": "fa fa-briefcase red",
          "selectable": true
        }
        ]
      },
      {
        "label": "55 Mearns",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Topographic",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase red",
          "collapsedIcon": "fa fa-briefcase red",
          "selectable": true
        },
        {
          "label": "SRPR",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase red",
          "collapsedIcon": "fa fa-briefcase red",
          "selectable": true
        }
        ]
      },
      ]
    }
  }
  treeData: any;

  public getTreeJSON() {
    return this.treeData;
  }
}
