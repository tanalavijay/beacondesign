import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { AuditsComponent } from './audits/audits.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ScheduleorderDialogComponent } from './audits/scheduleorder-dialog/scheduleorder-dialog.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddchecklistDialogComponent } from './checklist/addchecklist-dialog/addchecklist-dialog.component';

export const routes = [
  { path: '', component:AuditsComponent, pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, data: { breadcrumb: "Overview" } },
  { path: 'checklist', component: ChecklistComponent, data: { breadcrumb: "Checklist" } },
];

@NgModule({
  declarations: [ OverviewComponent, AuditsComponent, ChecklistComponent, ScheduleorderDialogComponent, AddchecklistDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  entryComponents:[ScheduleorderDialogComponent,DeleteConfirmDialogComponent,AddchecklistDialogComponent]
})
export class AuditModule { }
