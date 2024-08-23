export let popoverHTML1 = 
`<button type="button" class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top" popoverTitle="Popover top">
    Click me
</button>
<button type="button" class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="bottom" popoverTitle="Popover top">
    Click me
</button>
<button type="button" class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="right" popoverTitle="Popover top">
    Click me
</button>
<button type="button" class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="left" popoverTitle="Popover top">
    Click me
</button>`
export let popoverTS1 = 
`import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopOverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}`
export let popoverHTML2 = 
`<button class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top" popoverClass="my-custom-class" popoverTitle="Popover top" type="button">
    Click me
</button>
<button class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverClass="my-custom-header" placement="bottom" popoverTitle="Popover bottom" type="button">
    Click me
</button>`
export let popoverTS2 = 
`import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopOverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}`
export let popoverHTML3 = 
`<button class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top" popoverClass="my-custom-primary" popoverTitle="Popover top" type="button">
    Click me
</button>
<button class="btn btn-secondary" container="body" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="bottom" popoverClass="my-custom-secondary" popoverTitle="Popover bottom" type="button">
    Click me
</button>`
export let popoverTS3 = 
`import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopOverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}`

export let popoverCSS2 = 
`.my-custom-class .popover-header{
    color: #fff;
    background-color: #705ec8;
}
.my-custom-header.bs-popover-bottom > .arrow::after{
    border-bottom-color: #705ec8;
}
.my-custom-header .popover-header, .my-custom-primary .popover-header{
    color: #fff;
    background-color: #705ec8;
}`

export let popoverCSS3 =
`.my-custom-primary{
    border: none;
}
.my-custom-primary .popover-header{
    color: #fff;
    background-color: #705ec8;
    border: none;
}
.my-custom-primary.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=top] > .arrow::after{
    border-top-color: #705ec8;
}
.my-custom-primary .popover-body{
    color: rgba(255, 255, 255, 0.75);
    background-color: #705ec8;
}

.my-custom-secondary .popover-header{
    color: #fff;
    background-color: #f72d66 ;
}
.my-custom-secondary{
    border: none;
}
.my-custom-secondary .popover-header{
    color: #fff;
    background-color:#f72d66 ;
    border: none;
}
.my-custom-secondary.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=bottom] > .arrow::after{
    border-bottom-color:#f72d66 ;
}
.my-custom-secondary .popover-body{
    color: rgba(255, 255, 255, 0.75);
    background-color:#f72d66 ;
}`
