import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: "authInIt", pathMatch: 'full' },
    {
        path: 'authInIt',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'secure',
        loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule)
    },
]