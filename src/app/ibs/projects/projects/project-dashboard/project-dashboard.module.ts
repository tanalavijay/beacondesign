import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ProjectDashboardActivityComponent } from './activity/project-dashboard-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ServicesComponent } from './services/services.component';
import { SitevisitsComponent } from './sitevisits/sitevisits.component';
import { SitevisitDialogComponent } from './sitevisits/sitevisit-dialog/sitevisit-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { BriefComponent } from './brief/brief.component';
import { BriefDialogComponent } from './brief/brief-dialog/brief-dialog.component';
import { CommentsComponent } from './comments/comments.component';
import { ConstructionComponent } from './construction/construction.component';
import { ClosureComponent } from './closure/closure.component';
import { QualityDialogComponent } from './closure/quality-dialog/quality-dialog.component';
import { TestrecordDialogComponent } from './closure/testrecord-dialog/testrecord-dialog.component';
import { ScopeComponent } from './scope/scope.component';
import { ConceptComponent } from './concept/concept.component';
import { ConceptDialogComponent } from './concept/concept-dialog/concept-dialog.component';
import { BudgetComponent } from './budget/budget.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { TenderComponent } from './tender/tender.component';
import { DesignComponent } from './design/design.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { AddsiteDialogComponent } from './budget/addsite-dialog/addsite-dialog.component';
import { SitevistAdddocComponent } from './sitevisits/sitevist-adddoc/sitevist-adddoc.component';



export const routes = [ 
  { path: '', redirectTo:"activity", pathMatch:'full' },
  { path: 'activity', component: ProjectDashboardActivityComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'overview', component: OverviewComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'services', component: ServicesComponent, data: { breadcrumb: 'Project Dashboard' } },  
  { path: 'sitevisits', component: SitevisitsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'brief', component: BriefComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'construction', component: ConstructionComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'closure', component: ClosureComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'scope', component: ScopeComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'concept', component: ConceptComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'budget', component: BudgetComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'manage', component: ProjectManageComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'tender', component: TenderComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'design', component: DesignComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'drawing', component: DrawingsComponent, data: { breadcrumb: 'Project Dashboard' } },
];

@NgModule({
  declarations: [ProjectDashboardActivityComponent, OverviewComponent, DesignComponent,DrawingsComponent,ServicesComponent, SitevisitsComponent, SitevisitDialogComponent, BriefComponent,BriefDialogComponent, CommentsComponent, ConstructionComponent, ClosureComponent, QualityDialogComponent, TestrecordDialogComponent, ScopeComponent, ConceptComponent, ConceptDialogComponent, BudgetComponent,ProjectManageComponent,TenderComponent, AddsiteDialogComponent, SitevistAdddocComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,MglTimelineModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  entryComponents: [DeleteConfirmDialogComponent,SitevisitDialogComponent,BriefDialogComponent,CommentsComponent,QualityDialogComponent,TestrecordDialogComponent,ConceptDialogComponent,AddsiteDialogComponent,SitevistAdddocComponent]
})

export class ProjectDashboardModule { }
