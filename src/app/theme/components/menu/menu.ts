import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const horizontalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const adminMenuItems = [


    // new Menu(1, 'Analytics', '/ibs/analytics', null, 'analytics', null, true, 0, "white"),

    // new Menu(2, 'Manage', '/ibs/projects', null, 'work', null, true, 0, "white"),//projects
    // new Menu(21, 'Clients', '/ibs/projects/client', null, 'group', null, true, 2, "white"),
    // new Menu(22, 'Contacts', '/ibs/projects/contact', null, 'contact_phone', null, true, 2, "white"),

    // new Menu(23, 'Quotes', '/ibs/projects/quote', null, 'format_quote', null, true, 2, "white"),
    
    // new Menu(24, 'Projects', '/ibs/projects/projects', null, 'description', null, true, 2, "white"),


    // new Menu(3, 'Scheduling', '/ibs/calendar', null, 'today', null, true, 0, "white"),
    

    // new Menu(4, 'Reports', '/ibs/reports', null, 'today', null, true, 0, "white"),   


    // new Menu(5, 'Admin', '/ibs/admin', null, 'admin_panel_settings', null, true, 0, "white"),


    // new Menu(51, 'Master Data', '/ibs/admin/master-data/client-type', null, 'group_add', null, true, 5, "white"),
    // new Menu(52, 'Roles & Users', '/ibs/admin/users', null, 'group_add', null, true, 5, "white"),
    // new Menu(53, 'Lookup Option', '/ibs/admin/lookup', null, 'find_in_page', null, true, 5, "white"),
    // new Menu(54, 'Settings', '/ibs/admin/settings', null, 'settings', null, true, 5, "white"),

    new Menu(1, 'Analytics', '/beacon/analytics', null, 'analytics', null, true, 0, "white"),
    new Menu(2, 'Projects', '/beacon/projects', null, 'domain', null, true, 0, "white"),
    
    new Menu(3, 'Audit', '/beacon/audit', null, 'search', null, true, 0, "white"),
    new Menu(3.1, 'Audits', '/beacon/audit', null, 'search', null, true, 3, "white"),
    new Menu(3.2, 'Overview', '/beacon/audit/overview', null, 'search', null, true, 3, "white"),
    new Menu(3.3, 'Checklist', '/beacon/audit/checklist', null, 'list_alt', null, true, 3, "white"),
   
    
    new Menu(4, 'Scheduling', '/beacon/scheduling', null, 'schedule', null, true, 0, "white"),
    new Menu(5, 'Payroll', '/beacon/payroll', null, 'local_atm', null, true, 0, "white"),
    
    
    new Menu(6, 'Procurement', '/beacon/procurement/requisition', null, 'assignment_turned_in', null, true, 0, "white"),
    new Menu(6.1, 'Requisition', '/beacon/procurement/requisition', null, 'assignment_turned_in', null, true, 6, "white"),
    new Menu(6.2, 'Quotations', '/beacon/procurement/quotations', null, 'assignment_turned_in', null, true, 6, "white"),
    new Menu(6.3, 'Quotaion Review', '/beacon/procurement/quotation-review', null, 'assignment_turned_in', null, true, 6, "white"),
    new Menu(6.4, 'Purchase Orders', '/beacon/procurement/purchase-orders', null, 'assignment_turned_in', null, true, 6, "white"),
    new Menu(6.5, 'Work Orders', '/beacon/procurement/work-orders', null, 'assignment_turned_in', null, true, 6, "white"),
    
    
    new Menu(7, 'Inventory', '/beacon/inventory/consignment', null, 'business_center', null, true, 0, "white"),
    new Menu(7.1, 'Consignment', '/beacon/inventory/consignment', null, 'local_shipping', null, true, 7, "white"),
    new Menu(7.2, 'Gate Pass', '/beacon/inventory/gate', null, 'recent_actors', null, true, 7, "white"),
    new Menu(7.3, 'GRN', '/beacon/inventory/grn', null, 'analytics', null, true, 7, "white"),
    new Menu(7.4, 'Item Master', '/beacon/inventory/item', null, 'business_center', null, true, 7, "white"),
    new Menu(7.5, 'Material Issues', '/beacon/inventory/material', null, 'business_center', null, true, 7, "white"),
    new Menu(7.6, 'Stock Disposal', '/beacon/inventory/stock', null, 'business_center', null, true, 7, "white"),
    new Menu(7.7, 'Vendor Master', '/beacon/inventory/vendor', null, 'business_center', null, true, 7, "white"),
    
    
    
    new Menu(8, 'Assets', '/beacon/assets', null, 'account_balance', null, true, 0, "white"),
    new Menu(8.1, 'Asset Disposal', '/beacon/assets', null, 'account_balance', null, true, 8, "white"),
    new Menu(8.2, 'Asset Master', '/beacon/assets/asset-master', null, 'account_balance', null, true, 8, "white"),
    new Menu(8.3, 'Asset Maintenance', '/beacon/assets/asset-maintenance', null, 'account_balance', null, true, 8, "white"),
    new Menu(8.4, 'Asset Transfer', '/beacon/assets/asset-transfer', null, 'account_balance', null, true, 8, "white"),
    
    
    new Menu(9, 'Finance', '/beacon/finance/billing', null, 'attach_money', null, true, 0, "white"),
    new Menu(9.1, 'Billing', '/beacon/finance/billing', null, 'receipt_long', null, true, 9, "white"),
    new Menu(9.2, 'Budgeting', '/beacon/finance/budgeting', null, 'account_balance_wallet', null, true, 9, "white"),
    new Menu(9.3, 'Expenses', '/beacon/finance/expenses', null, 'attach_money', null, true, 9, "white"),
    new Menu(9.4, 'Payables', '/beacon/finance/payables', null, 'analytics', null, true, 9, "white"),
    
    
    new Menu(10, 'Admin', '/beacon/admin/master-data', null, 'admin_panel_settings', null, true, 0, "white"),
    new Menu(10.1, 'Clients', '/beacon/admin/clients', null, 'person_add', null, true, 10, "white"),
    new Menu(10.2, 'Roles', '/beacon/admin/roles', null, 'groups', null, true, 10, "white"),
    new Menu(10.3, 'Users', '/beacon/admin/users', null, 'group', null, true, 10, "white"),
    new Menu(10.4, 'Master Data', '/beacon/admin/master-data', null, 'layers', null, true, 10, "white"),
    new Menu(10.5, 'Kanban', '/beacon/admin/kanban', null, 'compare_arrows', null, true, 10, "white"),
    new Menu(10.6, 'Color Codes', '/beacon/admin/color-codes', null, 'invert_colors', null, true, 10, "white"),
    new Menu(10.7, 'Settings', '/beacon/admin/settings', null, 'settings', null, true, 10, "white"),
    new Menu(10.8, 'Lookup Options', '/beacon/admin/lookup-options', null, 'search', null, true, 10, "white"),
    new Menu(10.9, 'Announcements', '/beacon/admin/announcements', null, 'announcement', null, true, 10, "white"),

]
 