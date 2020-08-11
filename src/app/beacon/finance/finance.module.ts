import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { PayablesComponent } from './payables/payables.component';
import { BudgetingComponent } from './budgeting/budgeting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';


export const routes = [
  { path: '', component:BillingComponent, pathMatch: 'full' },
  { path: 'billing', component: BillingComponent, data: { breadcrumb: "Billing" } },
  { path: 'budgeting', component: BudgetingComponent, data: { breadcrumb: "Budgeting" } },
  { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: "Expenses" } },
  { path: 'payables', component: PayablesComponent, data: { breadcrumb: "Payables" } },
];

@NgModule({
  declarations: [ExpensesComponent, BillingComponent, PayablesComponent, BudgetingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule
    
  ]
})
export class FinanceModule { }
