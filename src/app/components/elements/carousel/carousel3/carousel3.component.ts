import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as codeData from '../../../../shared/codeViewData/carousel';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.scss']
})
export class Carousel3Component implements OnInit {

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
    { img: '../../assets/images/photos/19.jpg', slide: 'First', caption: '10 seconds between slides...', text: 'This carousel uses customized default values.' },
    { img: '../../assets/images/photos/20.jpg', slide: 'Second', caption: 'No mouse events...', text: "This carousel doesn't pause or resume on mouse events" },
    { img: '../../assets/images/photos/21.jpg', slide: 'Third', caption: 'No keyboard...', text: 'This carousel uses customized default values.' },
    { img: '../../assets/images/photos/22.jpg', slide: 'Fourth', caption: 'And no wrap after last slide.', text: 'This carousel uses customized default values.' },
  ];

  html3 = codeData.carouselHTML3;
  ts3 = codeData.carouselTS3;
}
