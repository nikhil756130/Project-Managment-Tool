import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StatusChipComponent } from '../../../globalModule/status-chip/status-chip.component';
import { EmployeeProfileServiceService } from '../../../services/employee-profile-service.service';
import data from '../../../../../assets/stubs/Employees/employeeHeadings.json'
import { EmployeeBasicDetailsModel } from '../../../models/employeeBasicDetails.model';

@Component({
  selector: 'app-employee-profile-card-header',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    StatusChipComponent],
  templateUrl: './employee-profile-card-header.component.html',
  styleUrl: './employee-profile-card-header.component.scss'
})
export class EmployeeProfileCardHeaderComponent {

  profilePicture!: string;
  fullName!: string;
  designition!: string;
  status!: string;
  employeeId?: number;
  keys!: string[];
  // Accessing the data from JSON file
  keys1 = data.headings[0]
  basicDetails!: EmployeeBasicDetailsModel;

  constructor(private employeeServices: EmployeeProfileServiceService,) { }

  ngOnInit(): void {
    // Fetching the data through services
    this.employeeServices.employeeBasicDetails().subscribe( {
      next: (res) => {
        this.basicDetails = res.items[0];
      },
      error: (errors) => {
        console.log('Error while loading the employee profile header data' + errors);
      }
    })
  }
}
