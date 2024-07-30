export let panelsHTML1 = 
`<div class="expanel expanel-default m-0">
    <div class="expanel-body">
        Basic panel example
    </div>
</div>`
export let panelsTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}`
export let panelsHTML2 = 
`<div class="row mt-4">
    <div class="col-lg-6">
        <div class="expanel expanel-default">
            <div class="expanel-heading">Panel heading without title</div>
            <div class="expanel-body">
                Panel content
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="expanel expanel-default">
            <div class="expanel-heading">
                <h3 class="expanel-title">Panel title</h3>
            </div>
            <div class="expanel-body">
                Panel content
            </div>
        </div>
    </div>
</div>`
export let panelsTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}`
export let panelsHTML3 = 
`<div class="expanel expanel-default m-0">
    <div class="expanel-body">
        Panel content
    </div>
    <div class="expanel-footer">Panel footer</div>
</div>`
export let panelsTS3 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}`
export let panelsHTML4 = 
`<div class="row mt-4">
    <div class="col-lg-6">
        <div class="expanel expanel-primary">
            <div class="expanel-heading">
                <h3 class="expanel-title">Panel title</h3>
            </div>
            <div class="expanel-body">
                Panel content
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="expanel expanel-secondary">
            <div class="expanel-heading">
                <h3 class="expanel-title">Panel title</h3>
            </div>
            <div class="expanel-body">
                Panel content
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6">
        <div class="expanel expanel-success">
            <div class="expanel-heading">
                <h3 class="expanel-title">Panel title</h3>
            </div>
            <div class="expanel-body">
                Panel content
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="expanel expanel-danger">
            <div class="expanel-heading">
                <h3 class="expanel-title">Panel title</h3>
            </div>
            <div class="expanel-body">
                Panel content
            </div>
        </div>
    </div>
</div>`
export let panelsTS4 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}`
export let panelsHTML5 = 
`<div class="row">
    <div class="col-lg-6">
        <div class="expanel expanel-primary overflow-hidden br-7 border-0 shadow-none">
            <div class="expanel-heading clearfix d-flex">
                <div class="mt-2">Panel title (with paragraphs inside)</div>
                <div class="float-right ml-auto">
                    <button class="btn btn-sm btn-primary" type="button" data-toggle="collapse"
                        data-target="#collapse01" aria-expanded="false" aria-controls="collapse01"><i
                            class="fa fa-bars"></i></button>
                </div>
            </div>
            <div class="expanel-body collapse" id="collapse01">
                <p>Paragraphs</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.
                    Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur
                    ante hendrerit.
                    Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae
                    augue.
                    Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>
            </div>
        </div>
        <div class="expanel expanel-info overflow-hidden br-7 border-0 shadow-none">
            <div class="expanel-heading clearfix d-flex">
                <div class="mt-2">Panel title (with list-group inside)</div>
                <div class="float-right ml-auto">
                    <button class="btn btn-sm btn-light" type="button" data-toggle="collapse"
                        data-target="#collapse02" aria-expanded="false" aria-controls="collapse02"><i
                            class="fa fa-bars"></i></button>
                </div>
            </div>
            <div class="expanel-body collapse" id="collapse02">
                <p>Notice the padding inside.</p>
                <ul class="list-group">
                    <li class="list-group-item"><a href="#" role="button"
                            class="btn btn-default btn-block">Some action</a></li>
                    <li class="list-group-item"><a href="#" role="button"
                            class="btn btn-default btn-block">Another action</a></li>
                </ul>
            </div>
        </div>
        <div class="expanel expanel-default overflow-hidden br-7 border-0 shadow-none">
            <div class="expanel-heading clearfix d-flex">
                <div class="mt-2">Panel title (with paragraphs)</div>
                <div class="float-right ml-auto">
                    <button class="btn btn-sm btn-info" type="button" data-toggle="collapse"
                        data-target="#collapse06" aria-expanded="false" aria-controls="collapse06"><i
                            class="fa fa-bars"></i></button>
                </div>
            </div>
            <div class="expanel-body collapse" id="collapse06">
                <p>Paragraphs</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.
                    Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur
                    ante hendrerit.
                    Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae
                    augue.
                    Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="expanel expanel-success overflow-hidden br-7 border-0 shadow-none">
            <div class="expanel-heading clearfix d-flex">
                <div class="mt-2">Panel title (with table inside)</div>
                <div class="float-right ml-auto">
                    <button class="btn btn-sm btn-success" type="button" data-toggle="collapse"
                        data-target="#collapse03" aria-expanded="false" aria-controls="collapse03"><i
                            class="fa fa-bars"></i></button>
                </div>
            </div>
            <div class="expanel-body collapse" id="collapse03">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="expanel expanel-warning overflow-hidden br-7 border-0 shadow-none">
            <div class="expanel-heading clearfix d-flex">
                <div class="mt-2">Panel title (with paragraphs)</div>
                <div class="float-right ml-auto">
                    <button class="btn btn-sm btn-warning" type="button" data-toggle="collapse"
                        data-target="#collapse04" aria-expanded="false" aria-controls="collapse04"><i
                            class="fa fa-bars"></i></button>
                </div>
            </div>
            <div class="expanel-body collapse" id="collapse04">
                <p>Paragraphs</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.
                    Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur
                    ante hendrerit.
                    Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae
                    augue.
                    Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>
            </div>
        </div>
        <div class="expanel expanel-danger overflow-hidden br-7 border-0 shadow-none">
            <div class="expanel-heading clearfix d-flex">
                <div class="mt-2">Panel title (with paragraphs)</div>
                <div class="float-right ml-auto">
                    <button class="btn btn-sm btn-danger" type="button" data-toggle="collapse"
                        data-target="#collapse05" aria-expanded="false" aria-controls="collapse05"><i
                            class="fa fa-bars"></i></button>
                </div>
            </div>
            <div class="expanel-body collapse" id="collapse05">
                <p>Paragraphs</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.
                    Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur
                    ante hendrerit.
                    Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae
                    augue.
                    Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>
            </div>
        </div>
    </div>
</div>`
export let panelsTS5 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}`