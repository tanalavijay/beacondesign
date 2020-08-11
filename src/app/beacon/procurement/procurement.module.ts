import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ProcurementComponent } from './procurement/procurement.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { QuotaionReviewComponent } from './quotaion-review/quotaion-review.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';

export const routes = [
  { path: '', component:ProcurementComponent, pathMatch: 'full' },
  { path: 'purchase-orders', component: PurchaseOrdersComponent, data: { breadcrumb: "Purchase Orders" } },
  { path: 'quotation-review', component: QuotaionReviewComponent, data: { breadcrumb: "Quotation Review" } },
  { path: 'quotations', component: QuotationsComponent, data: { breadcrumb: "Quotations" } },
  { path: 'requisition', component: RequisitionComponent, data: { breadcrumb: "Requisition" } },
  { path: 'work-orders', component: WorkOrdersComponent, data: { breadcrumb: "Work Orders" } },
];

@NgModule({
  declarations: [ProcurementComponent,PurchaseOrdersComponent ,QuotaionReviewComponent ,QuotationsComponent ,RequisitionComponent, WorkOrdersComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class ProcurementModule { }


