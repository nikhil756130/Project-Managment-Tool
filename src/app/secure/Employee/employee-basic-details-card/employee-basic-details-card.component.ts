import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageWithTextComponent } from '../../../shared/globalModule/image-with-text/image-with-text.component';
import { LabelAndValueComponent } from '../../../shared/globalModule/label-and-value/label-and-value.component';
import { EmployeeBasicDetailsCardService } from '../../../shared/services/employee-basic-details-card.service';
import { EmployeeBasicDetailsCard } from '../../../shared/models/employee-basic-details-card';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-basic-details-card',
  standalone: true,
  imports: [CommonModule, ImageWithTextComponent, LabelAndValueComponent, HttpClientModule, MatCardModule],
  templateUrl: './employee-basic-details-card.component.html',
  styleUrls: ['./employee-basic-details-card.component.scss'],
  providers: [EmployeeBasicDetailsCardService]
})
export class EmployeeBasicDetailsCardComponent implements OnInit {
  data!: EmployeeBasicDetailsCard;
  employeeCardInfo: any;

  constructor(public employeeData: EmployeeBasicDetailsCardService) { }

  ngOnInit(): void {
    this.employeeData.getEmployeeInfo('/assets/stubs/Employees/employeeBasicDetailsCard.json').subscribe(
      (response: any) => {
        this.data = new EmployeeBasicDetailsCard(
          response.empolyeeInformation.fullname,
          response.empolyeeInformation.phone,
          response.empolyeeInformation.dateofbirth,
          response.empolyeeInformation.email,
          response.empolyeeInformation.gender,
          response.empolyeeInformation.address1,
          response.empolyeeInformation.country,
          response.empolyeeInformation.state,
          response.empolyeeInformation.address2,
          response.empolyeeInformation.city,
          response.empolyeeInformation.pincode,
          response.empolyeeInformation.emefullname,
          response.empolyeeInformation.emephonenumber,
          response.empolyeeInformation.relationsip,
        );
      });
  }
}