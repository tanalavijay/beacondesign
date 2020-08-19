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
import { AddrequistionDialogComponent } from './requisition/addrequistion-dialog/addrequistion-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { SendQuotationComponent } from './quotations/send-quotation/send-quotation.component';
import { QuotationDialogComponent } from './quotations/send-quotation/quotation-dialog/quotation-dialog.component';
import { AddworkorderDialogComponent } from './work-orders/addworkorder-dialog/addworkorder-dialog.component';
import { AddtaskDialogComponent } from './work-orders/addtask-dialog/addtask-dialog.component';

export const routes = [
  { path: '', component:ProcurementComponent, pathMatch: 'full' },
  { path: 'purchase-orders', component: PurchaseOrdersComponent, data: { breadcrumb: "Purchase Orders" } },
  { path: 'quotation-review', component: QuotaionReviewComponent, data: { breadcrumb: "Quotation Review" } },
  { path: 'quotations', component: QuotationsComponent, data: { breadcrumb: "Quotations" } },
  { path: 'requisition', component: RequisitionComponent, data: { breadcrumb: "Requisition" } },
  { path: 'work-orders', component: WorkOrdersComponent, data: { breadcrumb: "Work Orders" } },
  { path: 'sendquotation', component: SendQuotationComponent, pathMatch: 'full', data: { breadcrumb: 'Quotation' }}
];

@NgModule({
  declarations: [ProcurementComponent,PurchaseOrdersComponent ,QuotaionReviewComponent ,QuotationsComponent ,RequisitionComponent, WorkOrdersComponent, AddrequistionDialogComponent, SendQuotationComponent, QuotationDialogComponent, AddworkorderDialogComponent, AddtaskDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[AddrequistionDialogComponent,DeleteConfirmDialogComponent,QuotationDialogComponent,AddworkorderDialogComponent,AddtaskDialogComponent]
})
export class ProcurementModule { }


