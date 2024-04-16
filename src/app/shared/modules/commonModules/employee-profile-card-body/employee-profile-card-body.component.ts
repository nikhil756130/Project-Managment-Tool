import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LabelAndValueComponent } from '../../../globalModule/label-and-value/label-and-value.component';
import { EmployeeProfileServiceService } from '../../../services/employee-profile-service.service';
import { EmployeejobDetailsModel } from '../../../models/employeeJobDetails.model';
import data from '../../../../../assets/stubs/Employees/employeeHeadings.json'

@Component({
  selector: 'app-employee-profile-card-body',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    LabelAndValueComponent],
  templateUrl: './employee-profile-card-body.component.html',
  styleUrl: './employee-profile-card-body.component.scss'
})

export class EmployeeProfileCardBodyComponent implements OnInit {

  key1: any = data.headings[0];
  id!: number;
  jobDetails!: EmployeejobDetailsModel;

  constructor(private employeeServices: EmployeeProfileServiceService) { }

  ngOnInit(): void {
    // Featching the data through services
    this.employeeServices.employeeJobDetails().subscribe({
      next: (res) => {
        this.jobDetails = res.items[0];
      },
      error: (errors) => {
        console.log('Error while loading the employee profile header data' + errors);
      }
    })
  }
}
