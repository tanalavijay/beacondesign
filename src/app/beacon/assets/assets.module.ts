import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { AssetTransferComponent } from './asset-transfer/asset-transfer.component';
import { AssetDisposalComponent } from './asset-disposal/asset-disposal.component';
import { AssetMaintenanceComponent } from './asset-maintenance/asset-maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component:AssetDisposalComponent, pathMatch: 'full' },
  { path: 'asset-maintenance', component: AssetMaintenanceComponent, data: { breadcrumb: "Assets Maintenance" } },
  { path: 'asset-master', component: AssetMasterComponent, data: { breadcrumb: "Assets Master" } },
  { path: 'asset-transfer', component: AssetTransferComponent, data: { breadcrumb: "Assets Transfer" } },
];

@NgModule({
  declarations: [AssetMasterComponent, AssetTransferComponent, AssetDisposalComponent, AssetMaintenanceComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule
    
  ]
})
export class AssetsModule { }
