import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const horizontalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const adminMenuItems = [


    new Menu(1, 'Analytics', '/ibs/analytics', null, 'analytics', null, true, 0, "white"),

    new Menu(2, 'Manage', '/ibs/projects', null, 'work', null, true, 0, "white"),//projects
    new Menu(21, 'Clients', '/ibs/projects/client', null, 'group', null, true, 2, "white"),
    new Menu(22, 'Contacts', '/ibs/projects/contact', null, 'contact_phone', null, true, 2, "white"),

    new Menu(23, 'Quotes', '/ibs/projects/quote', null, 'format_quote', null, true, 2, "white"),
    
    new Menu(24, 'Projects', '/ibs/projects/projects', null, 'description', null, true, 2, "white"),


    new Menu(3, 'Scheduling', '/ibs/calendar', null, 'today', null, true, 0, "white"),
    

    new Menu(4, 'Reports', '/ibs/reports', null, 'today', null, true, 0, "white"),   


    new Menu(5, 'Admin', '/ibs/admin', null, 'admin_panel_settings', null, true, 0, "white"),


    new Menu(51, 'Master Data', '/ibs/admin/master-data/client-type', null, 'group_add', null, true, 5, "white"),
    new Menu(52, 'Roles & Users', '/ibs/admin/users', null, 'group_add', null, true, 5, "white"),
    new Menu(53, 'Lookup Option', '/ibs/admin/lookup', null, 'find_in_page', null, true, 5, "white"),
    new Menu(54, 'Settings', '/ibs/admin/settings', null, 'settings', null, true, 5, "white"),

]
 