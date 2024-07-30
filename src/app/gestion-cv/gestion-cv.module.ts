import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation/formation.component';
import { MaincvComponent } from './maincv/maincv.component';
import { CVRoutingModule } from './CV-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './experience/experience.component';
import { MatchingComponent } from './matching/matching.component';




@NgModule({
  declarations: [FormationComponent, MaincvComponent, ExperienceComponent, MatchingComponent],
  imports: [
    CommonModule,
    CVRoutingModule,
    FormsModule
  ]
})
export class GestionCvModule { }
