export let breadcrumbHTML1 =
`<ol class="breadcrumb1">
    <li class="breadcrumb-item1 active">Home</li>
    <li class="breadcrumb-item1 active">About</li>
</ol>
<ol class="breadcrumb1">
    <li class="breadcrumb-item1"><a href="#">Home</a></li>
    <li class="breadcrumb-item1 active">Library</li>
</ol>
<ol class="breadcrumb1">
    <li class="breadcrumb-item1"><a href="#">Home</a></li>
    <li class="breadcrumb-item1"><a href="#">Library</a></li>
    <li class="breadcrumb-item1 active">Data</li>
</ol>`
export let breadcrumbTS1 =
`import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

}`
export let breadcrumbHTML2 =
`<nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-style1 mb-0">
        <li class="breadcrumb-item">
            <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
            <a href="#">Library</a>
        </li>
        <li class="breadcrumb-item active">Data</li>
    </ol>
</nav>`
export let breadcrumbTS2 =
`import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

}`
export let breadcrumbHTML3 =
`<nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-style2 mb-0">
        <li class="breadcrumb-item">
            <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
            <a href="#">Library</a>
        </li>
        <li class="breadcrumb-item active">Data</li>
    </ol>
</nav>`
export let breadcrumbTS3 =
`import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

}`
export let breadcrumbHTML4 =
`<ol class="breadcrumb1 bg-blue">
    <li class="breadcrumb-item1 active text-white">Home</li>
    <li class="breadcrumb-item1 active text-white">About</li>
</ol>
<ol class="breadcrumb1 bg-secondary">
    <li class="breadcrumb-item1"><a href="#" class="text-white">Home</a></li>
    <li class="breadcrumb-item1 active text-white">Library</li>
</ol>
<ol class="breadcrumb1 bg-success">
    <li class="breadcrumb-item1"><a href="#" class="text-white">Home</a></li>
    <li class="breadcrumb-item1 text-white"><a href="#" class="text-white">Library</a></li>
    <li class="breadcrumb-item1 active text-white">Data</li>
</ol>`
export let breadcrumbTS4 =
`import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

}`
export let breadcrumbHTML5 =
`<nav aria-label="breadcrumb">
    <ol class="breadcrumb1 border bg-transparent">
        <li class="breadcrumb-item1 active"><i class="fa fa-star-o mr-2 white-text" aria-hidden="true"></i>Home</li>
        <li class="breadcrumb-item1 active">About</li>
    </ol>
    <ol class="breadcrumb1">
        <li class="breadcrumb-item1"><a href="#" class=""><i class="fa fa-star-o mr-2" aria-hidden="true"></i>Home</a></li>
        <li class="breadcrumb-item1 active"><i class="fa fa-star-o mr-2" aria-hidden="true"></i>Library</li>
    </ol>
    <ol class="breadcrumb1 bg-primary mb-0">
        <li class="breadcrumb-item1"><a href="#" class="text-white"><i class="fa fa-star-o mr-2 white-text" aria-hidden="true"></i>Home</a></li>
        <li class="breadcrumb-item1 text-white"><a href="#" class="text-white"><i class="fa fa-star-o mr-2 white-text" aria-hidden="true"></i>Library</a></li>
        <li class="breadcrumb-item1 active text-white"><i class="fa fa-star-o mr-2 white-text" aria-hidden="true"></i>Data</li>
    </ol>
</nav>`
export let breadcrumbTS5 =
`import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

}`
export let breadcrumbHTML6 =
`<ol class="breadcrumb breadcrumb-arrow mt-3">
    <li><a href="#">Home</a></li>
    <li class="active"><span>Data</span></li>
</ol>
<ol class="breadcrumb breadcrumb-arrow mt-3">
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active"><span>Data</span></li>
</ol>
<ol class="breadcrumb breadcrumb-arrow mt-3">
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li><a href="#">Elements</a></li>
    <li class="active"><span>Data</span></li>
</ol>`
export let breadcrumbTS6 =
`import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

}`
export let breadcrumbHTML7 =
`<ol class="breadcrumb border p-4 mb-4">
    <li class="breadcrumb-item"><a href="#" class="d-flex">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        </svg>
        <span class="breadcrumb-icon"> Home</span></a></li>
    <li class="breadcrumb-item active">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z" />
        </svg>
        <span class="breadcrumb-icon">Data</span></li>
</ol>
<ol class="breadcrumb border p-4 mb-4 bg-light">
    <li class="breadcrumb-item"><a href="#" class="d-flex">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        </svg>
        <span class="breadcrumb-icon"> Home</span></a>
    </li>
    <li class="breadcrumb-item"><a href="#">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
        <span class="breadcrumb-icon">Library</span></a>
    </li>
    <li class="breadcrumb-item active">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z" />
        </svg>
        <span class="breadcrumb-icon">Data</span>
    </li>
</ol>
<ol class="breadcrumb p-4 bg-primary br-3 overflow-hidden">
    <li class="breadcrumb-item text-white"><a href="#" class="d-flex text-white">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        </svg>
        <span class="breadcrumb-icon"> Home</span></a>
    </li>
    <li class="breadcrumb-item text-white"><a href="#" class="d-flex text-white">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
        <span class="breadcrumb-icon">Library</span></a>
    </li>
    <li class="breadcrumb-item text-white"><a href="#" class="text-white">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
            <g>
                <rect fill="none" height="24" width="24" />
            </g>
            <g>
                <path d="M13,11.33L18,18H6l5-6.67V6h2 M15.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L9,6.5v4.17L3.2,18.4C2.71,19.06,3.18,20,4,20h16 c0.82,0,1.29-0.94,0.8-1.6L15,10.67V6.5l1.35-1.69C16.61,4.48,16.38,4,15.96,4L15.96,4z" />
            </g>
        </svg>
        <span class="breadcrumb-icon">Elements</span></a>
    </li>
    <li class="breadcrumb-item active text-white">
        <svg class="svg-icon1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z" />
        </svg>
        <span class="breadcrumb-icon">Data</span>
    </li>
</ol>`
export let breadcrumbTS7 =
`import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

}`