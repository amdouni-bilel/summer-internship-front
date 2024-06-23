import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  private readonly notifier: NotifierService;

 
  constructor( notifierService: NotifierService ) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
  }

  OnDefault(){
    this.notifier.notify("default","Good evening, you lovely person!");
  }
  OnInfo(){
    this.notifier.notify("info","This library is built on top of Angular 2.");
  }
  OnSuccess(){
    this.notifier.notify("success","Notification successfully opened.");
  }
  OnWarning(){
    this.notifier.notify("warning","Warning! But not an error! Just a warning!");
  }
  OnError(){
    this.notifier.notify("error","Whoops, something went wrong. Probably.");
  }
}
