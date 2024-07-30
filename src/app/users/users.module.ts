import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {NgWizardModule} from "ng-wizard";
import {FormsRoutingModule} from "../components/forms/forms-routing.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ArchwizardModule} from "angular-archwizard";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {NgxDropzoneModule} from "ngx-dropzone";
import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule} from "ngx-dropzone-wrapper";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {TreeviewModule} from "ngx-treeview";
import {TablesRoutingModule} from "../components/tables/tables-routing.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import { AddUserComponent } from './add-user/add-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [ListUsersComponent, AddUserComponent, ModifyUserComponent],
  imports: [
    CommonModule,
    MatPaginatorModule ,
    UsersRoutingModule,
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
    HighlightModule,
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

  ] , providers: [
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
export class UsersModule { }
