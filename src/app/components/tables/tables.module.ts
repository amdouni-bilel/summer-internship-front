import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { DefaultTableComponent } from './default-table/default-table.component';
import { TablesRoutingModule } from './tables-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableWithApiDataComponent } from './table-with-api-data/table-with-api-data.component';
import { Table1WithApiDataComponent } from './table1-with-api-data/table1-with-api-data.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { CallGenericTableComponent } from './call-generic-table/call-generic-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {MissionRoutingModule} from "../../missions/mission-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ToastrModule} from "ngx-toastr";
import {NgWizardModule} from "ng-wizard";
import {FormsRoutingModule} from "../forms/forms-routing.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [DataTableComponent, DefaultTableComponent, TableWithApiDataComponent, Table1WithApiDataComponent, GenericTableComponent, CallGenericTableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgWizardModule,
    FormsRoutingModule,
    NgSelectModule,
    CKEditorModule,
    AngularEditorModule,
    HttpClientModule,
  ]
})
export class TablesModule { }
