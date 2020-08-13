import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientGridviewComponent } from './client-gridview/client-gridview.component';
import { ClientMapviewComponent } from './client-mapview/client-mapview.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';
import { ClientscreenComponent } from './clientscreen.component';


export const routes = [
  { path: '', redirectTo:"gridview", pathMatch:'full' },
  { path: 'gridview', component: ClientGridviewComponent, data: { breadcrumb: "Grid View" } },
  { path: 'mapview', component: ClientMapviewComponent, data: { breadcrumb: "Map View" } },
];


@NgModule({
  declarations: [ClientGridviewComponent, ClientMapviewComponent,AddClientDialogComponent,ClientscreenComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule
  ],
  providers: [AlertService],
  entryComponents: [DeleteConfirmDialogComponent,AddClientDialogComponent]
})
export class ClientscreenModule { }
