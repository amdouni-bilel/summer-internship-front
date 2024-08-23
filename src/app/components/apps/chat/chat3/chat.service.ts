import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: Stomp.Client;
  private messageSubject = new BehaviorSubject<any>(null);
  private typingSubject = new BehaviorSubject<boolean>(false); // Added for typing indicator

  private connected: boolean;
  private chatUrl = `http://localhost:9001/api/chat`;  // REST API base URL
  private apiUrl = `http://localhost:9001/api`;  // REST API base URL

  constructor(private http: HttpClient) {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection(): void {
    const socket = new SockJS(`${this.chatUrl}-websocket`);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, frame => {
      this.connected = true;
      console.log('Connected: ' + frame);
    });
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const socket = new SockJS(`${this.chatUrl}-websocket`);
      this.stompClient = Stomp.over(socket);

      this.stompClient.connect({}, frame => {
        this.connected = true;
        resolve();
      }, error => {
        this.connected = false;
        reject(error);
      });
    });
  }

  // Existing message history and sending methods...

  notifyTyping(isTyping: boolean, recipient: string): void {
    if (this.connected) {
      const typingMessage = { isTyping, sender: recipient };
      this.stompClient.send('/app/chat.typing', {}, JSON.stringify(typingMessage));
    } else {
      console.error('WebSocket is not connected.');
    }
  }
  onMessage(username: string): Observable<any> {
    return new Observable(observer => {
      if (this.connected) {
        const topic = `/queue/messages/${username}`;
        this.stompClient.subscribe(topic, (message: any) => {
          observer.next(JSON.parse(message.body));
        });
      } else {
        console.error('WebSocket is not connected.');
      }
    });
  }
  getMessageHistory(userId: string, currentUser: string): Observable<any[]> {
    const params = new HttpParams().set('currentUser', currentUser);
    return this.http.get<any[]>(`${this.apiUrl}/messages/history/${userId}`, { params });
  }
  onTyping(recipient: string): Observable<boolean> {
    return new Observable(observer => {
      if (this.connected) {
        const topic = `/queue/typing/${recipient}`;
        this.stompClient.subscribe(topic, (message: any) => {
          observer.next(JSON.parse(message.body).isTyping);
        });
      } else {
        console.error('WebSocket is not connected.');
      }
    });
  }

  sendMessage(message: any, recipient: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/messages/send/${recipient}`, message);
  }
  broadcastMessage(message: any): void {
    if (this.connected) {
      this.stompClient.send('/app/chat.broadcast', {}, JSON.stringify(message));
    } else {
      console.error('WebSocket is not connected.');
    }
  }

}
