import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManager1Component } from './file-manager1/file-manager1.component';
import { FileManager2Component } from './file-manager2/file-manager2.component';
import { FilemanagerRoutingModule } from './filemanager-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [FileManager1Component, FileManager2Component],
  imports: [
    CommonModule,
    FilemanagerRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class FilemanagerModule { }
