import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassword3Component } from './forget-password/forget-password3/forget-password3.component';
import { LockScreen3Component } from './lock-screen/lock-screen3/lock-screen3.component';
import { Login3Component } from './login/login3/login3.component';
import { Register3Component } from './register/register3/register3.component';
import { ResetPassword3Component } from './reset-password/reset-password3/reset-password3.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'register/register-3', component: Register3Component },
            { path: 'login/login-3', component: Login3Component },
            { path: 'forget-password/forget-password-3', component: ForgetPassword3Component },
            { path: 'reset-password/reset-password-3', component: ResetPassword3Component },
            { path: 'lockscreen/lockscreen-3', component: LockScreen3Component },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomPagesStylesRoutingModule { }