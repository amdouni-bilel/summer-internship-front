import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild, ChangeDetectorRef, TemplateRef} from '@angular/core';
import { UserView } from '../../../../auth/models/user-view';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../../../users/services/users.service';
import { AuthService } from '../../../../authentication/auth.service';
import { ChatService } from './chat.service';
import { WebSocketService } from './WebSocketService';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-chat3',
  templateUrl: './chat3.component.html',
  styleUrls: ['./chat3.component.scss']
})
export class Chat3Component implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer: ElementRef;
  chatData1: UserView[] = [];
  messages: any[] = [];
  newMessage = '';
  currentUser: any;
  selectedUser: UserView;
  showEmojiPicker = false;
  isTyping = false;
  unreadMessages: { [username: string]: number } = {}; // Nombre de messages non vus

  constructor(
    private modalService: NgbModal,
    private usersService: UsersService,
    private authService: AuthService,
    private chatService: ChatService,
    private websocketservice: WebSocketService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUserFromLocalStorage();
    if (this.currentUser) {
      this.loadUsers();
      this.startPollingMessages();
      this.listenForTyping();
    }
    this.listenForMessages();
  }
  // tslint:disable-next-line:typedef
  ChatOpen(content: TemplateRef<any>, user: any) {
    this.selectedUser = user;
    this.loadMessages(user.username);
    this.modalService.open(content, { size: 'lg' });
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Failed to scroll to bottom', err);
    }
  }

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: EmojiEvent): void {
    const emoji = event.emoji.native;
    this.newMessage += emoji;
  }

  listenForMessages(): void {
    this.chatService.onMessage(this.currentUser.username).subscribe(message => {
      if (this.selectedUser &&
        ((message.sender === this.selectedUser.username && message.recipient === this.currentUser.username) ||
          (message.sender === this.currentUser.username && message.recipient === this.selectedUser.username))) {

        this.messages.push(message);
        this.scrollToBottom();
      }
    });
  }

  listenForTyping(): void {
    this.chatService.onTyping(this.currentUser.username).subscribe(isTyping => {
      this.isTyping = isTyping;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  loadUsers(): void {
    this.usersService.getUsers().subscribe((data: UserView[]) => {
      if (this.currentUser) {
        this.chatData1 = data.filter(user => user.username !== this.currentUser.username);
      }
    });
  }

  loadMessages(isPolling: boolean = false): void {
    if (this.selectedUser) {
      this.chatService.getMessageHistory(this.selectedUser.username, this.currentUser.username).subscribe(
        (data: any[]) => {
          if (isPolling) {
            const newMessages = data.filter(msg =>
              !this.messages.some(existingMsg => existingMsg.id === msg.id)
            );
            this.messages.push(...newMessages);
          } else {
              this.messages = data.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
          }
          this.scrollToBottom();
        },
        error => {
          console.error('Error loading message history', error);
        }
      );
    }
  }

  startPollingMessages(): void {
    setInterval(() => {
      this.loadMessages(true);
    }, 5000); // Poll every 5 seconds
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message = {
        sender: this.currentUser.username,
        recipient: this.selectedUser.username,
        content: this.newMessage.trim(),
        timestamp: new Date().toISOString()
      };

      this.chatService.sendMessage(message, this.selectedUser.username).subscribe(() => {
        this.newMessage = '';
        this.scrollToBottom();
        this.chatService.broadcastMessage(message); // Broadcast the message to other connected users
      });
    }
  }

  handleUserClick(user: UserView): void {
    this.selectedUser = user;
    this.messages = [];
    this.loadMessages();
  }

  handleTyping(event: any): void {
    const isTyping = event.target.value.length > 0;
    this.chatService.notifyTyping(isTyping, this.selectedUser.username);
  }
}
