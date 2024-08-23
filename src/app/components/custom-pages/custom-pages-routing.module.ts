import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassword1Component } from './forget-password/forget-password1/forget-password1.component';
import { ForgetPassword2Component } from './forget-password/forget-password2/forget-password2.component';
import { LockScreen1Component } from './lock-screen/lock-screen1/lock-screen1.component';
import { LockScreen2Component } from './lock-screen/lock-screen2/lock-screen2.component';

import { Login1Component } from './login/login1/login1.component';
import { Login2Component } from './login/login2/login2.component';
import { Register1Component } from './register/register1/register1.component';
import { Register2Component } from './register/register2/register2.component';
import { ResetPassword1Component } from './reset-password/reset-password1/reset-password1.component';
import { ResetPassword2Component } from './reset-password/reset-password2/reset-password2.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'register/register-1', component: Register1Component},
            { path: 'register/register-2', component: Register2Component},
            { path: 'login/login-1', component: Login1Component},
            { path: 'login/login-2', component: Login2Component},
            { path: 'forget-password/forget-password-1', component: ForgetPassword1Component},
            { path: 'forget-password/forget-password-2', component: ForgetPassword2Component},
            { path: 'reset-password/reset-password-1', component: ResetPassword1Component},
            { path: 'reset-password/reset-password-2', component: ResetPassword2Component},
            { path: 'lockscreen/lockscreen-1', component: LockScreen1Component},
            { path: 'lockscreen/lockscreen-2', component: LockScreen2Component},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CustomPagesRoutingModule { }