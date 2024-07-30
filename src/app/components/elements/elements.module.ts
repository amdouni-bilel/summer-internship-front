import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardImagesComponent } from './card-images/card-images.component';
import { CardsComponent } from './cards/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FootersComponent } from './footers/footers.component';
import { HeadersComponent } from './headers/headers.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectsComponent } from './media-objects/media-objects.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelsComponent } from './panels/panels.component';
import { PopOverComponent } from './pop-over/pop-over.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { TagsComponent } from './tags/tags.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [AccordionComponent, AlertsComponent, AvatarsComponent, BadgesComponent, BreadcrumbComponent, ButtonsComponent, CardImagesComponent, CardsComponent, DropdownComponent, FootersComponent, HeadersComponent, JumbotronComponent, ListGroupComponent, MediaObjectsComponent, ModalComponent, NavigationComponent, PaginationComponent, PanelsComponent, PopOverComponent, ProgressComponent, TabsComponent, TagsComponent, TooltipsComponent, DatepickerComponent, TimepickerComponent],
  imports: [
   
    CommonModule,
    ElementsRoutingModule,
    NgbModule,
    FormsModule,
    HighlightModule,
    NgSelectModule,
    ClipboardModule
  ],
  providers: [
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
  ],
})
export class ElementsModule { }
