export let timepickerHTML1 = 
`<ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
<hr>
<span class="d-block">Selected time: {{time | json}}</span>`
export let timepickerTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  //basic Timpicker
  time = {hour: 13, minute: 30};
  
  constructor() { }

  ngOnInit(): void {
  }
}`
export let timepickerHTML2 = 
`<ngb-timepicker [(ngModel)]="mtime" [meridian]="meridian"></ngb-timepicker>
<br>
<button class="btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}" (click)="toggleMeridian()">
    Meridian - {{meridian ? "ON" : "OFF"}}
</button>
<hr>
<span class="d-block">Selected time: {{time | json}}</span>`
export let timepickerTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  //basic Timpicker
  mtime = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit(): void {
  }

  //Meridian Timepicker
  meridian = true;
  toggleMeridian() {
      this.meridian = !this.meridian;
  }

}
`
export let timepickerHTML3 = 
`<ngb-timepicker [(ngModel)]="stime" [seconds]="seconds"></ngb-timepicker>
<br>
<button class="btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}" (click)="toggleSeconds()">
    Seconds - {{seconds ? "ON" : "OFF"}}
</button>
<hr>
<span class="d-block">Selected time: {{time | json}}</span>`
export let timepickerTS3 = 
`import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //second Timepicker
  stime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  toggleSeconds() {
    this.seconds = !this.seconds;
  }
}
`
export let timepickerHTML4 = 
`<ngb-timepicker [(ngModel)]="spinnertime" [spinners]="spinners"></ngb-timepicker>
<br>
<button class="m-t-1 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}"
    (click)="toggleSpinners()">
    Spinners - {{spinners ? "ON" : "OFF"}}
</button>
<hr />
<span class="d-block">Selected time: {{time | json}}</span>`
export let timepickerTS4 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //spinner Timepicker
  spinnertime = {hour: 13, minute: 30};
  spinners = true;

  toggleSpinners() {
      this.spinners = !this.spinners;
  }

}
`