import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import employeeinfoHeaderTabsJson from '../../../../../assets/stubs/Employees/employeeinformationtabs.json'
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { EmployeeProfileComponent } from "../employee-profile/employee-profile.component";
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTitleComponent } from '../employee-title/employee-title.component';
@Component({
  selector: 'app-employeeinformationtabs',
  standalone: true,
  templateUrl: './employeeinformationtabs.component.html',
  styleUrl: './employeeinformationtabs.component.scss',
  imports: [CommonModule, MatDividerModule, RouterOutlet, EmployeeProfileComponent, HttpClientModule, EmployeeTitleComponent]
})
export class EmployeeinformationtabsComponent {
  employeeInformationHeaderTabs = employeeinfoHeaderTabsJson.employeeInformationHeadertabs;
  activeTab: string = 'basic-details';
  constructor(private router: Router, private route: ActivatedRoute) { }
  showComponent(tab: string): void {
    this.activeTab = tab;
    this.router.navigate([tab], { relativeTo: this.route });
  }
  showComponentBasicDetails() {
    this.showComponent('basic-details');
  }
  showComponentJobDetails() {
    this.showComponent('job-details');
  }
  showComponentProjects() {
    this.showComponent('project-details');
  }
  showComponentSalary() {
    this.showComponent('salary-details');
  }
  showComponentDocuments() {
    this.showComponent('document-details');
  }
  showComponentLeavePlan() {

    this.showComponent('leavePlan-details');
  }
}