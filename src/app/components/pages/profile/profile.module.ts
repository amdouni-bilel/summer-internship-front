import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { Profile3Component } from './profile3/profile3.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [Profile1Component, Profile2Component, Profile3Component],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbModule
  ]
})
export class ProfileModule { }
