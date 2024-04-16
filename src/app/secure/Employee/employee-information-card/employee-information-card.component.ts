import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelAndValueComponent } from '../../../shared/globalModule/label-and-value/label-and-value.component';
/* importing Service */
import { EmployeeInformationService } from '../../../services/employee-information.service';
/* importing Model */
import { EmployeeInfoModel } from '../../../shared/models/employee-model.class';
import { HttpClientModule } from '@angular/common/http';

import { ImageWithTextComponent } from '../../../shared/globalModule/image-with-text/image-with-text.component';
import employeeCardInfo from '../../../../assets/stubs/Employees/employeeDetails.json';

@Component({
  selector: 'app-employee-information-card',
  standalone: true,
  imports: [CommonModule, LabelAndValueComponent, HttpClientModule, ImageWithTextComponent],
  templateUrl: './employee-information-card.component.html',
  styleUrl: './employee-information-card.component.scss',
  providers: [EmployeeInformationService]
})
export class EmployeeInformationCardComponent {
  data!: EmployeeInfoModel;
  employeeCardInfo = employeeCardInfo;
  constructor(public employeeData: EmployeeInformationService) {
    this.employeeData.getEmployeeInfo('assets/stubs/Employees/employeeDetails.json').subscribe((response: any) => {
      this.data = new EmployeeInfoModel(
        response.empolyeeInformation.username,
        response.empolyeeInformation.employeeId,
        response.empolyeeInformation.workExperience,
        response.empolyeeInformation.workEmail,
        response.empolyeeInformation.department,
        response.empolyeeInformation.designation,
        response.empolyeeInformation.joiningDate,
        response.empolyeeInformation.role,
        response.empolyeeInformation.iesAccessToken,
        response.empolyeeInformation.tfsusername
      );
    });
  }
}
