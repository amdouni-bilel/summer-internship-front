export let naviHTML1 = 
`<ul ngbNav class="nav1 br-7">
    <li ngbNavItem  class="nav-item1">
        <a ngbNavLink class="active" href="#">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="" href="#">Link</a>
    </li>
    <li ngbNavItem  class="nav-item1">
        <a ngbNavLink class="" href="#">Link</a>
    </li>
    <li ngbNavItem  class="nav-item1">
        <a ngbNavLink class=" disabled" href="#">Disabled</a>
    </li>
</ul>`
export let naviTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}`
export let naviHTML2 = 
`<ul ngbNav class="nav1 flex-column br-7">
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="active">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="disabled">Disabled</a>
    </li>
</ul>`
export let naviTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}`
export let naviHTML3 = 
`<ul ngbNav class="nav-pills">
    <li ngbNavItem class="m-2">
        <a ngbNavLink class="px-4 py-2" href="#">Active</a>
    </li>
    <li ngbNavItem ngbDropdown class=" m-2">
        <a ngbNavLink class=" dropdown-toggle px-4 py-2" ngbDropdownToggle role="button">Dropdown</a>
        <div ngbDropdownMenu>
            <a ngbDropdownItem href="#">Action</a>
            <a ngbDropdownItem href="#">Another action</a>
            <a ngbDropdownItem href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a ngbDropdownItem href="#">Separated link</a>
        </div>
    </li>
    <li ngbNavItem class="m-2">
        <a ngbNavLink class=" px-4 py-2" href="#">Link</a>
    </li>
    <li ngbNavItem class="m-2">
        <a ngbNavLink class="disabled px-4 py-2" href="#">Disabled</a>
    </li>
</ul>`
export let naviTS3 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}`
export let naviHTML4 = 
`<ul ngbNav class="nav-pills nav-pills-circle" id="tabs_2" role="tablist">
    <li ngbNavItem>
        <a ngbNavLink class="border py-3 px-5 m-2" id="tab1" data-toggle="tab" href="javascript:void(0)" role="tab"
            aria-selected="false">
            <span class="nav-link-icon d-block"><i class="fe fe-home"></i> Home</span>
        </a>
    </li>
    <li ngbNavItem>
        <a ngbNavLink class="border py-3 px-5 m-2" id="tab2" data-toggle="tab" href="javascript:void(0)" role="tab"
            aria-selected="false">
            <span class="nav-link-icon d-block"><i class="fe fe-unlock"></i> Lock </span>
        </a>
    </li>
    <li ngbNavItem>
        <a ngbNavLink class=" py-3 px-5 border m-2" id="tab3" data-toggle="tab"
            href="javascript:void(0)" role="tab" aria-selected="true">
            <span class="nav-link-icon d-block"><i class="fe fe-play"></i> Videos</span>
        </a>
    </li>
    <li ngbNavItem>
        <a  ngbNavLink class=" border py-3 px-5 m-2" id="tab4" data-toggle="tab" href="javascript:void(0)" role="tab"
            aria-selected="false">
            <span class="nav-link-icon d-block"><i class="fe fe-layers"></i> Severs</span>
        </a>
    </li>
    <li ngbNavItem >
        <a  ngbNavLink class=" border py-3 px-5 m-2" id="tab5" data-toggle="tab" href="javascript:void(0)" role="tab"
            aria-selected="false">
            <span class="nav-link-icon d-block"><i class="fe fe-image"></i> Gallery </span>
        </a>
    </li>
</ul>`
export let naviTS4 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}`
export let naviHTML5 = 
`<ul ngbNav class=" nav-pills nav-pills-circle" id="tabs_3" role="tablist">
    <li ngbNavItem>
        <a ngbNavLink class="nav-link border w-8 h-8 text-center br-100 m-2" id="tab21" data-toggle="tab"
            href="javascript:void(0)" role="tab" aria-controls="tab1" aria-selected="false">
            <span class="nav-link-icon d-block text-center mx-auto"><i
                    class="fe fe-home fs-20"></i></span>
        </a>
    </li>
    <li ngbNavItem>
        <a ngbNavLink class="nav-link border w-8 h-8 br-100 m-2" id="tab22" data-toggle="tab" href="javascript:void(0)"
            role="tab" aria-controls="tab2" aria-selected="false">
            <span class="nav-link-icon d-block text-center mx-auto"><i
                    class="fe fe-unlock fs-20"></i></span>
        </a>
    </li>
    <li ngbNavItem>
        <a ngbNavLink class="nav-link border w-8 h-8 br-100 m-2" id="tab23" data-toggle="tab"
            href="javascript:void(0)" role="tab" aria-controls="tab3" aria-selected="true">
            <span class="nav-link-icon d-block text-center mx-auto"><i
                    class="fe fe-play fs-20"></i></span>
        </a>
    </li>
    <li ngbNavItem>
        <a ngbNavLink class="nav-link border w-8 h-8 br-100 m-2" id="tab24" data-toggle="tab" href="javascript:void(0)"
            role="tab" aria-controls="tab4" aria-selected="false">
            <span class="nav-link-icon d-block text-center mx-auto"><i
                    class="fe fe-layers fs-20"></i></span>
        </a>
    </li>
    <li ngbNavItem>
        <a ngbNavLink class="nav-link border  w-8 h-8 br-100 m-2" id="tab25" data-toggle="tab" href="javascript:void(0)"
            role="tab" aria-controls="tab5" aria-selected="false">
            <span class="nav-link-icon d-block text-center mx-auto"><i class="fe fe-image fs-20"></i>
            </span>
        </a>
    </li>
</ul>`
export let naviTS5 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}`
export let naviHTML6 = 
`<ul ngbNav class="nav1 bg-primary br-7">
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white active" href="#">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="disabled text-white-50" href="#">Disabled</a>
    </li>
</ul>
<ul ngbNav class="nav1 bg-info mt-4 br-7">
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white active" href="#">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="disabled text-white-50" href="#">Disabled</a>
    </li>
</ul>
<ul ngbNav class="nav1 bg-success mt-4 br-7">
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white active" href="#">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="disabled text-white-50" href="#">Disabled</a>
    </li>
</ul>
<ul ngbNav class="nav1 bg-danger mt-4 br-7">
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white active" href="#">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="disabled text-white-50" href="#">Disabled</a>
    </li>
</ul>
<ul ngbNav class="nav1 bg-secondary mt-4 br-7">
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white active" href="#">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="disabled text-white-50" href="#">Disabled</a>
    </li>
</ul>
<ul ngbNav class="nav1 bg-yellow mt-4 br-7">
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white active" href="#">Active</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="text-white" href="#">Link</a>
    </li>
    <li ngbNavItem class="nav-item1">
        <a ngbNavLink class="disabled text-white-50" href="#">Disabled</a>
    </li>
</ul>`
export let naviTS6 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}`