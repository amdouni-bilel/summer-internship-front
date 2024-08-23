import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogStyleComponent } from './blog-style/blog-style.component';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { BlogRoutingModule } from './blog-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [BlogStyleComponent, Blog1Component, Blog2Component, Blog3Component],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgbModule
  ]
})
export class BlogModule { }
