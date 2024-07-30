import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderComponent } from './border/border.component';
import { ColorsComponent } from './colors/colors.component';
import { DisplayComponent } from './display/display.component';
import { FlexItemsComponent } from './flex-items/flex-items.component';
import { HeightComponent } from './height/height.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { TyphographyComponent } from './typhography/typhography.component';
import { WidthComponent } from './width/width.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [BorderComponent, ColorsComponent, DisplayComponent, FlexItemsComponent, HeightComponent, MarginComponent, PaddingComponent, TyphographyComponent, WidthComponent],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    NgbModule,
    HighlightModule,
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
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
})
export class UtilitiesModule { }
