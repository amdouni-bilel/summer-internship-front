import {Component, ElementRef, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Menu, NavService} from '../../services/nav.service';
import {UsersService} from '../../../users/services/users.service';

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

  // For Horizontal Menu
  public margin: any = 0;
  public width: any = window.innerWidth;
  public user: any;
  adminUsers: any;
  fullNameUser: any;

  constructor(
    private router: Router,
    private navServices: NavService,
    public elementRef: ElementRef,
    private userService: UsersService
  ) {

    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      });
    });
  }

  // @HostListener('window: resize', ['$event'])
  // onResize(event) {
  //   this.width = event.target.innerWidth - 480;
  // }

  // Active NavBar State
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        document.querySelector('.sidebar-mini').classList.remove('sidenav-toggled');
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
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

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.fullNameUser = this.user.fullName;

    this.userService.getUsersWithRoles().subscribe(users => {
      this.adminUsers = users.filter(user => user.roles.includes('ADMIN'));
    });
  }

  hoverEffect($event): void {
    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }

}
