import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from "../../authentication/auth.service";
import { UsersService } from "../../users/services/users.service";

// Menu Bar
export interface Menu {
  headTitle?: string,
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  roles?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnInit, OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public fullScreen: boolean = false;
  MENUITEMS: Menu[];
  items = new BehaviorSubject<Menu[]>(null);
  utilisateur: any;
  adminUsers: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UsersService
  ) {
    if (!environment.production) {
      this.MENUITEMS = this.PRODUCTIONMENUITEMS.concat(this.HORSPRODMENUITEMS);
    } else {
      this.MENUITEMS = this.PRODUCTIONMENUITEMS;
    }
    this.items.next(this.MENUITEMS);
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      takeUntil(this.unsubscriber)
    ).subscribe((evt: any) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerWidth < 991) {
        this.collapseSidebar = false;
        this.megaMenu = false;
      }
      if (evt.target.innerWidth < 1199) {
        this.megaMenuCollapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe(event => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      });
    }
  }

  ngOnInit(): void {
    this.userService.getUsersWithRoles().subscribe(users => {
      this.adminUsers = users.filter(user => user.roles.includes('ADMIN'));
      console.log(this.adminUsers, 'adminUsers');
    });
  }

  getUtilisateur(): void {
    this.authService.getCurrentUser()
      .subscribe(
        utilisateur => {
          this.utilisateur = utilisateur;
          console.log(utilisateur); 
        },
        error => {
          console.log(error);
        }
      );
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  ngOnDestroy() {
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  PRODUCTIONMENUITEMS: Menu[] = [
    { headTitle: 'Accueil' },
    {
      path: '/dashboard', title: 'Tableau de board', type: 'link', icon: 'Tableau de board', badgeType: 'danger', badgeValue: 'Hot', active: true, roles: ['ADMIN', 'USER']
    },
    { headTitle: 'Facturation' },
    {
      path: '/facturation', title: 'Facturation', type: 'link', icon: 'Facture', roles: ['ADMIN']
    },
    { headTitle: 'Gestion des Cv' },
    {
      path: '/gestion-cv', title: 'Gestion des Cv', type: 'link', icon: 'Resume', roles: ['ADMIN']
    },
    { headTitle: 'Missions' },
    {
      title: 'Mission', icon: 'widgets', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/missions/create', title: 'Créer une mission', type: 'link' },
        { path: '/missions/all-missions', title: 'Toutes les missions', type: 'link' }
      ]
    },
    {
      title: 'Utlilisateurs', icon: 'widgets', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/users/list-users', title: 'Liste des utlilisateurs', type: 'link' }
      ]
    },
    {
      title: 'Conges', icon: 'widgets', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/users/list-conges', title: 'Liste des Conges', type: 'link' }
      ]
    },
    {
      title: 'Mes Conges', icon: 'widgets', type: 'sub', active: false, roles: ['ADMIN', 'USER'],
      children: [
        { path: '/users/list-myconges', title: 'Liste des  Mes Conges', type: 'link' }
      ]
    },

    { headTitle: 'CRA' },
    {
      title: 'CRA', icon: 'widgets', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/cra/create-activity', title: 'Compte rendu d\'activité', type: 'link' },
        { path: '/cra/mes-cra', title: 'Mes CRA', type: 'link' },
        { path: '/cra/toutes-les-cra', title: 'Toutes les CRA', type: 'link' }
      ]
    },
    { headTitle: 'Contacts' },
    {
      path: '/apps/contacts', title: 'Gestion des contacts', type: 'link', icon: 'Contacts', roles: ['ADMIN']
    },
    {
      title: 'Email', type: 'sub', active: false, icon: 'Mail', roles: ['ADMIN'],
      children: [
        { path: '/pages/email/compose', title: 'Email Compose', type: 'link' },
        { path: '/pages/email/inbox', title: 'Email Inbox', type: 'link' },
        { path: '/pages/email/read', title: 'Email Read', type: 'link' }
      ]
    },
    {
      title: 'Gestion des fichiers', type: 'sub', active: false, icon: 'Fichier', roles: ['ADMIN'],
      children: [
        { path: '/pages/fichier/mesFichier', title: 'Mes fichiers', type: 'link' },
        { path: '/pages/fichier/autres', title: 'Autres fichiers', type: 'link' },
        { path: '/pages/fichier/invitations', title: 'Invitations', type: 'link' },
        { path: '/pages/fichier/partage', title: 'Partagés', type: 'link' }
      ]
    },
    { headTitle: 'Factures' },
    {
      title: 'Apps', icon: 'apps', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        {
          title: 'Chat', type: 'sub', active: false,
          children: [
            { path: '/apps/chat/chat-1', title: 'Chat 01', type: 'link' },
            { path: '/apps/chat/chat-2', title: 'Chat 02', type: 'link' },
            { path: '/apps/chat/chat-3', title: 'Chat 03', type: 'link' }
          ]
        },
        {
          title: 'Contact', type: 'sub', active: false,
          children: [
            { path: '/apps/contact/contact-list-1', title: 'Contact List 01', type: 'link' },
            { path: '/apps/contact/contact-list-2', title: 'Contact List 02', type: 'link' }
          ]
        },
        { path: '/apps/calendar', title: 'Calendar', type: 'link' },
        { path: '/apps/contacts', title: 'Contacts', type: 'link' },
        { path: '/apps/colorpicker', title: 'Color Picker', type: 'link' },
        { path: '/apps/dragula-card', title: 'Dragula Card', type: 'link' },
        {
          title: 'File Manager', type: 'sub', active: false,
          children: [
            { path: '/apps/file-manager/file-manager-1', title: 'File Manager 01', type: 'link' },
            { path: '/apps/file-manager/file-manager-2', title: 'File Manager 02', type: 'link' }
          ]
        },
        { path: '/apps/image-crop', title: 'Image Crop', type: 'link' },
        { path: '/apps/loaders', title: 'Loaders', type: 'link' },
        { path: '/apps/notify', title: 'Notifications', type: 'link' },
        { path: '/apps/page-sessiontimeout', title: 'Page-session timeout', type: 'link' },
        { path: '/apps/rangeslider', title: 'Range Slider', type: 'link' },
        { path: '/apps/rating', title: 'Ratings', type: 'link' },
        { path: '/apps/sweetalert', title: 'Sweet Alerts', type: 'link' },
        {
          title: 'Todo List', type: 'sub', active: false,
          children: [
            { path: '/apps/todo-list/todo-list-1', title: 'Todo List 01', type: 'link' },
            { path: '/apps/todo-list/todo-list-2', title: 'Todo List 02', type: 'link' },
            { path: '/apps/todo-list/todo-list-3', title: 'Todo List 03', type: 'link' }
          ]
        },
        { path: '/apps/time-line', title: 'Time Line', type: 'link' },
        {
          title: 'User List', type: 'sub', active: false,
          children: [
            { path: '/apps/user-list/users-list-1', title: 'User List 01', type: 'link' },
            { path: '/apps/user-list/users-list-2', title: 'User List 02', type: 'link' },
            { path: '/apps/user-list/users-list-3', title: 'User List 03', type: 'link' },
            { path: '/apps/user-list/users-list-4', title: 'User List 04', type: 'link' }
          ]
        }
      ]
    },
    {
      title: 'Elements', icon: 'dns', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/elements/accordion', title: 'Accordion', type: 'link' },
        { path: '/elements/alerts', title: 'Alerts', type: 'link' },
        { path: '/elements/avatars', title: 'Avatars', type: 'link' },
        { path: '/elements/badges', title: 'Badges', type: 'link' },
        { path: '/elements/breadcrumbs', title: 'Breadcrumb', type: 'link' },
        { path: '/elements/buttons', title: 'Buttons', type: 'link' },
        { path: '/elements/cards', title: 'Cards', type: 'link' },
        { path: '/elements/card-images', title: 'Card Images', type: 'link' },
        {
          title: 'Carousel', type: 'sub', active: false,
          children: [
            { path: '/elements/carousel/carousel1', title: 'Carousel 01', type: 'link' },
            { path: '/elements/carousel/carousel2', title: 'Carousel 02', type: 'link' },
            { path: '/elements/carousel/carousel3', title: 'Carousel 03', type: 'link' }
          ]
        },
        { path: '/elements/datepicker', title: 'Date Picker', type: 'link' },
        { path: '/elements/dropdown', title: 'Dropdown', type: 'link' },
        { path: '/elements/footers', title: 'Footers', type: 'link' },
        { path: '/elements/headers', title: 'Headers', type: 'link' },
        { path: '/elements/jumbotron', title: 'Jumbotron', type: 'link' },
        { path: '/elements/list-group', title: 'List Group', type: 'link' },
        { path: '/elements/media-object', title: 'Media Object', type: 'link' },
        { path: '/elements/modal', title: 'Modal', type: 'link' },
        { path: '/elements/navigation', title: 'Navigation', type: 'link' },
        { path: '/elements/pagination', title: 'Pagination', type: 'link' },
        { path: '/elements/panels', title: 'Panel', type: 'link' },
        { path: '/elements/popover', title: 'Popover', type: 'link' },
        { path: '/elements/progress', title: 'Progress', type: 'link' },
        { path: '/elements/tabs', title: 'Tabs', type: 'link' },
        { path: '/elements/tags', title: 'Tags', type: 'link' },
        { path: '/elements/timepicker', title: 'Time Picker', type: 'link' },
        { path: '/elements/tooltips', title: 'Tooltips', type: 'link' }
      ]
    },
    {
      title: 'Utilities', icon: 'healing', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/utilities/border', title: 'Border', type: 'link' },
        { path: '/utilities/colors', title: 'Colors', type: 'link' },
        { path: '/utilities/display', title: 'Display', type: 'link' },
        { path: '/utilities/flex-items', title: 'Flex Items', type: 'link' },
        { path: '/utilities/height', title: 'Height', type: 'link' },
        { path: '/utilities/margin', title: 'Margin', type: 'link' },
        { path: '/utilities/padding', title: 'Padding', type: 'link' },
        { path: '/utilities/typhography', title: 'Typhography', type: 'link' },
        { path: '/utilities/width', title: 'Width', type: 'link' }
      ]
    },
    { headTitle: 'Frais' },
    {
      title: 'Forms', icon: 'description', type: 'sub', badgeType: 'success', badgeValue: '6', active: false, roles: ['ADMIN'],
      children: [
        { path: '/forms/form-elements', title: 'Form Elements', type: 'link' },
        { path: '/forms/form-advanced', title: 'Advanced Forms', type: 'link' },
        { path: '/forms/form-wizard', title: 'Form Wizard', type: 'link' },
        { path: '/forms/form-editor', title: 'Form Editor', type: 'link' },
        { path: '/forms/form-element-sizes', title: 'Form Element Sizes', type: 'link' },
        { path: '/forms/form-treeview', title: 'Form Treeview', type: 'link' }
      ]
    },
    {
      title: 'Charts', icon: 'insert_chart', type: 'sub', badgeType: 'info', badgeValue: '5', active: false, roles: ['ADMIN'],
      children: [
        { path: '/charts/apex', title: 'Apex Charts', type: 'link' },
        { path: '/charts/chartjs', title: 'Chart.js Charts', type: 'link' },
        { path: '/charts/echart', title: 'Echart Charts', type: 'link' },
        { path: '/charts/c3', title: 'C3 Charts', type: 'link' },
        { path: '/charts/chartist', title: 'Chartist Charts', type: 'link' }
      ]
    },
    { headTitle: 'Salaires' },
    {
      title: 'Tables', icon: 'table_chart', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/tables/default', title: 'Default Table', type: 'link' },
        { path: '/tables/data', title: 'Data Table', type: 'link' }
      ]
    },
    {
      title: 'Icons', icon: 'palette', type: 'sub', badgeType: 'warning', badgeValue: '11', active: false, roles: ['ADMIN'],
      children: [
        { path: '/icons/font-awesome', title: 'Font Awesome Icons', type: 'link' },
        { path: '/icons/material-design', title: 'Material Design Icons', type: 'link' },
        { path: '/icons/simple-line', title: 'Simple Line Icons', type: 'link' },
        { path: '/icons/feather', title: 'Feather Icons', type: 'link' },
        { path: '/icons/ionic', title: 'Ionic Icons', type: 'link' },
        { path: '/icons/flag', title: 'Flag Icons', type: 'link' },
        { path: '/icons/pe7', title: 'pe7 Icons', type: 'link' },
        { path: '/icons/themify', title: 'Themify Icons', type: 'link' },
        { path: '/icons/typicons', title: 'Typicons Icons', type: 'link' },
        { path: '/icons/weather', title: 'Weather Icons', type: 'link' },
        { path: '/icons/material-svgs', title: 'Material Svgs', type: 'link' }
      ]
    },
    { headTitle: 'PAGES & E_COMMERCE' },
    {
      title: 'Pages', icon: 'layers', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        {
          title: 'Profile', type: 'sub', active: false,
          children: [
            { path: '/pages/profile/profile-1', title: 'Profile 01', type: 'link' },
            { path: '/pages/profile/profile-2', title: 'Profile 02', type: 'link' },
            { path: '/pages/profile/profile-3', title: 'Profile 03', type: 'link' }
          ]
        },
        { path: '/pages/editprofile', title: 'Edit Profile', type: 'link' },
        {
          title: 'Email', type: 'sub', active: false,
          children: [
            { path: '/pages/email/compose', title: 'Email Compose', type: 'link' },
            { path: '/pages/email/inbox', title: 'Email Inbox', type: 'link' },
            { path: '/pages/email/read', title: 'Email Read', type: 'link' }
          ]
        },
        {
          title: 'Pricing', type: 'sub', active: false,
          children: [
            { path: '/pages/pricing/pricing-1', title: 'Pricing 01', type: 'link' },
            { path: '/pages/pricing/pricing-2', title: 'Pricing 02', type: 'link' },
            { path: '/pages/pricing/pricing-3', title: 'Pricing 03', type: 'link' }
          ]
        },
        {
          title: 'Invoice', type: 'sub', active: false,
          children: [
            { path: '/pages/invoice/invoice-list', title: 'Invoice List', type: 'link' },
            { path: '/pages/invoice/invoice-1', title: 'Invoice 01', type: 'link' },
            { path: '/pages/invoice/invoice-2', title: 'Invoice 02', type: 'link' },
            { path: '/pages/invoice/invoice-3', title: 'Invoice 03', type: 'link' },
            { path: '/pages/invoice/invoice-add', title: 'Add Invoice', type: 'link' },
            { path: '/pages/invoice/invoice-edit', title: 'Edit Invoice', type: 'link' }
          ]
        },
        {
          title: 'Blog', type: 'sub', active: false,
          children: [
            { path: '/pages/blog/blog-1', title: 'Blog 01', type: 'link' },
            { path: '/pages/blog/blog-2', title: 'Blog 02', type: 'link' },
            { path: '/pages/blog/blog-3', title: 'Blog 03', type: 'link' },
            { path: '/pages/blog/blog-styles', title: 'Blog Styles', type: 'link' }
          ]
        },
        { path: '/pages/gallery', title: 'Gallery', type: 'link' },
        { path: '/pages/faqs', title: 'FAQS', type: 'link' },
        { path: '/pages/terms', title: 'Terms', type: 'link' },
        { path: '/pages/search', title: 'Search', type: 'link' },
        { path: '/pages/empty-page', title: 'Empty Page', type: 'link' }
      ]
    },
    {
      title: 'E-Commerce', icon: 'shopping_basket', type: 'sub', badgeType: 'danger', badgeValue: '3', active: false, roles: ['ADMIN'],
      children: [
        { path: '/e-commerce/product', title: 'Products', type: 'link' },
        { path: '/e-commerce/product-details', title: 'Product Details', type: 'link' },
        { path: '/e-commerce/shopping-cart', title: 'Shopping Cart', type: 'link' }
      ]
    },
    { headTitle: 'CUSTOM & ERROR PAGES' },
    {
      title: 'Custom Pages', icon: 'camera', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        {
          title: 'Register', type: 'sub', active: false,
          children: [
            { path: '/custom-pages/register/register-1', title: 'Register 01', type: 'link' },
            { path: '/custom-pages/register/register-2', title: 'Register 02', type: 'link' },
            { path: '/custom-pages/styles/register/register-3', title: 'Register 03', type: 'link' }
          ]
        },
        {
          title: 'Login', type: 'sub', active: false,
          children: [
            { path: '/custom-pages/login/login-1', title: 'Login 01', type: 'link' },
            { path: '/custom-pages/login/login-2', title: 'Login 02', type: 'link' },
            { path: '/custom-pages/styles/login/login-3', title: 'Login 03', type: 'link' }
          ]
        },
        {
          title: 'Forget Password', type: 'sub', active: false,
          children: [
            { path: '/custom-pages/forget-password/forget-password-1', title: 'Forget Password 01', type: 'link' },
            { path: '/custom-pages/forget-password/forget-password-2', title: 'Forget Password 02', type: 'link' },
            { path: '/custom-pages/styles/forget-password/forget-password-3', title: 'Forget Password 03', type: 'link' }
          ]
        },
        {
          title: 'Reset Password', type: 'sub', active: false,
          children: [
            { path: '/custom-pages/reset-password/reset-password-1', title: 'Reset Password 01', type: 'link' },
            { path: '/custom-pages/reset-password/reset-password-2', title: 'Reset Password 02', type: 'link' },
            { path: '/custom-pages/styles/reset-password/reset-password-3', title: 'Reset Password 03', type: 'link' }
          ]
        },
        {
          title: 'Lock Screen', type: 'sub', active: false,
          children: [
            { path: '/custom-pages/lockscreen/lockscreen-1', title: 'Lock Screen 01', type: 'link' },
            { path: '/custom-pages/lockscreen/lockscreen-2', title: 'Lock Screen 02', type: 'link' },
            { path: '/custom-pages/styles/lockscreen/lockscreen-3', title: 'Lock Screen 03', type: 'link' }
          ]
        },
        { path: '/maintenance', title: 'Under Construction', type: 'link' },
        { path: '/coming-soon', title: 'Coming Soon', type: 'link' }
      ]
    },
    {
      title: 'Error Pages', icon: 'report_problem', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/error-page/Error-400', title: '400', type: 'link' },
        { path: '/error-page/Error-401', title: '401', type: 'link' },
        { path: '/error-page/Error-403', title: '403', type: 'link' },
        { path: '/error-page/Error-404', title: '404', type: 'link' },
        { path: '/error-page/Error-500', title: '500', type: 'link' },
        { path: '/error-page/Error-503', title: '503', type: 'link' }
      ]
    }
  ];

  HORSPRODMENUITEMS: Menu[] = [
    { headTitle: 'Fichiers' },
    { path: '/apps/gestionFichier', title: 'Gestion des fichiers', type: 'link', icon: 'layers', roles: ['ADMIN'] },
    {
      title: 'Recherche ', icon: 'location_on', type: 'sub', active: false, roles: ['ADMIN'],
      children: [
        { path: '/maps/google', title: 'Google Maps', type: 'link' },
        { path: '/maps/leaflet', title: 'Leaflet Maps', type: 'link' }
      ]
    }
  ];
}
