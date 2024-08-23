import { Component, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  sidenavtoggled1: any;

  constructor(
    public navServices: NavService,
    public elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }
  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

}
