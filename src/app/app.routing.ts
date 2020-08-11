import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "beacon",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "analytics", pathMatch: "full" },
      {
        path: "analytics",
        loadChildren: "./beacon/analytics/analytics.module#AnalyticsModule",
        data: { breadcrumb: "Analytics" },
      },  
      {
        path: "projects",
        loadChildren: "./beacon/projects/projects.module#ProjectsModule",
        data: { breadcrumb: "" },
      },        
      {
        path: "scheduling",
        loadChildren: "./beacon/scheduling/scheduling.module#SchedulingModule",
        data: { breadcrumb: "Scheduling" },
      },        
      {
        path: "payroll",
        loadChildren: "./beacon/payroll/payroll.module#PayrollModule",
        data: { breadcrumb: "Payroll" },
      },        
      {
        path: "audit",
        loadChildren: "./beacon/audit/audit.module#AuditModule",
        data: { breadcrumb: "Audit" },
      },        
      {
        path: "procurement",
        loadChildren: "./beacon/procurement/procurement.module#ProcurementModule",
        data: { breadcrumb: "Procurement" },
      },        
      {
        path: "inventory",
        loadChildren: "./beacon/inventory/inventory.module#InventoryModule",
        data: { breadcrumb: "Inventory" },
      },        
      {
        path: "assets",
        loadChildren: "./beacon/assets/assets.module#AssetsModule",
        data: { breadcrumb: "Assets" },
      },        
      {
        path: "finance",
        loadChildren: "./beacon/finance/finance.module#FinanceModule",
        data: { breadcrumb: "Finance" },
      },        
 
      {
        path: "admin",
        loadChildren: "./beacon/admin/admin.module#AdminModule",
        data: { breadcrumb: "Admin" },
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
