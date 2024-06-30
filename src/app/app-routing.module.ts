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

const routes: Routes = [
  {path: 'auth/login', component: LoginPageComponent},
  {path: 'auth/register', component: RegisterPageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
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
