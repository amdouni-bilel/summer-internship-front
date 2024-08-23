import { Injectable, OnDestroy } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../users/services/users.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService implements OnDestroy {
  private apiUrl = environment.authApiUrl;
  private stompClient: Stomp.Client;
  private notificationSubject = new BehaviorSubject<string>(null);
  private socket: any;  // Changed from WebSocketSubject to generic SockJS type
  adminUserId: any;
  users: any;
  userId: any;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private userService: UsersService
  ) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    this.socket = new SockJS(`${this.apiUrl}/chat-websocket`);
    this.stompClient = Stomp.over(this.socket);
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`
    };

    this.stompClient.connect(headers, (frame) => {
      this.stompClient.subscribe('/topic/notif', (notification) => {
        this.notificationSubject.next(notification.body);
        this.handleNotification(notification.body);
      });
    }, (error) => {
      console.error('WebSocket connection error:', error);
      setTimeout(() => this.initializeWebSocketConnection(), 5000);  // Attempt to reconnect after 5 seconds
    });
  }

  envoyerMessageWebSocket(topic: string, message: string): void {
    const destination = `/topic/${topic}`;
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.send(destination, {}, JSON.stringify({ message }));
    } else {
      console.error('Unable to send message: WebSocket connection is not established.');
    }
  }

  getNotificationObservable(): Observable<string> {
    return this.notificationSubject.asObservable();
  }

  handleNotification(notification: string): void {
    const message = JSON.parse(notification).message;

    if (this.isNotificationForCurrentUser(notification)) {
      this.toastr.info(message, 'Notification');
    }
  }

  private isNotificationForCurrentUser(notification: string): boolean {
    const currentUserID = this.adminUserId;
    const notificationUserID = JSON.parse(notification).userId;

    return currentUserID === notificationUserID;
  }

  closeConnection(): void {
    if (this.stompClient) {
      this.stompClient.disconnect(() => {
        console.log('WebSocket connection closed.');
      });
    }
  }

  ngOnDestroy(): void {
    this.closeConnection();
  }
}
