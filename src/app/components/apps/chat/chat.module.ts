import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat1Component } from './chat1/chat1.component';
import { Chat2Component } from './chat2/chat2.component';
import { Chat3Component } from './chat3/chat3.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [Chat1Component, Chat2Component, Chat3Component],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgbModule
  ]
})
export class ChatModule { }
