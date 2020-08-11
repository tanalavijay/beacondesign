import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ScheduleComponent } from './schedule.component';

export const routes = [
   { path: '', component:ScheduleComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
      CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents: []
})
export class SchedulingModule { }

