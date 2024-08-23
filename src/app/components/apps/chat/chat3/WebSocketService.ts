import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private serverUrl = 'http://localhost:9001/chat-websocket';
  private stompClient: Stomp.Client;

  constructor() {
    this.connect();
  }

  private connect(): void {
    const socket = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, frame => {
      console.log('Connected: ' + frame);

      // Subscribe to the public topic
      this.stompClient.subscribe('/topic/public', message => {
        console.log('Received message: ' + message.body);
      });
    }, error => {
      console.log('Error connecting: ' + error);
    });
  }

  public sendMessage(message: any): void {
    this.stompClient.send('/app/sendMessage', {}, JSON.stringify(message));
  }
}
