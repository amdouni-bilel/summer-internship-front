import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './authentication/login-page/login-page.component';

import {ContentStyleComponent} from './shared/components/layouts/content-style/content-style.component';
import {ContentComponent} from './shared/components/layouts/content/content.component';
import {FullContentComponent} from './shared/components/layouts/full-content/full-content.component';
import {content} from './shared/routes/content-routes';
import {custom_style} from './shared/routes/custom-content-routes';
import {full} from './shared/routes/full-content-routes';
import {AuthGuard} from './auth.guard';
import {RegisterPageComponent} from './authentication/register-page/register-page.component';
import {AddUserComponent} from "./users/add-user/add-user.component";
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { AccueilComponent } from './authentication/accueil/accueil.component';
import { ListCongesComponent } from './conges/list-conges/list-conges.component';




const routes: Routes = [
  {path: 'auth/login', component: LoginPageComponent},
  {path: 'auth/register', component: RegisterPageComponent},
  {path: 'auth/forgot-password', component: ForgotPasswordComponent},
  { path: 'auth/reset-password', component: ResetPasswordComponent },
  {path: 'accueil', component: AccueilComponent},






  
  
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  //{path: '', component: ContentComponent, children: content, canActivate: [AuthGuard]},
  {path: '', component: ContentComponent, children: content},
  //{path: '', component: FullContentComponent, children: full, canActivate: [AuthGuard]},
  {path: '', component: FullContentComponent, children: full,},
  //{path: '', component: ContentStyleComponent, children: custom_style, canActivate: [AuthGuard]},
  {path: '', component: ContentStyleComponent, children: custom_style,},
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
