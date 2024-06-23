import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  html1 =
  `<div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component
        for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out
        within the larger container.</p>
    <p class="lead m-0">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>`
  ts1 =
  `import { Component } from '@angular/core';

  @Component({
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.scss']
  })
  export class JumbotronComponent {
  
  }
  `
  html2 =
  `<div class="jumbotron ">
    <div class="container">
        <h1 class="display-3">jumbotron</h1>
        <p class="lead m-0">This is a modified jumbotron that occupies the entire
            horizontal space of its parent.</p>
    </div>
  /div>`
  ts2 = 
  `import { Component } from '@angular/core';

  @Component({
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.scss']
  })
  export class JumbotronComponent {
  
  }`

}
