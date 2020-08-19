import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ConsignmentsComponent } from './consignments/consignments.component';
import { GateComponent } from './gate/gate.component';
import { GRNComponent } from './grn/grn.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { MaterialComponent } from './material/material.component';
import { StockComponent } from './stock/stock.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { StockDisposalComponent } from './stock-disposal/stock-disposal.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddvendirDialogComponent } from './vendor-master/addvendir-dialog/addvendir-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BranchComponent } from './vendor-master/branch/branch.component';
import { AddbranchDialogComponent } from './vendor-master/branch/addbranch-dialog/addbranch-dialog.component';
import { AddstockDialogComponent } from './stock/addstock-dialog/addstock-dialog.component';
import { AddmaterialDialogComponent } from './material/addmaterial-dialog/addmaterial-dialog.component';
import { MaterialissueComponent } from './material/materialissue/materialissue.component';
import { AddslipComponent } from './material/materialissue/addslip/addslip.component';
import { AdditemtypeDialogComponent } from 'src/app/shared/additemtype-dialog/additemtype-dialog.component';
import { ItemmakeComponent } from './item-master/itemmake/itemmake.component';
import { ItemmodalComponent } from './item-master/itemmodal/itemmodal.component';

export const routes = [
  { path: '', component:ConsignmentsComponent, pathMatch: 'full' },
   { path: 'consignment', component: ConsignmentsComponent, data: { breadcrumb: "Consignment" } },
   { path: 'gate', component: GateComponent, data: { breadcrumb: "Gate Passes" } },
   { path: 'grn', component: GRNComponent, data: { breadcrumb: "GRN" } },
   { path: 'item', component: ItemMasterComponent, data: { breadcrumb: "Item Type" } },
   { path: 'material', component: MaterialComponent, data: { breadcrumb: "Material Issues" } },
   { path: 'stock', component: StockComponent, data: { breadcrumb: "Stock Transfer" } },
   { path: 'stock-disposal', component: StockDisposalComponent, data: { breadcrumb: "Stock Disposal" } },
   { path: 'vendor', component: VendorMasterComponent, data: { breadcrumb: "Vendor master" } },
   { path: 'branch', component: BranchComponent, pathMatch: 'full', data: { breadcrumb: 'Branch' }},
   { path: 'materialdetails', component: MaterialissueComponent, pathMatch: 'full', data: { breadcrumb: 'Material Issue Details' }},
   { path: 'itemmake', component: ItemmakeComponent, pathMatch: 'full', data: { breadcrumb: 'Item Make' }},
   { path: 'itemmodel', component: ItemmodalComponent, pathMatch: 'full', data: { breadcrumb: 'Item Model' }}
];

@NgModule({
  declarations: [ConsignmentsComponent, GateComponent, GRNComponent, ItemMasterComponent, MaterialComponent, StockComponent, VendorMasterComponent,StockDisposalComponent, AddvendirDialogComponent, BranchComponent, AddbranchDialogComponent, AddstockDialogComponent, AddmaterialDialogComponent, MaterialissueComponent, AddslipComponent, ItemmakeComponent, ItemmodalComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[DeleteConfirmDialogComponent,AddvendirDialogComponent,AddbranchDialogComponent,AddstockDialogComponent,AddmaterialDialogComponent,AddslipComponent,AdditemtypeDialogComponent]
})
export class InventoryModule { }


