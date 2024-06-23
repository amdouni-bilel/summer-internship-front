import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {NgWizardModule} from 'ng-wizard';
import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule} from 'ngx-dropzone-wrapper';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {NgSelectModule} from '@ng-select/ng-select';
import {ArchwizardModule} from 'angular-archwizard';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import {TreeviewModule} from 'ngx-treeview';
import {FormsRoutingModule} from '../components/forms/forms-routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TablesRoutingModule} from '../components/tables/tables-routing.module';
import {AdministrationComponent} from './administration.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import {PersonnelComponent} from './employee/personnel/personnel.component';
import {TypeServiceService} from '../administration/type-service.service';
import {OrganigrammeComponent} from './organigramme/organigramme.component';
import {MailmanagerService} from './mailmanager/mailmanager.service';
import {SmtpComponent} from './smtp/smtp.component';
import {SmtpService} from './smtp/smtp.service';
import {VarsComponent} from './vars/vars.component';
import {VarsService} from './vars/vars.service';
import {VariablesService} from './variable/variables.service';
import {VarsmanagComponent} from './varsmanag/varsmanag.component';
import {VarsmanagService} from './varsmanag/varsmanag.service';
import {VariableComponent} from './variable/variable.component';
import {MailmanagerComponent} from './mailmanager/mailmanager.component';
import {TokenInterceptorService} from '../interceptor';
import {InactifDaysComponent} from './inactif-days/inactif-days.component';
import {CompanyInformationComponent} from './company/company-information/company-information.component';
import {CompanyListComponent} from './company/company-list/company-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import {SharedModule} from '../shared/shared.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    AdministrationComponent,
    PersonnelComponent,
    OrganigrammeComponent,
    SmtpComponent,
    VarsComponent,
    VariableComponent,
    VarsmanagComponent,
    MailmanagerComponent,
    CompanyInformationComponent,
    InactifDaysComponent,
    CompanyListComponent,
    EmployeeListComponent,
    CreateEmployeeComponent],
    imports: [
        CommonModule,
        AdministrationRoutingModule,
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
        SharedModule
    ], providers: [
    VarsmanagService,
    VariablesService,
    VarsService,
    SmtpService,
    MailmanagerService,
    TypeServiceService,
    ToastrService,
    PersonnelComponent,
    EmployeeListComponent,
    {provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
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
export class AdministrationModule {
}
