import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteScreenComponent } from './quote-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { QuoteGridviewComponent } from './quote-gridview/quote-gridview.component';
import { QuoteKanbanviewComponent } from './quote-kanbanview/quote-kanbanview.component';
import { QuoteMapviewComponent } from './quote-mapview/quote-mapview.component';
import { AddQuoteDialogComponent } from './add-quote-dialog/add-quote-dialog.component';
import { DragulaService } from 'ng2-dragula';
import { DragDropModule } from 'primeng/primeng';
import { DndModule } from 'ngx-drag-drop';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { SitevisitDialogComponent } from './quote-dashboard/site-visits/sitevisit-dialog/sitevisit-dialog.component';

export const routes = [
  { path: '', redirectTo:"gridview", pathMatch:'full' },
  { path: 'gridview', component: QuoteGridviewComponent, data: { breadcrumb: "Grid View" } },
  { path: 'kanbanview', component: QuoteKanbanviewComponent, data: { breadcrumb: "Kanban View" } },
  { path: 'mapview', component: QuoteMapviewComponent, data: { breadcrumb: "Map View" } },

  { path: 'quote-dashboard', loadChildren: './quote-dashboard/quote-dashboard.module#QuoteDashboardModule',   data: { breadcrumb: '' } },

];

@NgModule({
  declarations: [QuoteScreenComponent,QuoteGridviewComponent, QuoteKanbanviewComponent, QuoteMapviewComponent,AddQuoteDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,DndModule,DragDropModule,
  ],
  providers: [AlertService, DragulaService],
  entryComponents:[AddQuoteDialogComponent]
})
export class QuoteModule { }


