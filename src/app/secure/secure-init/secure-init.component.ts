import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialLayoutServiceService } from '../../shared/services/initial-layout-service.service';
import { InitialLayoutSideNavContentModel } from '../../shared/models/initialLayoutModel';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from 'src/app/shared/modules/commonModules/user/user.component';


@Component({
  selector: 'app-secure-init',
  templateUrl: './secure-init.component.html',
  styleUrl: './secure-init.component.scss',
  providers: [InitialLayoutServiceService]
})
export class SecureInitComponent {
  menuItems: InitialLayoutSideNavContentModel[] = [];
  isSideNavOpened = true;
  constructor(private layOutService: InitialLayoutServiceService) { }

  ngOnInit(): void {
    this.getLayoutContent();
  }

  getLayoutContent() {
    this.layOutService.initialLayoutSideNavContentFetch().subscribe((data) => {
      this.menuItems = data.sideContent;
    })
  }

}
