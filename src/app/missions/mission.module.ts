import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionRoutingModule } from './mission-routing.module';
import { CreateMissionComponent } from './components/create-mission/create-mission.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgWizardModule } from 'ng-wizard';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
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
import { MyMissionComponent } from './components/my-mission/my-mission.component';
import { AllMissionsComponent } from './components/all-missions/all-missions.component';
import { UploadCvComponent } from './components/upload-cv/upload-cv.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ClipboardModule} from "ngx-clipboard";
import {ConsultCvComponent} from "./components/consult-cv/consult-cv.component";
import {SharedModule} from "../shared/shared.module";
import { ModifyMissionComponent } from './components/modify-mission/modify-mission.component';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    CreateMissionComponent,
    MyMissionComponent,
    AllMissionsComponent,
    UploadCvComponent,
    ConsultCvComponent,
    ModifyMissionComponent,
  ],
    imports: [
        CommonModule,
        MissionRoutingModule,
        NgbModule,
        ToastrModule.forRoot(),
        NgWizardModule,
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
        HighlightModule,
        MatDialogModule,
        ClipboardModule,
        SharedModule

    ],  providers: [
    ToastrService,
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
export class MissionModule { }
