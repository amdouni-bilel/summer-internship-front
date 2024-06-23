import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as codeData from '../../../shared/codeViewData/timepicker'


@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  //basic Timpicker
  time = {hour: 13, minute: 30};
  mtime = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit(): void {
  }

  //Meridian Timepicker
  meridian = true;
  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  //second Timepicker
  stime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  //spinner Timepicker
  spinnertime = {hour: 13, minute: 30};
  spinners = true;

  toggleSpinners() {
      this.spinners = !this.spinners;
  }


  html1 = codeData.timepickerHTML1;
  ts1 = codeData.timepickerTS1;
  html2 = codeData.timepickerHTML2;
  ts2 = codeData.timepickerTS2;
  html3 = codeData.timepickerHTML3;
  ts3 = codeData.timepickerTS3;
  html4 = codeData.timepickerHTML4;
  ts4 = codeData.timepickerTS4;
}
