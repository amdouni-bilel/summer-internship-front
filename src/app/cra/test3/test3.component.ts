// import {Component, OnInit} from '@angular/core';
// import {CraService} from "../cra.services";
// import {DomSanitizer, Title} from "@angular/platform-browser";
// // @ts-ignore
// import SockJS from 'sockjs-client';
//
// import Stomp from 'stompjs';
// import {$} from "jquery";
// import {WebsocketService} from "../services/websocket.service";
// import { WebSocketSubject } from 'rxjs/webSocket';
//
// @Component({
//   selector: 'app-test3',
//   templateUrl: './test3.component.html',
//   styleUrls: ['./test3.component.scss']
// })
// export class Test3Component implements OnInit {
//   private webSocket: WebSocketSubject<any>;
//
//   notification: string;
//    test: any;
//   notifications: string[] = [];
//    userId: any;
//   constructor(private websocketService: WebsocketService,
//               private craService: CraService,) {}
//
//   ngOnInit() {
//     const user = localStorage.getItem('user');
//     const parsedUser = user ? JSON.parse(user) : null;
//     if (parsedUser) {
//       this.userId = parsedUser.id;
//       console.log(this.userId, 'id user');
//       console.log(user);
//     } else {
//       console.error('L\'utilisateur n\'est pas défini dans le local storage ou ne peut pas être analysé.');
//     }
//
//
//     const userId = this.userId //... récupérez l'ID de l'utilisateur connecté
//  /*     this.webSocket = new WebSocketSubject<any>(`ws://localhost:9001/ws/notification/${userId}`);
//
//     this.webSocket.subscribe(
//       (message) => {
//         // Traitez le message reçu ici, par exemple, mettez à jour une variable pour afficher dans le HTML
//         console.log('Notification reçue:', message);
//       },
//       (error) => console.error('Erreur WebSocket:', error)
//     );*/
//
//     this.websocketService.getNotificationSubject().subscribe((notification) => {
//       this.notification = notification;
//     });
//
//     this.craService.notification$.subscribe(notification => {
//       console.log('Notification reçue :', notification);
//       this.notifications.push(notification);  // Ajoutez la notification au tableau
//     });
//
//   //  this.envoyerMessage()
//
//   }
//
//
//
//   envoyerMessage() {
//     this.websocketService.envoyerMessageWebSocket('topic/notif', 'Contenu du message');
//   }
//
//
//
//   senderUserId: number;
//   recipientUserId: number;
//   message: string = '';
// /*  sendNotification(): void {
//     this.craService.sendNotification(this.senderUserId, this.recipientUserId, this.message).subscribe(
//       response =>
//         console.log('Notification envoyée : ' + response),
//       error =>
//         console.error('Erreur lors de l\'envoi de la notification :', error)
//     );
//     this.websocketService.envoyerMessageWebSocket('topic/notif', 'Notification recu');
//
//   }*/
//
//   // Modifiez votre méthode sendNotification pour ne pas envoyer manuellement un message WebSocket
//   sendNotification(): void {
//     this.craService.sendNotification(this.senderUserId, this.recipientUserId, this.message).subscribe(
//       response =>
//         console.log('Notification envoyée a : ' +this.recipientUserId +  response),
//       error =>
//         console.error('Erreur lors de l\'envoi de la notification :', error)
//     );
//   //  this.websocketService.envoyerMessageWebSocket('topic/notif', 'Notification recu');
//
//   }
//
//
//   loginUser(): void {
//     this.craService.loginUser(this.senderUserId).subscribe(
//       response => alert('Connexion réussie : ' + response),
//       error => alert('Erreur lors de la connexion : ' + error.message)
//     );
//   }
//
//  /* public message: string = '';
//   public privateMessage: string = '';
//   messages: string[] = [];
//   messageToSend: string = '';
//   notifications: any[] = [];
//
//   url = 'http://localhost:8887/websocket'
//   client: any;
//   greeting: any;
//
//   ngOnInit() {
//     this.title.setTitle('Angular Spring Websocket');
//   }
//
//   constructor(private title: Title , private websocketService : WebsocketService){
//     this.connection();
//   }
//   connection()    {
//     let ws = new SockJS(this.url);
//     this.client = Stomp.over(ws);
//     let that = this;
//
//     this.client.connect({}, function(frame) {
//       that.client.subscribe("/topic/greeting", function(message) {
//         if (message.body) {
//           this.greeting = message.body;
//           //$(".msg").append(that.greeting)
//           $(".msg").html(this.greeting);
//           alert(this.greeting);
//           console.log(this.greeting);
//         }
//       });
//     });
//     // Ajoutez la souscription à /topic/notification
//     that.client.subscribe("/topic/notification", function(message) {
//       if (message.body) {
//         const notification = message.body;
//         // Traitez la notification comme vous le souhaitez (affichage en temps réel, etc.)
//         console.log('Notification reçue:', notification);
//       }
//     });
//
//
//   }
//
//
//   sendNotification() {
//     const notification = 'Notification envoyée avec succès';
//     this.websocketService.sendNotification(notification).subscribe(response => {
//       console.log('Notification envoyée avec succès au serveur.');
//     });
//   }*/
//
//   /*  connection(){
//       let ws = new SockJS(this.url);
//       this.client = Stomp.over(ws);
//       let that: any = this;
//
//       this.client.connect({}, function(frame: any) {
//         that.client.subscribe("/topic/greeting", (message: any) => {
//           if(message.body) {
//             $(".msg").html(message.body)
//           }
//         });
//       });
//     }*/
//
//   /*  connection() {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error("Pas de token disponible pour la connexion WebSocket.");
//         return;
//       }
//       let ws = new SockJS(this.url);
//       this.client = Stomp.over(ws);
//       // Ajoutez le token à l'en-tête de la connexion
//       const headers = {
//         Authorization: `Bearer ${token}`
//       };
//       let that: any = this;
//       this.client.connect(headers, function (frame: any) {
//         that.client.subscribe("/topic/notification", (message: any) => {
//           if (message.body) {
//             $(".msg").html(message.body);
//           }
//         });
//       });
//     }*/
//
//
//
//
// /*  sendMessage(): void {
//     if (this.messageToSend.trim() !== '') {
//       this.webSocketService.sendMessage({ message: this.messageToSend, user: 'utilisateur' });
//       this.messageToSend = '';
//     }
//
// }*/
//
//
// }
//   /*
//
//   /!*
//   datasfromback: any[] = [];
//   public missions = [];
//   selectedMission: any;
//   id_user: any;
//   lignes: any[] = [];
//   public activitesForm: FormGroup;
//
//
//   url = 'http://localhost:8080/websocket'
//   client: any;
//   constructor(private craService: CraService,
//               private sanitizer: DomSanitizer,
//               private formBuilder: FormBuilder,
//               private missionService: MissionControllerService,
//               private toastr: ToastrService,
//               private router: Router,
//               private title: Title) {
//     this.activitesForm = this.formBuilder.group({
//       lignes: this.formBuilder.array([]),
//     });
//   }
//
//
//   ngOnInit() {
//     this.title.setTitle('Angular Spring Websocket');
//     this.connection();
//
//     /!*console.log(this.selectedMission, 'missssss')
//     this.getAllMyMissions();
//
//     const user = localStorage.getItem('user');
//     const parsedUser = user ? JSON.parse(user) : null;
//     if (parsedUser) {
//       this.id_user = parsedUser.id;
//       console.log(this.id_user, 'id user');
//       console.log(user);
//     } else {
//       console.error('L\'utilisateur n\'est pas défini dans le local storage ou ne peut pas être analysé.');
//     }
//
//     this.craService.configuredMonth().subscribe(
//       (data) => {
//         this.datasfromback = data;
//         console.log(this.datasfromback)
//         this.ajouterLigneAvecDatasfromback();
//       },
//       (error) => {
//         console.error('Erreur lors de la récupération des données du mois :', error);
//       }
//     );*!/
//   }
//
// /!*  connection(){
//     let ws = new SockJS(this.url);
//     this.client = Stomp.over(ws);
//     let that: any = this;
//
//     this.client.connect({}, function(frame: any) {
//       that.client.subscribe("/topic/greeting", (message: any) => {
//         if(message.body) {
//           $(".msg").html(message.body)
//         }
//       });
//     });
//   }*!/
//
//   connection(){
//     let ws = new SockJS(this.url);
//     this.client = Stomp.over(ws);
//     let that = this;
//
//     this.client.connect({}, function(frame) {
//       that.client.subscribe("/topic/greeting", (message) => {
//         if(message.body) {
//           this.greeting = message.body;
//           //$(".msg").append(this.greeting)
//           $(".msg").html(this.greeting)
//           alert(this.greeting);
//           console.log(this.greeting);
//         }
//       });
//     });
//   }
//
//
//   /!* afficherDates() {
//      const datesSaisies = this.datasfromback
//        .filter(jour => jour.inputValue !== undefined)
//        .map(jour => ({
//          //days: jour.today,
//         // inputValue: jour.inputValue,
//          idWorkedDay: Number(jour.today.split('-')[2]),
//          mission: this.selectedMission ,// Ajoutez l'ID de la mission ici
//          idUser:  this.id_user
//        }));
//      console.log(datesSaisies  , "les dates saisie");
//      console.log(datesSaisies.length);
//
//
//      this.craService.ajouterActivites(datesSaisies).subscribe(
//        (response) => {
//          console.log('Activités ajoutées avec succès', response);
//        },
//        (error) => {
//          console.error('Erreur lors de l\'ajout des activités', error);
//        }
//      );
//    }*!/
//
//   afficherDates() {
//     const datesSaisies = this.datasfromback.filter(jour => jour.inputValue !== undefined && jour.inputValue.trim() !== "")
//       .map(jour => ({
//         days: jour.today,
//         // inputValue: jour.inputValue,
//         idWorkedDay: Number(jour.today.split('-')[2]),
//         mission: this.selectedMission,
//         idUser: this.id_user
//       }));
//
//     if (datesSaisies.length > 0) {
//       console.log(datesSaisies, "les dates saisies");
//       console.log(datesSaisies.length);
//
//       // Envoyer à l'API uniquement si des valeurs sont présentes
//       this.craService.ajouterActivites(datesSaisies).subscribe(
//         (response) => {
//           this.toastr.success("Total Days updated.", "Success");
//           this.router.navigate(["mission/mes-missions"]);
//           console.log('Activités ajoutées avec succès', response);
//         },
//         (error) => {
//           this.toastr.error("Total Days not updated.", "Erreur");
//           console.error('Erreur lors de l\'ajout des activités', error);
//         }
//       );
//
//     } else {
//       console.warn('Aucune valeur saisie à ajouter.');
//     }
//   }
//
//   getAllMyMissions() {
//     this.missionService.getMissions().subscribe(res => {
//       this.missions = res;
//       this.missions = res.filter(mission => mission.isForMe === true);
//       console.log(this.missions, 'missions list')
//       this.craService.getInactiveDays().subscribe(res => {
//         res.forEach(r => {
//           this.addConge(r.name, r.id);
//         })
//
//       });
//     });
//   }
//
//   addConge(conge: string, id: string) {
//     let conges = {
//       name: conge,
//       id: id
//     };
//     this.missions.push(conges);
//   }
//
//   ajouterLigneAvecDatasfromback() {
//     // Ajoutez une nouvelle ligne avec les données de datasfromback
//     const nouvelleLigne = {
//       inputValue: '',  // Vous pouvez mettre une valeur par défaut ou laisser vide selon vos besoins
//       selectedMission: null,  // Vous pouvez également initialiser la mission par défaut
//       datasfromback: [...this.datasfromback]  // Utilisez le spread operator pour copier les valeurs
//     };
//     this.lignes.push(nouvelleLigne);
//   }
//
//
// }
// */
