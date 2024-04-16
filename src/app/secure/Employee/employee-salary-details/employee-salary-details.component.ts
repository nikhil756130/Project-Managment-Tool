import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LabelAndValueComponent } from "../../../shared/globalModule/label-and-value/label-and-value.component";
import { HttpClientModule } from '@angular/common/http';
import { ImageWithTextComponent } from "../../../shared/globalModule/image-with-text/image-with-text.component";
/*Imports*/
import data from "../../../../assets/stubs/Employees/employeeSalaryHeading.json";
import { SalarydetailsServiceTsService } from 'src/app/shared/services/salarydetails.service.ts.service';

@Component({
  selector: 'app-employee-salary-details',
  standalone: true,
  templateUrl: './employee-salary-details.component.html',
  styleUrl: './employee-salary-details.component.scss',
  providers: [SalarydetailsServiceTsService],
  imports: [CommonModule, LabelAndValueComponent, HttpClientModule, ImageWithTextComponent, MatCardModule]
})

export class EmployeeSalaryDetailsComponent implements OnInit {

  salary = '7,50,000';

  salarydetails!: any;
  keys: any = data.headings[0];

  fullTimeDetails!: any;
  fullTimekeys: string[] = [];

  annualSalaryDetails!: any;
  annualTimeKeys: string[] = [];

  constructor(private service: SalarydetailsServiceTsService) { }

  ngOnInit(): void {
    /*Fetching salary details using the Service and initializes salarydetails property*/
    this.service.getSalaryDetails().subscribe((res) => {
      this.salarydetails = res.Employeesalary[0];
    })
    /*Fetching fulltime salary and initializes fullTimeDetails property*/
    this.service.getFulltimeDetails().subscribe((res) => {
      this.fullTimeDetails = res.items[0];
    })
    /*Fetching Annual Salary and initializes annualAppraisal property*/
    this.service.getAnnualDetails().subscribe((res) => {
      this.annualSalaryDetails = res.Annualsalary[0];
    })
  }
}
