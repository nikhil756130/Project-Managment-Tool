import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter } from '@angular/router';
import { authRoutes } from './auth.routes';
import { AuthInitComponent } from './auth-init/auth-init.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, 
    AuthInitComponent,
   
  ],
  providers: [provideRouter(authRoutes)]
})
export class AuthModule { }
