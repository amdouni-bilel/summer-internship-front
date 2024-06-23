import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginPageComponent} from './authentication/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {NgxEchartsModule} from 'ngx-echarts';
import 'hammerjs';
import 'mousetrap';
import {GalleryModule} from '@ks89/angular-modal-gallery';
import {NotifierModule} from 'angular-notifier';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './interceptor';
import {AuthService} from './authentication/auth.service';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from 'src/environments/environment';
import {ApiModule} from './api/api.module';
import {CraModule} from './cra/cra.module';
import {FacturationModule} from './facturation/facturation.module';
import {GestionCvModule} from './gestion-cv/gestion-cv.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MailmanagerService} from './administration/mailmanager/mailmanager.service';
import {SmtpService} from './administration/smtp/smtp.service';
import {RegisterPageComponent} from './authentication/register-page/register-page.component';

// import { MailmanagerService } from './administration/mailmanager/mailmanager.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,

  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GalleryModule.forRoot(),
    NgxEchartsModule,
    NotifierModule,
    HttpClientModule,
    ApiModule,
    CraModule,
    FacturationModule,
    GestionCvModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: [environment.local],
        disallowedRoutes: [
          environment.local + '/auth/login'
        ],
      },
    }),
  ],
  providers: [
    SmtpService,
    MailmanagerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, AuthService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
