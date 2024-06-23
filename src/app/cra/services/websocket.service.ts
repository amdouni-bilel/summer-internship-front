import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {WebSocketSubject} from 'rxjs/webSocket';
import {UsersService} from '../../users/services/users.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private apiUrl = environment.authApiUrl;

  private stompClient: Stomp.Client;
  private notificationSubject = new BehaviorSubject<string>(null);
  private socket$: WebSocketSubject<any>;
  adminUserId: any;
  users: any;
  userId: any;

  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private userService: UsersService
  ) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    const socket = new SockJS(`${this.apiUrl}/websocket`);
    this.stompClient = Stomp.over(socket);
    const token = localStorage.getItem('token');

    // Ajouter le token à l'en-tête d'autorisation
    const headers = {
      Authorization: `Bearer ${token}`
    };

    this.stompClient.connect(headers, (frame) => {
      this.stompClient.subscribe('/topic/notif', (notification) => {
        this.notificationSubject.next(notification.body);
        this.handleNotification(notification.body);
      });
    });
  }

  // Ajouter cette méthode pour envoyer un message au serveur WebSocket
  envoyerMessageWebSocket(topic: string, message: string): void {
    const destination = `/${topic}`;
    this.stompClient.send(destination, {}, JSON.stringify({message}));
  }

  getNotificationObservable(): Observable<string> {
    return this.notificationSubject.asObservable();
  }

  /* handleNotification(message: string): void {
        this.toastr.info(message, 'Notification');
   }*/

  handleNotification(notification: string): void {
    // Extrait le message du corps de la notification
    const message = JSON.parse(notification).message;

    // Vérifie si le message est destiné à l'utilisateur actuellement connecté
    if (this.isNotificationForCurrentUser(notification)) {
      this.toastr.info(message, 'Notification');
    }
  }

  private isNotificationForCurrentUser(notification: string): boolean {
    // Utilisez this.adminUserId comme ID de l'utilisateur actuellement connecté
    const currentUserID = this.adminUserId;
    const notificationUserID = JSON.parse(notification).userId;

    return currentUserID === notificationUserID;
  }

  closeConnection(): void {
    this.socket$.complete();
  }
}
