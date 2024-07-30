import { AfterViewInit, Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit , AfterViewInit{

  active;
  constructor() { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(){
    const scroll1 = document.getElementById('ChatList1'); 
    const scroll3 = document.querySelector('#ChatBody');

    let ps = new PerfectScrollbar(scroll1, {
      useBothWheelAxes: false,
      suppressScrollX: false,
    });
    let ps2 = new PerfectScrollbar(scroll3, {
      useBothWheelAxes: false,
      suppressScrollX: false,
    });

  }
 
}
