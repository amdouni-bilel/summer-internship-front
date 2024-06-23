/*
import { InjectableRxStompConfig } from "@stomp/ng2-stompjs";

export const myRxStompConfig: InjectableRxStompConfig = {
  brokerURL: 'ws://localhost:8887/websocket',

  connectHeaders: {
    login: '',
    passcode: ''
  },

  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 1000,

  // Ajoutez la fonction beforeConnect pour ajouter le token aux en-têtes de connexion
  beforeConnect: (client: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      client._connectCallback = (frame: any) => {
        // Ajoutez le token aux en-têtes de la connexion
        client.ws._transport.url = client.ws._transport.url + `?access_token=${token}`;
        client.connected(frame);
      };
    }
  },

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
*/
