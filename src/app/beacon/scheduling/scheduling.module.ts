import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';

export const routes = [
  { path: '', component:SchedulingComponent, pathMatch: 'full' },
  // { path: 'roles', component: RolesComponent, data: { breadcrumb: "Roles & Users" } },
];

@NgModule({
  declarations: [SchedulingComponent],
  imports: [
      CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class SchedulingModule { }

