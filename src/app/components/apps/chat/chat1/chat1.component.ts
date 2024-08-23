import { AfterViewInit, Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { UsersService } from 'src/app/users/services/users.service';
import { UserView } from 'src/app/auth/models/user-view';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit, AfterViewInit {
  users: UserView[] = [];
  fullNameUser: string;

  constructor(
    private userService: UsersService,
    private authService: AuthService  // Ajout du service d'authentification
  ) {}

  ngOnInit(): void {
    // Récupérer l'utilisateur authentifié depuis le localStorage ou le service d'authentification
    const user = JSON.parse(localStorage.getItem('user'));  // Vous pouvez aussi utiliser un service pour ça
    this.fullNameUser = user?.fullName;
    this.userService.getUsers().subscribe((data: UserView[]) => {
      // tslint:disable-next-line:no-shadowed-variable
      this.users = data.map(user => ({
        ...user,
        isConnected: !!user.isConnected // Convert 1/0 to true/false
      }));
      console.log(this.users);
    });    // Récupérer tous les utilisateurs et filtrer l'utilisateur authentifié
    this.userService.getUsers().subscribe((data: UserView[]) => {
      this.users = data.filter(u => u.fullName !== this.fullNameUser);
    });
  }

  // tslint:disable-next-line:typedef
  callUser(user: UserView) {
    console.log('Calling', user.fullName);
    // Implémenter la fonctionnalité d'appel
  }

  // tslint:disable-next-line:typedef
  videoCallUser(user: UserView) {
    console.log('Video calling', user.fullName);
    // Implémenter la fonctionnalité d'appel vidéo
  }

  // tslint:disable-next-line:typedef
  sendMessage(user: UserView) {
    console.log('Sending message to', user.fullName);
    // Implémenter la fonctionnalité de messagerie
  }

  ngAfterViewInit(): void {
    const scroll1 = document.getElementById('ChatList1');
    const scroll3 = document.querySelector('#ChatBody');

    if (scroll1) {
      const ps = new PerfectScrollbar(scroll1, {
        useBothWheelAxes: false,
        suppressScrollX: false,
      });
    }

    if (scroll3) {
      const ps2 = new PerfectScrollbar(scroll3, {
        useBothWheelAxes: false,
        suppressScrollX: false,
      });
    }
  }

  getUserStatusColor(user: UserView): string {
    return user.isConnected ? 'green' : 'red';
  }
}
