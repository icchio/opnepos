import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component'
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component'
import { CassaComponent } from './pages/cassa/cassa.component'
import { UtentiComponent } from './pages/utenti/utenti.component'

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path : '', component: CassaComponent},
  { path : 'cassa', component : CassaComponent,canActivate: [AuthGuard]},
  { path : 'utenti', component: UtentiComponent,canActivate: [AuthGuard]},
  {
    path:  'accesso',
    children: [
        { path:  'login',component:  LoginComponent},
        { path:  'forgot-password', component:  ForgotPasswordComponent },
        { path:  'verify-email', component:  VerifyEmailComponent }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
