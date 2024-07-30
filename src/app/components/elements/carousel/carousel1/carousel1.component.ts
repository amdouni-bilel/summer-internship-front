import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../../shared/codeViewData/carousel';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss']
})
export class Carousel1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public carouselImages = [
    { img: '../../assets/images/photos/19.jpg', slide: 'First', caption: '10 seconds between slides...', text: 'This carousel uses customized default values.' },
    { img: '../../assets/images/photos/20.jpg', slide: 'Second', caption: 'No mouse events...', text: "This carousel doesn't pause or resume on mouse events" },
    { img: '../../assets/images/photos/21.jpg', slide: 'Third', caption: 'No keyboard...', text: 'This carousel uses customized default values.' },
    { img: '../../assets/images/photos/22.jpg', slide: 'Fourth', caption: 'And no wrap after last slide.', text: 'This carousel uses customized default values.' },
  ];

  html1 = codeData.carouselHTML1;
  ts1 = codeData.carouselTS1;
}
