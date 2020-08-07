import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MasterDataComponent } from './master-data.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ClientTypeComponent } from './client-type/client-type.component';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { RfqQuestionsComponent } from './rfq-questions/rfq-questions.component';
import { SurveyPurposeComponent } from './survey-purpose/survey-purpose.component';
import { ProjectsComponent } from './kanban/projects/projects.component';
import { QuotesComponent } from './kanban/quotes/quotes.component';
import { AddclientDialogComponent } from './client-type/addclient-dialog/addclient-dialog.component';
import { AddprojectDialogComponent } from './project-type/addproject-dialog/addproject-dialog.component';
import { AddquesDialogComponent } from './rfq-questions/addques-dialog/addques-dialog.component';
import { AddsurveyDialogComponent } from './survey-purpose/addsurvey-dialog/addsurvey-dialog.component';
import { DragulaModule } from 'ng2-dragula';


export const routes = [
  { path: '', component: MasterDataComponent, pathMatch: 'full' },

  { path: 'kanban',  children : [
    { path: 'projects', component: ProjectsComponent, data: { breadcrumb: "kanban" } },
    { path: 'quotes', component: QuotesComponent, data: { breadcrumb: "kanban" } },]
  },
   
   { path: 'client-type', component: ClientTypeComponent, data: { breadcrumb: "Lookup Options" } },
   { path: 'project-type', component: ProjectTypeComponent, data: { breadcrumb: "Lookup Options" } },
   { path: 'rfq', component: RfqQuestionsComponent, data: { breadcrumb: "Lookup Options" } },
   { path: 'survey-purpose', component: SurveyPurposeComponent, data: { breadcrumb: "Lookup Options" } },
];

@NgModule({
  declarations: [MasterDataComponent, KanbanComponent, ClientTypeComponent, ProjectTypeComponent, RfqQuestionsComponent, SurveyPurposeComponent, ProjectsComponent, QuotesComponent, AddclientDialogComponent, AddprojectDialogComponent, AddquesDialogComponent, AddsurveyDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule, DragulaModule.forRoot()
  ],
  providers: [AlertService],
  entryComponents:[AddclientDialogComponent, AddprojectDialogComponent, AddquesDialogComponent, AddsurveyDialogComponent]
})
export class MasterdataModule { }
