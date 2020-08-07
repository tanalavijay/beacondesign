import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ProjectsComponent } from './projects/projects.component';
import { ClientscreenComponent } from './clientscreen/clientscreen.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { ContactDialogComponent } from './contact-screen/contact-dialog/contact-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectDashboardComponent } from './projects/project-dashboard/project-dashboard.component';


  export const routes = [
    { path: '', redirectTo:"projects", pathMatch:'full' },
    { path: 'projects', component: ProjectsComponent, loadChildren: './projects/project.module#ProjectModule',data: { breadcrumb: "Projects" } },
    { path: 'client', loadChildren: './clientscreen/clientscreen.module#ClientscreenModule', data: { breadcrumb: '' } },
    { path: 'quote', loadChildren: './quote-screen/quote.module#QuoteModule', data: { breadcrumb: 'Quotes' } },
    { path: 'contact', component: ContactScreenComponent, data: { breadcrumb: "Contacts" } },
    { path: 'project-dashboard', component: ProjectDashboardComponent, loadChildren: './projects/project-dashboard/project-dashboard.module#ProjectDashboardModule', data: { breadcrumb: 'Project Dashboard' } },
  ];

@NgModule({
  declarations: [ ProjectsComponent, ClientscreenComponent,ContactScreenComponent, ContactDialogComponent,ProjectDashboardComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents: [ContactDialogComponent,DeleteConfirmDialogComponent]
})
export class ProjectsModule { }


