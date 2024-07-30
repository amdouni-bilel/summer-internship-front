export let dropdownHTML1 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div ngbDropdown class="btn-group mt-2 mb-2" *ngFor="let dropdown of dropdownsClass">
            <button type="button" class="btn btn-{{dropdown.class}} dropdown-toggle" ngbDropdownToggle>
                Action <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML2 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div class="btn-group mt-2 mb-2" ngbDropdown *ngFor="let dropdown of dropdownsClass">
            <button type="button" ngbDropdownToggle
                class="btn btn-{{dropdown.class}} btn-pill dropdown-toggle">
                Action <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML3 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div class="btn-group mt-2 mb-2" ngbDropdown *ngFor="let dropdown of dropdownsClass">
            <button type="button" class="btn btn-{{dropdown.class}}">Action</button>
            <button type="button" ngbDropdownToggle
                class="btn btn-{{dropdown.class}} dropdown-toggle split-dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
            </button>&nbsp;
            <ul ngbDropdownMenu ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS3 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML4 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div class="btn-group mt-2 mb-2" ngbDropdown *ngFor="let dropdown of dropdownsClass">
            <button type="button" class="btn btn-pill btn-{{dropdown.class}}">Action</button>
            <button type="button" ngbDropdownToggle
                class="btn btn-pill btn-{{dropdown.class}} dropdown-toggle split-dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS4 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML5 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div class="btn-group mt-2 mb-2" ngbDropdown *ngFor="let dropdown of dropdownsClass">
            <button type="button" ngbDropdownToggle
                class="btn btn-outline-{{dropdown.class}} dropdown-toggle">
                Action <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS5 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML6 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div class="btn-group mt-2 mb-2" ngbDropdown *ngFor="let dropdown of dropdownsClass">
            <button type="button" ngbDropdownToggle
                class="btn btn-outline-{{dropdown.class}} btn-pill dropdown-toggle">
                Action <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS6 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML7 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div class="btn-group mt-2 mb-2" ngbDropdown *ngFor="let dropdown of dropdownsClass">
            <button type="button" class="btn btn-outline-{{dropdown.class}}">Action</button>
            <button type="button" ngbDropdownToggle
                class="btn btn-outline-{{dropdown.class}} dropdown-toggle">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS7 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML8 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div class="btn-group mt-2 mb-2" ngbDropdown *ngFor="let dropdown of dropdownsClass">
            <button type="button" class="btn btn-pill btn-outline-{{dropdown.class}}">Action</button>
            <button type="button" ngbDropdownToggle
                class="btn btn-pill btn-outline-{{dropdown.class}} dropdown-toggle">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class=" fa fa-angle-up"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS8 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML9 = 
`<div ngbDropdown placement="top-left" container="body" class="btn-group mt-2 mb-2">
    <button ngbDropdownToggle class="btn btn-primary dropdown-toggle" type="button">Dropup1
        <span class="caret"></span>
    </button>&nbsp;
    <ul ngbDropdownMenu>
        <li ngbDropdownItem><a href="#">HTML</a></li>
        <li ngbDropdownItem><a href="#">CSS</a></li>
        <li ngbDropdownItem><a href="#">JavaScript</a></li>
        <li class="divider"></li>
        <li ngbDropdownItem><a href="#">About Us</a></li>
    </ul>
</div>

<!-- Split dropup button -->
<div ngbDropdown placement="top-left" container="body" class="btn-group mt-2 mb-2">
    <button ngbDropdownToggle class="btn btn-info dropdown-toggle" type="button">Dropup2
        <span class="caret"></span>
    </button>
    <ul ngbDropdownMenu>
        <li ngbDropdownItem><a href="#">HTML</a></li>
        <li ngbDropdownItem><a href="#">CSS</a></li>
        <li ngbDropdownItem><a href="#">JavaScript</a></li>
        <li class="divider"></li>
        <li ngbDropdownItem><a href="#">About Us</a></li>
    </ul>
</div>`
export let dropdownTS9 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
export let dropdownHTML10 = 
`<div class="panel panel-default">
    <div class="panel-body p-0">
        <div ngbDropdown class="btn-group mt-2 mb-2">
            <button ngbDropdownToggle type="button" class="btn btn-facebook btn-pill dropdown-toggle">
                <i class="fa fa-facebook"></i> <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
        <div ngbDropdown  class="btn-group mt-2 mb-2">
            <button ngbDropdownToggle type="button" class="btn btn-twitter btn-pill dropdown-toggle">
                <i class="fa fa-twitter"></i> <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem  class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem ><a href="#">Action</a></li>
                <li ngbDropdownItem ><a href="#">Another action</a></li>
                <li ngbDropdownItem ><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem ><a href="#">Separated link</a></li>
            </ul>
        </div>
        <div ngbDropdown class="btn-group mt-2 mb-2">
            <button ngbDropdownToggle type="button" class="btn btn-google btn-pill dropdown-toggle">
                <i class="fa fa-google"></i> <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
        <div ngbDropdown class="btn-group mt-2 mb-2">
            <button ngbDropdownToggle type="button" class="btn btn-youtube btn-pill dropdown-toggle">
                <i class="fa fa-youtube "></i><span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
        <div ngbDropdown class="btn-group mt-2 mb-2">
            <button ngbDropdownToggle type="button" class="btn btn-vimeo btn-pill dropdown-toggle">
                <i class="fa fa-vimeo"></i><span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
        <div ngbDropdown class="btn-group mt-2 mb-2">
            <button ngbDropdownToggle type="button" class="btn btn-github btn-pill dropdown-toggle">
                <i class="fa fa-github"></i> <span class="caret"></span>
            </button>&nbsp;
            <ul ngbDropdownMenu role="menu">
                <li ngbDropdownItem class="dropdown-plus-title">
                    Dropdown
                    <b class="fa fa-angle-up" aria-hidden="true"></b>
                </li>
                <li ngbDropdownItem><a href="#">Action</a></li>
                <li ngbDropdownItem><a href="#">Another action</a></li>
                <li ngbDropdownItem><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li ngbDropdownItem><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>`
export let dropdownTS10 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]

}`
