import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardImagesComponent } from './card-images/card-images.component';
import { CardsComponent } from './cards/cards.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
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
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipsComponent } from './tooltips/tooltips.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accordion',
        component: AccordionComponent
      },
      {
        path: 'alerts',
        component: AlertsComponent
      },
      {
        path: 'avatars',
        component: AvatarsComponent
      },
      {
        path: 'badges',
        component: BadgesComponent
      },
      {
        path: 'breadcrumbs',
        component: BreadcrumbComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'card-images',
        component: CardImagesComponent
      },
      {
        path: 'dropdown',
        component: DropdownComponent
      },
      {
        path: 'footers',
        component: FootersComponent
      },
      {
        path: 'headers',
        component: HeadersComponent
      },
      {
        path: 'jumbotron',
        component: JumbotronComponent
      },
      {
        path: 'list-group',
        component: ListGroupComponent
      },
      {
        path: 'media-object',
        component: MediaObjectsComponent
      },
      {
        path: 'modal',
        component: ModalComponent
      },
      {
        path: 'navigation',
        component: NavigationComponent
      },
      {
        path: 'pagination',
        component: PaginationComponent
      },
      {
        path: 'panels',
        component: PanelsComponent
      },
      {
        path: 'popover',
        component: PopOverComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'tags',
        component: TagsComponent
      },
      {
        path: 'tooltips',
        component: TooltipsComponent
      },
      {
        path: 'datepicker',
        component: DatepickerComponent
      },
      {
        path: 'timepicker',
        component: TimepickerComponent
      },

    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }