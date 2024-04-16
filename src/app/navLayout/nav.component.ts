import { Component, Type, inject, ComponentFactoryResolver, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';

import { DashboardComponent } from '../secure/dashboard/dashboard.component';
import { ProjectsComponent } from '../secure/projects/projects/projects.component';
import { SettingsComponent } from '../secure/settings/settings/settings.component';
import { MeetingsComponent } from '../secure/meetings/meetings/meetings.component';
import { TicketsComponent } from '../secure/tickets/tickets/tickets.component';
import { UserManagementComponent } from '../secure/userManagement/user-management/user-management.component';
import { ReportsComponent } from '../secure/Reports/reports/reports.component';
import { FileManagerComponent } from '../secure/fileManager/file-manager/file-manager.component';
import { InboxComponent } from '../secure/inbox/inbox/inbox.component';
import { TimesheetsComponent } from '../secure/timeSheets/timesheets/timesheets.component';
import { CustomersComponent } from '../secure/customers/customers/customers.component';
import { WorkItemsComponent } from '../secure/workItems/work-items/work-items.component';
import { HttpClientModule } from '@angular/common/http';
import { InitialLayoutServiceService } from '../shared/services/initialLayout/initial-layout-service.service';
import { Router } from '@angular/router';
import { UserComponent } from '../shared/modules/commonModules/user/user.component';

@Component({
  selector: 'app-nav-new',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  providers: [InitialLayoutServiceService],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatCardModule,
    NgIf,
    CommonModule,
    DashboardComponent,
    ProjectsComponent,
    WorkItemsComponent,
    CustomersComponent,
    TimesheetsComponent,
    InboxComponent,
    FileManagerComponent,
    ReportsComponent,
    UserManagementComponent,
    TicketsComponent,
    MeetingsComponent,
    SettingsComponent,
    HttpClientModule,
    UserComponent
  ]
})
export class NavComponentNew implements OnInit {
  selectedComponent!: Type<any>;
  menuItems!: any[];

  constructor(private layOutService: InitialLayoutServiceService, private router: Router,
  ) { }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.getLayoutContent();
  }

  getLayoutContent() {
    this.layOutService.initialLayoutSideNavContentFetch().subscribe((data) => {
      this.menuItems = data.sideContent;
    })
  }

  onSignOut() {
    this.router.navigate(['/login']);
  }

  selectComponent(component: string): void {
    this.selectedComponent = this.getComponentType(component);
  }

  getComponentType(component: string): Type<any> {
    switch (component) {
      case 'dashboard':
        return DashboardComponent;
      case 'projects':
        return ProjectsComponent;
      case 'workitems':
        return WorkItemsComponent;
      // case 'employees':
      //   return EmployeesComponent;
      case 'customers':
        return CustomersComponent;
      case 'timesheets':
        return TimesheetsComponent;
      case 'inbox':
        return InboxComponent;
      case 'filemanager':
        return FileManagerComponent;
      case 'reports':
        return ReportsComponent;
      case 'usermanagement':
        return UserManagementComponent;
      case 'tickets':
        return TicketsComponent;
      case 'meetings':
        return MeetingsComponent;
      case 'settings':
        return SettingsComponent;
      default:
        return DashboardComponent;
    }
  }
}