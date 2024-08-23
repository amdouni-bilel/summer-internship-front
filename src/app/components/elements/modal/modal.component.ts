
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import * as codeData from '../../../shared/codeViewData/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],

})
export class ModalComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  BasicOpen(basicmodal) {
    this.modalService.open(basicmodal);
  }
  SmallOpen(smallmodal) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }
  LargeOpen(largemodal) {
    this.modalService.open(largemodal, { size: 'lg' });
  }
  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, { centered: true });
  }
  WarningOpen(warningmodal) {
    this.modalService.open(warningmodal, { centered: true });
  }

  effectScale(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSlideRight(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSlideBottom(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectNewspaper(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFall(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFlipHorizontal(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFlipVertical(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSuperScaled(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSign(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectRotateBottom(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectRotateLeft(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectJustMe(modaleffect) {
    this.modalService.open(modaleffect, { centered: true });
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


  html1 = codeData.modalHTML1;
  ts1 = codeData.modalTS1;
  html2 = codeData.modalHTML2;
  ts2 = codeData.modalTS2;
  html3 = codeData.modalHTML3;
  ts3 = codeData.modalTS3;
  html4 = codeData.modalHTML4;
  ts4 = codeData.modalTS4;
  html5 = codeData.modalHTML5;
  ts5 = codeData.modalTS5;
  html6 = codeData.modalHTML6;
  ts6 = codeData.modalTS6;
}