
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectGridviewComponent } from './project-gridview/project-gridview.component';
import { ProjectKanbanviewComponent } from './project-kanbanview/project-kanbanview.component';
import { ProjectMapviewComponent } from './project-mapview/project-mapview.component';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DragDropModule } from 'primeng/primeng';
import { DndModule } from 'ngx-drag-drop';
import { DragulaService } from 'ng2-dragula';


export const routes = [ 
    { path: '', redirectTo: 'gridview', pathMatch: 'full' },
    { path: 'gridview', component: ProjectGridviewComponent, data: { breadcrumb: '' } },
    { path: 'kanbanview', component: ProjectKanbanviewComponent, data: { breadcrumb: '' } },
    { path: 'mapview', component: ProjectMapviewComponent, data: { breadcrumb: '' } }  
];

@NgModule({
    declarations: [ProjectGridviewComponent, ProjectKanbanviewComponent, ProjectMapviewComponent, AddProjectDialogComponent],
    imports: [
      CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,DndModule,DragDropModule
    ],
    providers: [AlertService,DragulaService],
    entryComponents: [DeleteConfirmDialogComponent,AddProjectDialogComponent]
  })
  export class ProjectModule { }