import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgWizardModule } from 'ng-wizard';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArchwizardModule } from 'angular-archwizard';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TreeviewModule } from 'ngx-treeview';
import { FormsRoutingModule } from '../components/forms/forms-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TablesRoutingModule } from '../components/tables/tables-routing.module';
import { CraRoutingModule } from './cra-routing.module';
import { CraComponent } from './cra.component';
import { CraService } from './cra.services';
import { TokenInterceptorService } from '../interceptor';
import {MesCraComponent} from "./mes-cra/mes-cra.component";
import { AllActivitiesComponent } from './all-activities/all-activities.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { ShowCraComponent } from './show-cra/show-cra.component';
//import {WebsocketService} from "./services/websocket.service";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [CraComponent ,
    MesCraComponent,
    AllActivitiesComponent,
    MyActivitiesComponent,
    ShowCraComponent,
  ],
  imports: [
    CommonModule,
    CraRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgWizardModule,
    CommonModule,
    FormsRoutingModule,
    NgSelectModule,

    CKEditorModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    ArchwizardModule,
    NgWizardModule,
    AngularMultiSelectModule,
    NgxDropzoneModule,
    DropzoneModule,
    NgxIntlTelInputModule,
    TreeviewModule.forRoot(),

    TablesRoutingModule,
    NgxDatatableModule,
    HighlightModule
  ] ,  providers: [
   // WebsocketService,
    DatePipe,
    ToastrService,
    CraService,
    { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          // xml: () => import('highlight.js/lib/languages/xml'),
          html: () => import('highlight.js/lib/languages/markdown')
        }
      }
    }
  ]
})
export class CraModule { }

