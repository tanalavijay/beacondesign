import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteVisitsComponent } from './site-visits/site-visits.component';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/primeng';
import { QuotesdashboardComponent } from './quotesdashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { OverviewComponent } from './overview/overview.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BriefComponent } from './brief/brief.component';
import { BudgetComponent } from './budget/budget.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SitevisitDialogComponent } from './site-visits/sitevisit-dialog/sitevisit-dialog.component';
import { AssignteamDialogComponent } from './site-visits/assignteam-dialog/assignteam-dialog.component';
import { AdddocsDialogComponent } from './brief/adddocs-dialog/adddocs-dialog.component';
import { RemarksDialogComponent } from './brief/remarks-dialog/remarks-dialog.component';
import { AddsiteDialogComponent } from './budget/addsite-dialog/addsite-dialog.component';
import { ScopeComponent } from './scope/scope.component';

export const routes = [
  { path: '', component: ActivityComponent, pathMatch:'full' },

  // { path: 'dashboard', component: SiteVisitsComponent, data: { breadcrumb: "Site Visits" } },
  { path: 'activity', component: ActivityComponent, data: { breadcrumb: "Activity" } },
  { path: 'overview', component: OverviewComponent, data: { breadcrumb: "Overview" } },
  { path: 'budget', component: BudgetComponent, data: { breadcrumb: "Budget" } },
  { path: 'site-visits', component: SiteVisitsComponent, data: { breadcrumb: "Site Visit" } },
  { path: 'docs', component: ScopeComponent, data: { breadcrumb: "Docs" } },
  //{ path: 'brief', component: BriefComponent, data: { breadcrumb: "Brief" } },
  //{ path: 'services', component: ServicesComponent, data: { breadcrumb: "Services" } },

];

@NgModule({
  declarations: [SiteVisitsComponent, ServicesComponent, QuotesdashboardComponent, ActivityComponent, OverviewComponent, BriefComponent, BudgetComponent, SitevisitDialogComponent, AssignteamDialogComponent, AdddocsDialogComponent, RemarksDialogComponent, AddsiteDialogComponent, ScopeComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,CKEditorModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,DndModule,DragDropModule,MglTimelineModule
  ],
  entryComponents:[SitevisitDialogComponent,AssignteamDialogComponent,AdddocsDialogComponent,RemarksDialogComponent,AddsiteDialogComponent]
})
export class QuoteDashboardModule { }
