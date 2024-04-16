import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthInitComponent } from './auth-init/auth-init.component';
import { SignupForm1Component } from './signup-form1/signup-form1.component';
import { SignupForm2Component } from './signup-form2/signup-form2.component';
import { SignupForm3Component } from './signup-form3/signup-form3.component';
import { SignupForm4Component } from './signup-form4/signup-form4.component';
import { CheckInboxComponent } from './signup-check-inbox/check-inbox.component';

export const authRoutes: Routes = [
    {
        path: '', component: AuthInitComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password', component: ResetPasswordComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'check-inbox', component: CheckInboxComponent },
            { path: 'registration-page-1', component: SignupForm1Component },
            { path: 'registration-page-2', component: SignupForm2Component },
            { path: 'registration-page-3', component: SignupForm3Component },
            { path: 'registration-page-4', component: SignupForm4Component },
        ]
    },
];