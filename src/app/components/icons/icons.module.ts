import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherComponent } from './feather/feather.component';
import { FlagComponent } from './flag/flag.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { IonicComponent } from './ionic/ionic.component';
import { MaterialSvgsComponent } from './material-svgs/material-svgs.component';
import { Pe7Component } from './pe7/pe7.component';
import { SimpleLineComponent } from './simple-line/simple-line.component';
import { ThemifyComponent } from './themify/themify.component';
import { TypiconsComponent } from './typicons/typicons.component';
import { WeatherComponent } from './weather/weather.component';
import { IconsRoutingModule } from './icons-routing.module';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FeatherComponent, FlagComponent, FontAwesomeComponent, IonicComponent, MaterialDesignComponent, MaterialSvgsComponent, Pe7Component, SimpleLineComponent, ThemifyComponent, TypiconsComponent, WeatherComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    NgbModule
  ]
})
export class IconsModule { }
