import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat1Component } from './chat1/chat1.component';
import { Chat2Component } from './chat2/chat2.component';
import { Chat3Component } from './chat3/chat3.component';
import { ChatRoutingModule } from './chat-routing.module';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {webSocket} from 'rxjs/webSocket';
import {HttpClientModule} from '@angular/common/http';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
@NgModule({
  declarations: [Chat1Component, Chat2Component, Chat3Component],
    imports: [
        CommonModule,
        ChatRoutingModule,
        NgbModule,
        FormsModule,
      HttpClientModule,  // Add this if you use HTTP requests
      NgbModalModule,
      PickerModule,

    ]
})
export class ChatModule { }
