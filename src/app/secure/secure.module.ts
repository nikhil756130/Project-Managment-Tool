import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureInitComponent } from './secure-init/secure-init.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { secureRoutes } from './secure.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from '../shared/modules/commonModules/user/user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SecureInitComponent],
  imports: [
    CommonModule,
    UserComponent,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    RouterOutlet
  ],
  providers: [provideRouter(secureRoutes)]


})
export class SecureModule { }
