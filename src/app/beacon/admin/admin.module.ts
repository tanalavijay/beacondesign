import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClientsComponent } from './clients/clients.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ColorCodesComponent } from './color-codes/color-codes.component';
import { SettingsComponent } from './settings/settings.component';
import { LookupOptionsComponent } from './lookup-options/lookup-options.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MasterDialogComponent } from './master-data/master-dialog/master-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { DragulaModule } from 'ng2-dragula';
import { RolesDialogComponent } from './roles/roles-dialog/roles-dialog.component';
import { UserdialogComponent } from './users/userdialog/userdialog.component';

export const routes = [
  { path: "", component: RolesComponent, pathMatch: "full" },
  // {
  //   path: "clients",
  //   component: ClientsComponent,
  //   data: { breadcrumb: "Clients" },
  // },
  { path: "roles", component: RolesComponent, data: { breadcrumb: "Roles" } },
  { path: "users", component: UsersComponent, data: { breadcrumb: "Users" } },
  {
    path: "master-data",
    component: MasterDataComponent,
    data: { breadcrumb: "Master Data" },
  },
  {
    path: "kanban",
    component: KanbanComponent,
    data: { breadcrumb: "Kanban" },
  },
  
  {
    path: "color-codes",
    component: ColorCodesComponent,
    data: { breadcrumb: "Color Codes" },
  },
  {
    path: "settings",
    component: SettingsComponent,
    data: { breadcrumb: "Settings" },
  },
  {
    path: "lookup-options",
    component: LookupOptionsComponent,
    data: { breadcrumb: "Lookup Options" },
  },
  {
    path: "announcements",
    component: AnnouncementsComponent,
    data: { breadcrumb: "Announcements" },
  },
];

@NgModule({
  declarations: [ClientsComponent, RolesComponent, UsersComponent,MasterDataComponent, KanbanComponent , ColorCodesComponent, SettingsComponent, LookupOptionsComponent, AnnouncementsComponent, MasterDialogComponent ,RolesDialogComponent,UserdialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule, DragulaModule.forRoot()
  ],
  providers: [AlertService],
  entryComponents : [MasterDialogComponent,DeleteConfirmDialogComponent,RolesDialogComponent,UserdialogComponent]
})
export class AdminModule {}
