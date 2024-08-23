export let carouselHTML1 = 
`<ngb-carousel>
  <ng-template ngbSlide *ngFor="let caroImg of carouselImages">
      <img class="d-block w-100" src="{{caroImg.img}}" alt="">
      <div class="carousel-caption">
          <h3>{{caroImg.slide}} slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
  </ng-template>
</ngb-carousel>`
export let carouselTS1 = 
`import { Component } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
 
  public carouselImages = [
    { img: 'assets/images/photos/19.jpg', slide: 'First', caption: '10 seconds between slides...', text: 'This carousel uses customized default values.' },
    { img: 'assets/images/photos/20.jpg', slide: 'Second', caption: 'No mouse events...', text: "This carousel doesn't pause or resume on mouse events" },
    { img: 'assets/images/photos/21.jpg', slide: 'Third', caption: 'No keyboard...', text: 'This carousel uses customized default values.' },
    { img: 'assets/images/photos/22.jpg', slide: 'Fourth', caption: 'And no wrap after last slide.', text: 'This carousel uses customized default values.' },
  ];

}
`
export let carouselHTML2 = 
`<ngb-carousel>
    <ng-template ngbSlide *ngFor="let caroImg of carouselImages">
        <img class="d-block w-100" src="{{caroImg.img}}" alt="">
        <div class="carousel-caption">
            <h3>{{caroImg.caption}}</h3>
            <p>{{caroImg.text}}</p>
        </div>
    </ng-template>
</ngb-carousel>`
export let carouselTS2 = 
`import { Component } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  public carouselImages = [
    { img: 'assets/images/photos/19.jpg', slide: 'First', caption: '10 seconds between slides...', text: 'This carousel uses customized default values.' },
    { img: 'assets/images/photos/20.jpg', slide: 'Second', caption: 'No mouse events...', text: "This carousel doesn't pause or resume on mouse events" },
    { img: 'assets/images/photos/21.jpg', slide: 'Third', caption: 'No keyboard...', text: 'This carousel uses customized default values.' },
    { img: 'assets/images/photos/22.jpg', slide: 'Fourth', caption: 'And no wrap after last slide.', text: 'This carousel uses customized default values.' },
  ];

}`
export let carouselHTML3 = 
`<ngb-carousel [showNavigationArrows]="showNavigationArrows" [showNavigationIndicators]="showNavigationIndicators">
<ng-template ngbSlide *ngFor="let caroImg of carouselImages">
    <img class="d-block w-100" src="{{caroImg.img}}" alt="">
    <div class="carousel-caption">
        <h3>No mouse navigation</h3>
        <p>This carousel hides navigation arrows and indicators.</p>
    </div>
</ng-template>
</ngb-carousel>
<hr>

<div class="btn-group" role="group" aria-label="Carousel toggle controls">
<button type="button" (click)="showNavigationArrows = !showNavigationArrows"
    class="btn btn-outline-dark btn-sm">Toggle navigation arrows</button>
<button type="button" (click)="showNavigationIndicators = !showNavigationIndicators"
    class="btn btn-outline-dark btn-sm">Toggle navigation indicators</button>
</div>`
export let carouselTS3 = 
`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

  public carouselImages = [
    { img: 'assets/images/photos/19.jpg', slide: 'First', caption: '10 seconds between slides...', text: 'This carousel uses customized default values.' },
    { img: 'assets/images/photos/20.jpg', slide: 'Second', caption: 'No mouse events...', text: "This carousel doesn't pause or resume on mouse events" },
    { img: 'assets/images/photos/21.jpg', slide: 'Third', caption: 'No keyboard...', text: 'This carousel uses customized default values.' },
    { img: 'assets/images/photos/22.jpg', slide: 'Fourth', caption: 'And no wrap after last slide.', text: 'This carousel uses customized default values.' },
  ];

}`