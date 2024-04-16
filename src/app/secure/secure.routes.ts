import { Routes } from '@angular/router';
import { SecureInitComponent } from './secure-init/secure-init.component';
import { EmployeeBasicDetailsComponent } from '../shared/modules/commonModules/employee-basic-details/employee-basic-details.component';
import { EmployeeAllComponent } from '../shared/modules/commonModules/employee-all/employee-all.component';
import { EmployeeinformationtabsComponent } from '../shared/modules/commonModules/employeeinformationtabs/employeeinformationtabs.component';
import { EmployeeBasicDetailsCardComponent } from './Employee/employee-basic-details-card/employee-basic-details-card.component';
import { JobDetailsComponent } from './Employee/job-details/job-details.component';
import { AddEmpProjectTableComponent } from './Employee/add-emp-project-table/add-emp-project-table.component';
import { EmployeeSalaryDetailsComponent } from './Employee/employee-salary-details/employee-salary-details.component';
import { EmployeeDocumentsComponent } from './Employee/employee-documents/employee-documents.component';
import { LeavePlanComponent } from '../shared/modules/commonModules/leave-plan/leave-plan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { WorkItemsComponent } from './workItems/work-items/work-items.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { TimesheetsComponent } from './timeSheets/timesheets/timesheets.component';
import { InboxComponent } from './inbox/inbox/inbox.component';
import { FileManagerComponent } from './fileManager/file-manager/file-manager.component';
import { ReportsComponent } from './Reports/reports/reports.component';
import { UserManagementComponent } from './userManagement/user-management/user-management.component';
import { TicketsComponent } from './tickets/tickets/tickets.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { MeetingsComponent } from './meetings/meetings/meetings.component';

export const secureRoutes: Routes = [
  {
    path: '',
    component: SecureInitComponent,
    children: [
      {
        path: 'secure',
        loadChildren: () =>
          import('./secure.module').then((m) => m.SecureModule),
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'workitems',
        component: WorkItemsComponent,
      },
      {
        path: 'employees',
        component: EmployeeBasicDetailsComponent,
        children: [
          {
            path: 'all',
            component: EmployeeAllComponent,
          },
          { path: 'active', component: EmployeeAllComponent },
        ],
      },
      {
        path: 'each-employee-details',
        component: EmployeeinformationtabsComponent,
        children: [
          {
            path: 'basic-details',
            component: EmployeeBasicDetailsCardComponent,
          },
          { path: 'job-details', component: JobDetailsComponent },
          { path: 'project-details', component: AddEmpProjectTableComponent },
          { path: 'salary-details', component: EmployeeSalaryDetailsComponent },
          { path: 'document-details', component: EmployeeDocumentsComponent },
          { path: 'leavePlan-details', component: LeavePlanComponent },
        ],
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'timesheets',
        component: TimesheetsComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
      {
        path: 'filemanager',
        component: FileManagerComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'usermanagement',
        component: UserManagementComponent,
      },
      {
        path: 'tickets',
        component: TicketsComponent,
      },
      {
        path: 'meetings',
        component: MeetingsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];
