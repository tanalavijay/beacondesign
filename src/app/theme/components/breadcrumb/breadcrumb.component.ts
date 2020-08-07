import {
    Component
} from '@angular/core';
import {
    ActivatedRoute,
    Router,
    ActivatedRouteSnapshot,
    UrlSegment,
    NavigationEnd
} from "@angular/router";
import {
    Title
} from '@angular/platform-browser';
import {
    AppSettings
} from '../../../app.settings';
import {
    Settings
} from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = "test";
    public test = "sample";
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    } [] = [];

    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
        this.settings = this.appSettings.settings;
        this.description = {

            // ANALYTICS
            "Analytics": "This is Analytics Screen",

            //PROJECTS
            "Projects": "This is Project Screen",
            "Project Dashboard": "Activities that are carried on selected project can be viewed and managed.",
            "Clients": "This is Clients Screen",  
            "Grid View": "This is Grid View Screen",  
            "Map View": "This is Map View Screen",  
            "Kanban View": "This is Kanban View Screen",  
            
            
            "Contacts": "This is Project Screen",            
            "Quotes": "This is Quotes Screen",            
            "Quotes Dashboard": "This is Quotes Dashboard Screen",         
            "Activity": "The Timeline of project updates appears here", 
            "Overview": "This is Overview Screen", 
            "Budget": "This is Budget Screen", 
            "Site Visit": "This is Site Visit Screen", 
            "Docs": "This is Site Document Screen", 



            "Site Visits": "This is Site Visits Screen",            
            "Services": "This is Services Screen",            
             

            //CALENDAR
            "Calendar":"This is Calendar Screen",
            
            //REPORTS
            "Reports":"This is Reports Screen",

         

            // ADMIN MODULE
            "Master Data": "This is Master Data Screen",
            "Roles & Users": "This is Roles & Users screen",
            "Lookup Options": "This is Lookup Options screen",
            "Settings": "System level settings can be managed from this screen",
        };
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' | ' + breadcrumb.name;
                })
                this.pageTitle ? null : this.pageTitle = " | Dashboard";

                var temp = this.pageTitle.split(' | ');
                if (temp.length > 4) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else if (temp.length > 3) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else {
                    this.moduleTitle = temp.pop();
                }

                if (this.subTitle === 'Permissions') {
                    this.moduleTitle = "Permissions";
                    this.subTitle = "test";
                }
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        })
    }

    private parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                })
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

    public closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}