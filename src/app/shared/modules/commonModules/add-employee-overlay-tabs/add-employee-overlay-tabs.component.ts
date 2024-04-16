import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { EmployeeAddDocumentsoverlayComponent } from '../../../../secure/Employee/employee-add-documentsoverlay/employee-add-documentsoverlay.component';

import { LeavePlanComponent } from '../leave-plan/leave-plan.component';
import { AddEmpProjectFormComponent } from 'src/app/secure/Employee/add-emp-project-form/add-emp-project-form.component';
import { AppEmployeeBasicDetailsComponent } from 'src/app/secure/Employee/app-employee-basic-details/app-employee-basic-details.component';
import { EmployeeSalaryFormComponent } from 'src/app/secure/Employee/employee-salary-form/employee-salary-form.component';
import employeeinfoHeaderTabsJson from '../../../../../assets/stubs/Employees/employeeinformationtabs.json';
import { AppOverlayTitleComponent } from 'src/app/shared/globalModule/app-overlay-title/app-overlay-title.component';
import { SchedulerComponent } from "../../../globalModule/scheduler/scheduler.component";
import { EmployeeJobDetailsComponent } from "../../../../secure/Employee/add-employee-job-details/add-employee-job-details.component";

@Component({
    selector: 'app-add-employee-overlay-tabs',
    standalone: true,
    templateUrl: './add-employee-overlay-tabs.component.html',
    styleUrl: './add-employee-overlay-tabs.component.scss',
    imports: [
        CommonModule,
        MatListModule,
        EmployeeSalaryFormComponent,
        MatIconModule,
        MatToolbarModule,
        MatDialogModule,
        NgIf,
        EmployeeAddDocumentsoverlayComponent,
        LeavePlanComponent,
        AddEmpProjectFormComponent,
        AppEmployeeBasicDetailsComponent,
        AppOverlayTitleComponent,
        SchedulerComponent,
        EmployeeJobDetailsComponent
    ]
})
export class AddEmployeeOverlayTabsComponent {
  employeeOverlayTabsJson =
    employeeinfoHeaderTabsJson.employeeInformationHeadertabs;

  componentSelected: string = 'basicdetails';
  selectedComponent: string = ''; // Declare the selectedComponent property
  overlayTitle: string = '';

  selectComponent(component: string) {
    this.componentSelected = component;
    this.selectedComponent = component; // Update selectedComponent when an item is clicked
  }
}
