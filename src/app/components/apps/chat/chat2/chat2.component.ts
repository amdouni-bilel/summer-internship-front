import { AfterViewInit, Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.scss']
})
export class Chat2Component implements OnInit , AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const scroll1 = document.querySelector('#ChatList1');
    const scroll2 = document.querySelector('#ChatBody');

    let ps = new PerfectScrollbar(scroll1);
    let ps1 = new PerfectScrollbar(scroll2);

  }

}
