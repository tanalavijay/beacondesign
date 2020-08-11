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

export const routes = [
  { path: '', component:ConsignmentsComponent, pathMatch: 'full' },
   { path: 'consignment', component: ConsignmentsComponent, data: { breadcrumb: "Consignment" } },
   { path: 'gate', component: GateComponent, data: { breadcrumb: "Gate Passes" } },
   { path: 'grn', component: GRNComponent, data: { breadcrumb: "GRN" } },
   { path: 'item', component: ItemMasterComponent, data: { breadcrumb: "Item Master" } },
   { path: 'material', component: MaterialComponent, data: { breadcrumb: "Material Issues" } },
   { path: 'stock', component: StockComponent, data: { breadcrumb: "Stock Transfer" } },
   { path: 'stock-disposal', component: StockDisposalComponent, data: { breadcrumb: "Stock Disposal" } },
   { path: 'vendor', component: VendorMasterComponent, data: { breadcrumb: "Vendor master" } },

];

@NgModule({
  declarations: [ConsignmentsComponent, GateComponent, GRNComponent, ItemMasterComponent, MaterialComponent, StockComponent, VendorMasterComponent,StockDisposalComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AlertService],
})
export class InventoryModule { }


