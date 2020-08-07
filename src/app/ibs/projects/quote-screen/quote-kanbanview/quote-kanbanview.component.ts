import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-kanbanview',
  templateUrl: './quote-kanbanview.component.html',
  styleUrls: ['./quote-kanbanview.component.scss']
})
export class QuoteKanbanviewComponent implements OnInit {

  draggedItem: any;
  
  localData: any[] = [
    { id:"kanban_table_1",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Concept ', header: 'Prepare Quote', data : [{ id: 'kanban_item_1161', name: '5-35151', info: 'Updates: 5', colorCode: 'Green', percentage: '70%',campaign: '',projectcode:"Hydro One | Dave", actions: 'SOW: 4 / 12',budget: 'Budget: $ 542/700',tasks:'Sites: 2 / 5',duedate:'Due Date: 17-May-2019', hex: '#FFFFFF'}, 
    { id:'kanban_item_1163', collapsed:false,name: 'Reference Plan',  info: 'Updates: 2', colorCode: 'Green', campaign: 'Delpark Homes | Dave',projectcode:"4-24654 | 1486 Mearns ", actions: 'Actions: 8/10',budget: 'Budget: $ 560/800',tasks:'Tasks: 57/100',duedate:'Due Date: 26-May-2019',percentage: '94%', hex: '#FFFFFF'}]},
    { id:"kanban_table_2",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Tender', header: 'Quote Sent', data : [{ id: 'kanban_item_1162', name: 'Topographic',  info: 'Updates: 7', colorCode: 'Red',percentage: '85%', campaign: 'Hydro One | Dave',projectcode:"5-35135 | Mearns Ave", actions: 'Actions: 6/10',budget: 'Budget: $ 542/700',tasks:'Tasks: 59/100',duedate:'Due Date: 19-May-2019', hex: '#FFFFFF',}]},
    { id:"kanban_table_3", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Design', header: 'Rejected', data : [{ id: 'kanban_item_1166', name: 'TRPR', info: 'Updates: 6', colorCode: 'Green',percentage: '75%', campaign: 'Sandbank | Dwayne',projectcode:"6-26846 | Mearns avt", actions: 'Actions: 9/10',budget: 'Budget: $ 652/750',tasks:'Tasks: 78/100',duedate:'Due Date: 20-May-2019', hex: '#FFFFFF',}]},
    { id:"kanban_table_4", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Drawings', header: 'In Progress', data : [{ id: 'kanban_item_1164', name: 'Survey',  info: 'Updates: 2', colorCode: 'Green',percentage: '88%', campaign: 'Valleymede | Dave',projectcode:"7-12584 | 256 Street ", actions: 'Actions: 7/10',budget: 'Budget: $ 425/650',tasks:'Tasks: 85/100',duedate:'Due Date: 18-May-2019', hex: '#FFFFFF',}]},
    { id:"kanban_table_5",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Structure', header: 'Awarded', data : [{ id: 'kanban_item_1166', name: 'SRPR', info: 'Updates: 3', colorCode: 'Green',percentage: '80%', campaign: 'AECOM | Dwayne',projectcode:"2-15874 | 61 Mearns Ct", actions: 'Actions: 9/10',budget: 'Budget: $ 752/900',tasks:'Tasks: 66/100',duedate:'Due Date: 27-May-2019', hex: '#FFFFFF',}]},
    { id:"kanban_table_6", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Architecture', header: 'Document Taker Only', data : []},
    { id:"kanban_table_7",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Electrical', header: 'On Hold', data : []},
    { id:"kanban_table_8",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Plumbing', header: 'Pre-Pay', data : []},
    { id:"kanban_table_9",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Fire Safety', header: 'Sent to PM', data : []},
    { id:"kanban_table_10",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Closed', header: 'Revised & Sent', data : []},
    { id:"kanban_table_11",collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Cancelled', header: 'Follow Up', data : []},
    { id:"kanban_table_12", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'On Hold', header: 'Budget review', data : []},
    { id:"kanban_table_12", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'On Hold', header: 'PM TBD', data : []}
];
  constructor() { }

  ngOnInit() {

  }

dragStart(event, item, sourceKanbanId) {
  this.draggedItem = item;
  this.draggedItem.kanbanId = sourceKanbanId;
}

drag(item) {
  document.getElementById(item.id).style.display = "none";
}

drop(event) {
  if (this.draggedItem && this.draggedItem.kanbanId && event.event.path[3]['id']) {
      this.moveItem(this.draggedItem, event.event.path[3]['id']);
      this.draggedItem = null;
  }
}

dragEnd(event, item) {
  document.getElementById(item.id).style.display = "table-row";
  this.draggedItem = null;
}

  moveItem(draggedItem, kanbanId) {
  for (let i = 0; i < this.localData.length; i++) {
    if (kanbanId === this.localData[i].id) {
      if (i % 2 === 0) {
        draggedItem.hex = "#FFFFFF";
      } else {
        draggedItem.hex = "#E0E0E0";
      }
      this.localData[i].data.push(draggedItem);
      this.localData[i].header = "";
      this.localData[i].header =
        this.localData[i].stage + " (" + this.localData[i].data.length + ")";
    }
    if (draggedItem.kanbanId === this.localData[i].id) {
      var temp = this.localData[i].data;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j].id === draggedItem.id) {
          this.localData[i].data.splice(j, 1);
          this.localData[i].header = "";
          this.localData[i].header =
            this.localData[i].stage + " (" + this.localData[i].data.length + ")";
        }
      }
    }
  }
   }

changestatus(index){
  this.localData[index].collapsed=!this.localData[index].collapsed;
}
  scrollKanban(side) {
    var ele = document.getElementById('kanban-table-container');
    if (side == 'left')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
}
