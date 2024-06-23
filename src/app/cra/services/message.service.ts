/*
// message.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {WebSocketService3} from "./websocket3.service";
//import {WebSocketService3} from "./websocket3.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private websocketService: WebSocketService3) {}

  connectWebSocket(): Observable<any> {
    return this.websocketService.connect();
  }

  subscribeAllMessages(): Observable<any> {
    return this.websocketService.subscribeAllMessages();
  }

  subscribePrivateMessages(): Observable<any> {
    return this.websocketService.subscribePrivateMessages();
  }

  sendApplicationMessage(message: any): void {
    this.websocketService.sendMessage('/app/application', message);
  }

  sendPrivateMessage(message: any): void {
    this.websocketService.sendMessage('/app/private', message);
  }
}
*/
