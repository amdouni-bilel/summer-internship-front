export let tooltipsHTML1 = 
`<div class="row  text-center">
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" placement="top" ngbTooltip="Tooltip on top"
            type="button">Hover me</button>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" placement="bottom" ngbTooltip="Tooltip on bottom"
            type="button">Hover me</button>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" placement="left" ngbTooltip="Tooltip on left"
            type="button">Hover me</button>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" placement="right" ngbTooltip="Tooltip on right"
            type="button">Hover me</button>
    </div>
</div>`
export let tooltipsTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}`
export let tooltipsHTML2 = 
`<div class="row  text-center">
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" 
            ngbTooltip="Tooltip on top" type="button" tooltipClass="my-custom-class">Hover me</button>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" placement="bottom"
            ngbTooltip="Tooltip on bottom" type="button" tooltipClass="my-custom-class">Hover me</button>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" placement="left"
            ngbTooltip="Tooltip on left" type="button" tooltipClass="my-custom-class">Hover me</button>
    </div>
    <div class="col-sm-6 col-lg-3 mb-3">
        <button class="btn btn-secondary" placement="right"
            ngbTooltip="Tooltip on right" type="button" tooltipClass="my-custom-class">Hover me</button>
    </div>
</div>`
export let tooltipsTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}`
