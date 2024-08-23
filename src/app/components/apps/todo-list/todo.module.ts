import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoList1Component } from './todo-list1/todo-list1.component';
import { TodoList2Component } from './todo-list2/todo-list2.component';
import { TodoList3Component } from './todo-list3/todo-list3.component';
import { TodolistRoutingModule } from './todo-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [TodoList1Component, TodoList2Component, TodoList3Component],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    NgbModule
  ]
})
export class TodoModule { }
