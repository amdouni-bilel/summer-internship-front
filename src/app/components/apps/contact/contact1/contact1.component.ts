import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact1Data } from 'src/app/shared/data/contact/contact1Data';

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.scss']
})
export class Contact1Component implements OnInit {

  public contactData = Contact1Data;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  addContactModel(addContactModal){
    this.modalService.open(addContactModal , { size: 'lg' });
  }
}
