import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPassword1Component } from './forget-password/forget-password1/forget-password1.component';
import { ForgetPassword2Component } from './forget-password/forget-password2/forget-password2.component';
import { ForgetPassword3Component } from './forget-password/forget-password3/forget-password3.component';

import { Login1Component } from './login/login1/login1.component';
import { Login2Component } from './login/login2/login2.component';
import { Login3Component } from './login/login3/login3.component';
import { Register1Component } from './register/register1/register1.component';
import { Register2Component } from './register/register2/register2.component';
import { Register3Component } from './register/register3/register3.component';
import { ResetPassword1Component } from './reset-password/reset-password1/reset-password1.component';
import { ResetPassword2Component } from './reset-password/reset-password2/reset-password2.component';
import { ResetPassword3Component } from './reset-password/reset-password3/reset-password3.component';
import { LockScreen1Component } from './lock-screen/lock-screen1/lock-screen1.component';
import { LockScreen2Component } from './lock-screen/lock-screen2/lock-screen2.component';
import { LockScreen3Component } from './lock-screen/lock-screen3/lock-screen3.component';
import { CustomPagesStylesRoutingModule } from './custom-pages-styles-routing.module';
import { CustomPagesRoutingModule } from './custom-pages-routing.module';



@NgModule({
  declarations: [ForgetPassword1Component, ForgetPassword2Component, ForgetPassword3Component, Login1Component, Login2Component, Login3Component, Register1Component, Register2Component, Register3Component, ResetPassword1Component, ResetPassword2Component, ResetPassword3Component, LockScreen1Component, LockScreen2Component, LockScreen3Component],
  imports: [
    CommonModule,
    CustomPagesRoutingModule,
    CustomPagesStylesRoutingModule
  ]
})
export class CustomPagesModule { }
