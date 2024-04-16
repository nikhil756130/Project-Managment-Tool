import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileCardBodyComponent } from '../employee-profile-card-body/employee-profile-card-body.component';
import { EmployeeProfileCardHeaderComponent } from '../employee-profile-card-header/employee-profile-card-header.component';
import { EmployeeProfileServiceService } from '../../../services/employee-profile-service.service';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [CommonModule,
    EmployeeProfileCardBodyComponent,
    EmployeeProfileCardHeaderComponent],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.scss',
  providers: [EmployeeProfileServiceService]
})
export class EmployeeProfileComponent {

}
