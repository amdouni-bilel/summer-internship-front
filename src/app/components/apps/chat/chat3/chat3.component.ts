import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Chat3Data } from 'src/app/shared/data/chat/chat3';

@Component({
  selector: 'app-chat3',
  templateUrl: './chat3.component.html',
  styleUrls: ['./chat3.component.scss']
})
export class Chat3Component implements OnInit {

  public chatData = Chat3Data;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  ChatOpen(messagemodal){
    this.modalService.open(messagemodal);
  }

}
