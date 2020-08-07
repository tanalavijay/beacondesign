import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "ibs",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "analytics", pathMatch: "full" },
      {
        path: "analytics",
        loadChildren: "./ibs/analytics/analytics.module#AnalyticsModule",
        data: { breadcrumb: "" },
      },  
      {
        path: "projects",
        loadChildren: "./ibs/projects/projects.module#ProjectsModule",
        data: { breadcrumb: "" },
      },        
      {
        path: "calendar",
        loadChildren: "./ibs/calendar/calendar.module#CalendarModule",
        data: { breadcrumb: "" },
      },  
      {
        path: "reports",
        loadChildren: "./ibs/reports/reports.module#ReportsModule",
        data: { breadcrumb: "" },
      },  
      {
        path: "admin",
        loadChildren: "./ibs/admin/admin.module#AdminModule",
        data: { breadcrumb: "" },
      },   
    ],
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { breadcrumb: "Login" } },
  {
    path: "**",
    component: NotFoundComponent,
    data: { breadcrumb: "Not found" },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});
