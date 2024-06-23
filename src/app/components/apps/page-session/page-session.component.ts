import { viewClassName } from '@angular/compiler';
import { Component, OnInit, AfterViewInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-session',
  templateUrl: './page-session.component.html',
  styleUrls: ['./page-session.component.scss']
})
export class PageSessionComponent implements OnInit, AfterViewInit {

  @ViewChild('sessionModal') sessionModal;

  value = 10;
  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.closeModal();
    }, 10000);

    setInterval(() => {
      if (this.value <= 100) {
        this.value += 10;
      }
    }, 1000);
  }

  ngAfterViewInit() {
    this.openModal();
  }

  openModal() {
    this.modalService.open(this.sessionModal, { centered: true });
  }
  closeModal() {
    this.modalService.dismissAll(this.sessionModal)
  }

  logout() {
    this.router.navigateByUrl('/auth/login');
    this.closeModal();
  }

}
