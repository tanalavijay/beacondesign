import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { AlertService } from "src/app/shared/services/alert.service";
import { ContactScreenComponent } from "./contact-screen/contact-screen.component";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { ContactDialogComponent } from "./contact-screen/contact-dialog/contact-dialog.component";
import { AddClientDialogComponent } from "./clientscreen/add-client-dialog/add-client-dialog.component";

export const routes = [
  { path: "", redirectTo: "clients", pathMatch: "full" },

  {
    path: "contacts",
    component: ContactScreenComponent,
    data: { breadcrumb: "Contacts" },
  },
  {
    path: "clients",
    loadChildren: "./clientscreen/clientscreen.module#ClientscreenModule",
    data: { breadcrumb: "Clients" },
  },
  {
    path: "projects",
    loadChildren: "./projects/projects.module#ProjectsModule",
    data: { breadcrumb: "" },
  },
]; 

@NgModule({
  declarations: [ContactScreenComponent, ContactDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ConfirmationPopoverModule,
  ],
  providers: [AlertService],
  entryComponents: [ContactDialogComponent],
})
export class ManageModule {}
