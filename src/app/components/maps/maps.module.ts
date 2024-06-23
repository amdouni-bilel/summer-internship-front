import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  declarations: [LeafletMapsComponent, GoogleMapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    LeafletModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA'
    }),
    HttpClientModule
  ]
})
export class MapsModule { }
