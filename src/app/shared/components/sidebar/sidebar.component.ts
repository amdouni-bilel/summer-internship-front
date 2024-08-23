import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu, NavService } from '../../services/nav.service';
import { UsersService } from '../../../users/services/users.service';
import { AuthService } from 'src/app/authentication/auth.service';

declare let $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: Menu[];
  public url: any;
  sidenavtoggled1: any;
  public user: any;
  fullNameUser: any;
  isAdmin = false;
  public users: any[] = [];  // Add this line

  constructor(
    private router: Router,
    private navServices: NavService,
    public elementRef: ElementRef,
    private userService: UsersService,
    private authService: AuthService
  ) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setNavActive(event.url);
        }
      });
    });
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.fullNameUser = this.user.fullName;
    this.isAdmin = this.user.roles.includes('ADMIN');
    this.menuItems = this.menuItems.filter(item => {
      if (this.isAdmin) {
        return true;
      } else {
        return item.roles && item.roles.includes('USER');
      }
    });
    this.userService.getUsers().subscribe((users: any[]) => {  // Fetch users
      this.users = users.filter(u => u.fullName !== this.fullNameUser);  // Filter out authenticated user
    });
  }

  // tslint:disable-next-line:typedef
  setNavActive(url) {
    this.menuItems.filter(menuItem => {
      if (menuItem.path === url) {
        this.activateMenuItem(menuItem);
      }
      if (!menuItem.children) {
        return false;
      }
      menuItem.children.filter(subItems => {
        if (subItems.path === url) {
          this.activateMenuItem(subItems);
        }
        if (!subItems.children) {
          return false;
        }
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === url) {
            this.activateMenuItem(subSubItems);
          }
        });
      });
    });
  }

  // tslint:disable-next-line:typedef
  activateMenuItem(item) {
    this.menuItems.forEach(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        document.querySelector('.sidebar-mini').classList.remove('sidenav-toggled');
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.forEach(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  toggleNavActive(item): void {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }

  hoverEffect($event): void {
    this.sidenavtoggled1 = $event.type === 'mouseover' ? 'sidenav-toggled1' : '';
  }
}
