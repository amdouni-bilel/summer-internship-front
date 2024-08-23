export let datepickerHTML1 = 
`<div class="col-6">
<h6>Simple Popup</h6>
<form class="form-inline">
    <div class="form-group">
        <div class="input-group">
            <input class="form-control" placeholder="dd/mm/yyyy" name="d2" #c2="ngModel"
                [(ngModel)]="model2" ngbDatepicker #d2="ngbDatepicker">
            <div class="input-group-text">
                <div class="input-group-append">
                    <svg class="svg-icon" (click)="d2.toggle()"
                        xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24"
                        width="18">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z" />
                        <path d="M4 5.01h16V8H4z" opacity=".3" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</form>
<br>
<code class="hljs">Selected Date: {{ model2 | json }}</code>
<hr />
<button class="btn btn-primary" (click)="model2 = today">Select Today</button>
</div>

<div class="col-6">
<h6>Simple Calendar</h6>
<ngb-datepicker #d1 [(ngModel)]="model1" #c1="ngModel"></ngb-datepicker>
<br><br>
<code class="hljs">Selected Date: {{ model1 | json }}</code><br>
<button class="btn btn-primary" (click)="model1 = today">Select Today</button>

</div>`

export let datepickerTS1 = 
`import {Component, Injectable} from '@angular/core';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],

  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class DatepickerComponent {

  model1: string;
  model2: string;

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {}

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }
}`
export let datepickerHTML2 = 
`<ngb-datepicker [displayMonths]="displayMonths" [navigation]="navigation" 
    [showWeekNumbers]="showWeekNumbers" [outsideDays]="outsideDays">
</ngb-datepicker>
<div class="d-flex flex-wrap align-content-between p-2">
    <select class="custom-select" [(ngModel)]="displayMonths">
        <option [ngValue]="1">One month</option>
        <option [ngValue]="2">Two months</option>
        <option [ngValue]="3">Three months</option>
    </select>

    <select class="custom-select" [(ngModel)]="navigation">
        <option value="none">Without navigation</option>
        <option value="select">With select boxes</option>
        <option value="arrows">Without select boxes</option>
    </select>

    <select class="custom-select" [(ngModel)]="showWeekNumbers">
        <option [ngValue]="true">Week numbers</option>
        <option [ngValue]="false">No week numbers</option>
    </select>

    <select class="custom-select" [(ngModel)]="outsideDays">
        <option value="visible">Visible outside days</option>
        <option value="hidden">Hidden outside days</option>
        <option value="collapsed">Collapsed outside days</option>
    </select>
</div>`

export let datepickerTS2 = 
`import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  styles: ['
    select.custom-select {
      margin: 0.5rem 0.5rem 0 0;
      width: auto;
    }
  ']
})
export class DatepickerComponent implements OnInit {

  displayMonths = 3;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  
  constructor() {}

  ngOnInit(): void {
  }
  
}`

export let datepickerHTML3 = 
`<ngb-datepicker #dp [(ngModel)]="model" (navigate)="date = $event.next"></ngb-datepicker>

<hr />

<button class="btn btn-sm btn-outline-primary mr-2" (click)="selectToday()">Select Today</button>
<button class="btn btn-sm btn-outline-primary mr-2" (click)="dp.navigateTo()">To current month</button>
<button class="btn btn-sm btn-outline-primary mr-2" (click)="dp.navigateTo({year: 2013, month: 2})">To
    Feb 2013</button>

<hr />
<code class="hljs">Month/Year: {{ date.month }}-{{ date.year }}</code><br>
<code class="hljs">Selected Date: {{ model | json }}</code>`
export let datepickerTS3 = 
`import {Component, Injectable, OnInit} from '@angular/core';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  
  constructor( private ngbCalendar: NgbCalendar ) {}

  selectToday() {
    this.model = this.ngbCalendar.getToday();
  }
   
}`

export let datepickerHTML4 = 
`<ngb-datepicker #dateRange (dateSelect)="onDateSelection($event)" [displayMonths]="2" 
  [dayTemplate]="t"
outsideDays="hidden">
</ngb-datepicker>

<ng-template #t let-date let-focused="focused">
<span class="custom-day" 
      [class.focused]="focused" [class.range]="isRange(date)"
      [class.faded]="isHovered(date) || isInside(date)" 
      (mouseenter)="hoveredDate = date"
      (mouseleave)="hoveredDate = null">
    {{ date.day }}
</span>
</ng-template>

<hr>
<code class="hljs">From: {{ fromDate | json }} </code><br>
<code class="hljs">To: {{ toDate | json }} </code>`
export let datepickerTS4 = 
`import {Component, Injectable, OnInit} from '@angular/core';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  
  constructor( private ngbCalendar: NgbCalendar ) 
  {
    this.fromDate = ngbCalendar.getToday();
    this.toDate = ngbCalendar.getNext(ngbCalendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
   
}`

export let datepickerHTML5 = 
`<ngb-datepicker [(ngModel)]="modelDisable" [disabled]="disabled"></ngb-datepicker>

<hr />

<button class="btn btn-{{disabled ? 'danger' : 'success'}}"
    (click)="disabled = !disabled">
    {{ disabled ? "Disabled" : "Enabled"}}
</button>`
export let datepickerTS5 = 
`import {Component, Injectable, OnInit} from '@angular/core';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  modelDisable: NgbDateStruct;
  disabled = true;
  
  constructor( private ngbCalendar: NgbCalendar ) {
    this.modelDisable = ngbCalendar.getToday();
  }
}`
