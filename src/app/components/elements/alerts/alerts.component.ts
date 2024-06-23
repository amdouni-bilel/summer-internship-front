import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/alerts'

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  public isInfo = false;
  public isSuccess = false;
  public isWarning = false;
  public isError = false;
  public closed = false;
  alertSuccess = true;
  alertInfo = true;
  alertWarning = true;
  alertDanger = true;

  alertLinkSuccess = true;
  alertLinkInfo = true;
  alertLinkWarning = true;
  alertLinkDanger = true;

  alertStyleSuccess = true;
  alertStyleInfo = true;
  alertStyleWarning = true;
  alertStyleDanger = true;

  alertIconSuccess = true;
  alertIconInfo = true;
  alertIconWarning = true;
  alertIconDanger = true;

  constructor() { }

  ngOnInit(): void {
  }

  info() {
    this.isInfo = !this.isInfo;
    this.isSuccess = false;
    this.isWarning = false;
    this.isError = false;
    if (this.isInfo == true) {
      document.querySelector('.tab-pane').classList.add('active');
    }
    else {
      document.querySelector('.tab-pane').classList.remove('active');
    }

  }
  success() {
    this.isSuccess = !this.isSuccess;
    this.isInfo = false;
    this.isWarning = false;
    this.isError = false;
    if (this.isSuccess == true)
      document.querySelector('.tab-pane').classList.add('active');
    else
      document.querySelector('.tab-pane').classList.remove('active');
  }
  warning() {
    this.isWarning = !this.isWarning;
    this.isInfo = false;
    this.isSuccess = false;
    this.isError = false;
    if (this.isWarning == true)
      document.querySelector('.tab-pane').classList.add('active');
    else
      document.querySelector('.tab-pane').classList.remove('active');
  }
  error() {
    this.isError = !this.isError;
    this.isInfo = false;
    this.isSuccess = false;
    this.isWarning = false;
    if (this.isError == true)
      document.querySelector('.tab-pane').classList.add('active');
    else
      document.querySelector('.tab-pane').classList.remove('active');
  }

  html1 = codeData.alertHTML1;
  ts1 = codeData.alertTS1;
  html2 = codeData.alertHTML2;
  ts2 = codeData.alertTS2;
  html3 = codeData.alertHTML3;
  ts3 = codeData.alertTS3;
  html4 = codeData.alertHTML4;
  ts4 = codeData.alertTS4;
  html5 = codeData.alertHTML5;
  ts5 = codeData.alertTS5;
  html6 = codeData.alertHTML6;
  ts6 = codeData.alertTS6;
  html7 = codeData.alertHTML7;
  ts7 = codeData.alertTS7;
  html8 = codeData.alertHTML8;
  ts8 = codeData.alertTS8;
}
