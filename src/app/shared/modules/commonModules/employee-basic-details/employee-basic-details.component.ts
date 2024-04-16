import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EmployeeAllComponent } from '../employee-all/employee-all.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import employeeHeaderTabsJson from '../../../../../assets/stubs/Employees/employeeHeaderTabs.json'
import { EmployeeTitleComponent } from '../employee-title/employee-title.component';

@Component({
  selector: 'app-employee-basic-details',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MatDividerModule,EmployeeTitleComponent],
  templateUrl: './employee-basic-details.component.html',
  styleUrl: './employee-basic-details.component.scss'
})
export class EmployeeBasicDetailsComponent {
  
  employeeHeaderTabs = employeeHeaderTabsJson.employeesHeadertabs;
  activeTab: string = 'all';
  constructor(private router: Router,private route:ActivatedRoute) {}

  showComponent(tab: string): void {
    this.activeTab = tab;
    this.router.navigate([tab], { relativeTo: this.route });
  }


  showComponentall() {
    this.showComponent('all');  }
  
  showComponentactive(){
    this.showComponent('active');  }
  showComponentonleave(){}
  showComponentprobationary(){}
  showComponentresigned(){}
}
