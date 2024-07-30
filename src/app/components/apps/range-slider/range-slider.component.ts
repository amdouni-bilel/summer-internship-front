import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']

})
export class RangeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  defvalue: number = 100;
  minValue: number = 20;
  maxValue: number = 80;
  customMinValue: number = 30;
  customMaxValue: number = 70;
  prefixMinValue: number = 70;
  prefixMaxValue: number = 200;
  htmlMinValue: number = 100;
  htmlMaxValue: number = 150;
  NegValue: number = 0;
  Value: number = 5;
  sliderControl: FormControl = new FormControl(100);
  DefaultSliderOptions: Options = {
    floor: 0,
    ceil: 250
  }

  MinMaxOptions: Options = {
    floor: 0,
    ceil: 100,
  }

  CustomSliderOptions: Options= {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  }

  CustomPrefixOptions: Options = {
    floor: 0,
    ceil: 300,
    translate: (value: number): string => {
      return '$' + value;
    }
  }

  HtmlPrefixOptions : Options ={
    floor: 0,
    ceil: 300,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  }

  NegativeOptions: Options = {
    floor: -100,
    ceil: 100,
    step: 10,
  };

  CustomValuesOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicks: false,
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: 'Jan' },
      { value: 2, legend: 'Feb' },
      { value: 3, legend: 'Mar' },
      { value: 4, legend: "April" },
      { value: 5, legend: 'May' },
      { value: 6, legend: "June" },
      { value: 7, legend: 'July' },
      { value: 8, legend: "Aug" },
      { value: 9, legend: 'Sept' },
      { value: 10, legend: 'Oct' },
      { value: 11, legend: 'Nov' },
      { value: 12, legend: 'Dec' },
    ]
  }
}
