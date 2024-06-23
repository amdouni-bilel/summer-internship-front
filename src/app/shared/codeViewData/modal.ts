export let modalHTML1 = 
`<button class="btn btn-primary" (click)="BasicOpen(basicmodal)">View Live Demo</button>
<ng-template #basicmodal let-modal>
    <!-- BASIC MODAL -->
    <div class="modal-header">
        <h6 class="modal-title" id="modal-basic-title">Message Preview</h6>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here', making it look like
            readable English.</p>
    </div>
    <div class="modal-footer">
        <button class="btn btn-indigo" type="button">Save changes</button>
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
    </div>
</ng-template>`
export let modalTS1 = 
`import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  BasicOpen(basicmodal) {
    this.modalService.open(basicmodal);
  }
}`
export let modalHTML2 = 
`<button class="btn btn-primary" (click)="SmallOpen(smallmodal)">View Live Demo</button>
<ng-template #smallmodal let-modal>
    <!-- SMALL MODAL -->
    <div class="modal-header">
        <h6 class="modal-title">Message Preview</h6>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.</p>
    </div>
    <div class="modal-footer justify-content-center">
        <button class="btn btn-indigo" type="button">Save changes</button>
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
    </div>
</ng-template>`
export let modalTS2 = 
`import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  SmallOpen(smallmodal) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }
}`
export let modalHTML3 = 
`<button class="btn btn-primary" (click)="LargeOpen(largemodal)">View Live Demo</button>
<ng-template #largemodal let-modal>
    <!-- LARGE MODAL -->
    <div class="modal-header">
        <h6 class="modal-title">Message Preview</h6>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here', making it look like
            readable English.</p>
    </div>
    <div class="modal-footer">
        <button class="btn btn-indigo" type="button">Save changes</button>
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
    </div>
</ng-template>`
export let modalTS3 = 
`import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  LargeOpen(largemodal) {
    this.modalService.open(largemodal, { size: 'lg' });
  }
}`
export let modalHTML4 = 
`<button class="btn btn-primary" (click)="SuccessOpen(successmodal)">View Live Demo</button>
<ng-template #successmodal let-modal>
    <!-- Congratulations MODAL -->
    <div class="modal-body text-center p-4">
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
        <i class="fe fe-check-circle fs-100 text-success lh-1 mb-5 d-inline-block"></i>
        <h4 class="text-success tx-semibold">Congratulations!</h4>
        <p class="mg-b-20 mg-x-20">There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration.
        </p>
        <button type="button" class="btn btn-success pd-x-25 mr-0"
            (click)="modal.close('Close click')">Continue</button>
    </div>
</ng-template>`
export let modalTS4 = 
`import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, { centered: true });
  }
}`
export let modalHTML5 = 
`<button class="btn btn-primary" (click)="WarningOpen(warningmodal)">View Live Demo</button>
<ng-template #warningmodal let-modal>
    <!-- Warning MODAL -->
    <div class="modal-body text-center p-4">
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
        <i class="fe fe-x-circle fs-100 text-danger lh-1 mb-5 d-inline-block"></i>
        <h4 class="text-success tx-semibold">Congratulations!</h4>
        <h4 class="text-danger">Error: Cannot process your entry!</h4>
        <p class="mg-b-20 mg-x-20">There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration.
        </p>
        <button type="button" class="btn btn-danger pd-x-25 mr-0" (click)="modal.close('Close click')">Continue</button>
    </div>
</ng-template>`
export let modalTS5 = 
`import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
   WarningOpen(warningmodal) {
    this.modalService.open(warningmodal, { centered: true });
  }
}`
export let modalHTML6 = 
`button type="button" class="btn btn-primary mt-3" (click)="SmallSizeOpen(smallsizemodal)">Small Modal</button>
<button type="button" class="btn btn-secondary mt-3" (click)="DefaultSizeOpen(defaultsizemodal)">Default Modal</button>
<button type="button" class="btn btn-info mt-3" (click)="LargeSizeOpen(largesizemodal)">large Modal</button>

<ng-template #smallsizemodal let-modal>
    <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
        <button type="button" class="btn btn-indigo" >Save changes</button>
    </div>
</ng-template>

<ng-template #defaultsizemodal let-modal>
    <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
        <button type="button" class="btn btn-indigo" >Save changes</button>
    </div>
</ng-template>

<ng-template #largesizemodal let-modal>
    <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>
        <button type="button" class="btn btn-indigo" >Save changes</button>
    </div>
</ng-template>`
export let modalTS6 = 
`import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  SmallSizeOpen(smallsizemodal) {
    this.modalService.open(smallsizemodal, { size: 'sm' });
  }
  DefaultSizeOpen(defaultsizemodal) {
    this.modalService.open(defaultsizemodal);
  }
  LargeSizeOpen(largesizemodal) {
    this.modalService.open(largesizemodal, { size: 'lg' });
  }
}`