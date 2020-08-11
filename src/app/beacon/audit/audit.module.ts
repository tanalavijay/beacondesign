import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { AuditsComponent } from './audits/audits.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component:AuditsComponent, pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, data: { breadcrumb: "Overview" } },
  { path: 'checklist', component: ChecklistComponent, data: { breadcrumb: "Checklist" } },
];

@NgModule({
  declarations: [ OverviewComponent, AuditsComponent, ChecklistComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule
    
  ]
})
export class AuditModule { }
