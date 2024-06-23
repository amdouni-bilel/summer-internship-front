import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.scss']
})
export class CardImagesComponent implements OnInit {

  public isCollapsed = false;
  public isClosed = false;

  constructor() { }

  ngOnInit(): void {
  }

  Collapsetoggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  Closetoggle() {
    this.isClosed = true
  }
  cardClose(){
    document.addEventListener('toggle', () => {
      document.querySelector('card').classList.add('card-collapsed');
    })
  }

}
