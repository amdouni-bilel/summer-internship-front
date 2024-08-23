import {DOCUMENT} from '@angular/common';
import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import {Menu, NavService} from '../../services/nav.service';
import {ToastrService} from 'ngx-toastr';
import {HeaderService} from '../header.service';
import {UsersService} from '../../../users/services/users.service';
import {WebsocketService} from '../../../cra/services/websocket.service';
import {TokenService} from '../../../authentication/token.service';
import {Router} from '@angular/router';
import {AuthStateService} from '../../../authentication/auth-state.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  notifications: any[] = [];
  message = '';
  public menuItems: Menu[];
  public items: Menu [];
  public elem: any;
  idUser: any;
  fullname: any;
  users: any[] = [];
  userRole: string;
  private userId: number;

  constructor(
    public navServices: NavService,
    @Inject(DOCUMENT) private document: any,
    private toastr: ToastrService,
    private headerService: HeaderService,
    private userService: UsersService,
    private websocketService: WebsocketService,
    private tokenService: TokenService,
    private router: Router,
    private authStateService: AuthStateService
  ) {
  }


  toggleFullScreen(): void {
    this.navServices.fullScreen = !this.navServices.fullScreen;
    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  sidebarToggle(): void {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    this.navServices.megaMenu = false;
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      this.userId = parsedUser.id;
    }

    const user1 = localStorage.getItem('user');
    const parsedUser1 = user1 ? JSON.parse(user1) : null;
    if (parsedUser1) {
      this.idUser = parsedUser1.id;
      this.fullname = parsedUser1.fullName;
    }

    this.elem = document.documentElement;
    this.navServices.items.subscribe(menuItems => this.items = this.menuItems);
    this.grepNotifications();

    this.websocketService.getNotificationObservable().subscribe(
      notification => {
        const parsedNotification = JSON.parse(notification);
        if (parsedNotification && parsedNotification.message) {
          this.notifications.push(parsedNotification.message);
          this.grepNotifications();
        }
      }
    );
  }

  grepNotifications(): void {
    this.headerService.getNotifications(this.userId).subscribe(
      notifications => {
        this.notifications = notifications;
      }
    );
  }

  ngAfterViewInit(): void {
    const sidebar = document.querySelector('.app-sidebar');
    const messageMenu = document.querySelector('.message-menu');
    const notifyMenu = document.querySelector('.notify-menu');
    const ps = new PerfectScrollbar(sidebar, {wheelPropagation: false});
    const ps1 = new PerfectScrollbar(messageMenu, {wheelPropagation: false});
    const ps2 = new PerfectScrollbar(notifyMenu, {wheelPropagation: false});
  }

  searchAdd(): void {
    document.querySelector('body').classList.add('search-show');
  }

  searchRemove(): void {
    document.querySelector('body').classList.remove('search-show');
  }


  signOut(): void {
    this.authStateService.setAuthState(false);
    this.tokenService.removeToken();
    this.tokenService.removeUser();
  //  const user = this.users.find((u) => u.fullName === this.fullname);
   // user.isConnected = false;
    this.router.navigate(['auth/login']);
  }

  ajouterNotification(): void {
    const nouvelleNotification = {
      content: 'a ajouté un CRA ',
      timestamp: new Date(),
      idUser: this.idUser
    };

    this.headerService.addNotification(nouvelleNotification).subscribe(
      (response) => {
        this.notifications.unshift(response);
        this.toastr.success('CRA créé avec succès.', 'Success');
      },
      (error) => {
        this.toastr.error('Erreur lors de l\'ajout de la notification : ', error);
      }
    );
  }

  loadNotifications(): void {
    if (this.userRole && (this.userRole === 'ADMIN' || this.userRole === 'SUPER_ADMIN')) {

      this.headerService.getAllNotifications().subscribe(
        (data) => {
          this.notifications = data.filter((notification) =>
            (this.userRole === 'SUPER_ADMIN' || this.userRole === 'ADMIN') ? true : notification.idUser === this.idUser
          );
        }
      );
    }
  }

  getListUsers(): void {
    this.userService.getUsersWithRoles().subscribe(users => {
      this.users = users;
      const user = this.users.find((u) => u.id === this.idUser);
      this.userRole = user ? user.roles[0] : null;
      this.loadNotifications();
    });
  }

  getFullNameById(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.fullName : 'Utilisateur inconnu';
  }
}
