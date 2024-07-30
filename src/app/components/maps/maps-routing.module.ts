import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';


const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'leaflet',
          component: LeafletMapsComponent
        },
        {
          path:'google',
          component: GoogleMapsComponent
        }
      ],
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MapsRoutingModule { }