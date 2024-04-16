import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { JobDetailsComponent } from "./secure/Employee/job-details/job-details.component";
import { TableComponent } from "./shared/globalModule/table/table.component";
import { AddEmpProjectTableComponent } from "./secure/Employee/add-emp-project-table/add-emp-project-table.component";
import { ProjectStatusComponent } from "./shared/globalModule/project-status/project-status.component";
import { AddEmpProjectFormComponent } from "./secure/Employee/add-emp-project-form/add-emp-project-form.component";
import { AddEmployeeOverlayTabsComponent } from "./shared/modules/commonModules/add-employee-overlay-tabs/add-employee-overlay-tabs.component";
import { ProjectManagerComponent } from "./shared/globalModule/project-manager/project-manager.component";

import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    JobDetailsComponent, 
    TableComponent, 
    AddEmpProjectTableComponent,
    ProjectStatusComponent, 
    AddEmpProjectFormComponent,
    AddEmployeeOverlayTabsComponent,
    ProjectManagerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jpm-Tool';
}
