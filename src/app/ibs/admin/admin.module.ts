import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LookupScreenComponent } from './lookup-screen/lookup-screen.component';
import { SettingsScreenComponent } from './settings-screen/settings-screen.component';
import { UsersandrolesComponent } from './usersandroles/usersandroles.component';
import { UsersComponent } from './usersandroles/users/users.component';
import { RolesComponent } from './usersandroles/roles/roles.component';
import { UserDialogComponent } from './usersandroles/users/user-dialog/user-dialog.component';
import { RolesDialogComponent } from './usersandroles/roles/roles-dialog/roles-dialog.component';

export const routes = [
  { path: '', redirectTo: 'roles', pathMatch: 'full' },
  { path: 'lookup', component: LookupScreenComponent, data: { breadcrumb: "Lookup Options" } },
  { path: 'master-data', loadChildren: './master-data/masterdata.module#MasterdataModule', data: { breadcrumb: 'Master Data' } },
  { path: 'usersandroles', component: UsersandrolesComponent, data: { breadcrumb: "Roles & Users" } },
  { path: 'users', component: UsersComponent, data: { breadcrumb: "Roles & Users" } },
  { path: 'roles', component: RolesComponent, data: { breadcrumb: "Roles & Users" } },
  { path: 'settings', component: SettingsScreenComponent, data: { breadcrumb: "Settings" } },
];

@NgModule({
  declarations: [LookupScreenComponent, SettingsScreenComponent, UsersandrolesComponent,UsersComponent, RolesComponent, UserDialogComponent, RolesDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[UserDialogComponent,RolesDialogComponent]
})
export class AdminModule { }
