import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImageWithTextComponent } from '../../../globalModule/image-with-text/image-with-text.component';
import { LabelAndValueComponent } from '../../../globalModule/label-and-value/label-and-value.component';
/*Imports*/
import data from '../../../../../assets/stubs/Employees/employeeSalaryHeading.json';
import { InternshipService } from '../../sharedServices/internship.service';

@Component({
  selector: 'app-salary-data',
  standalone: true,
  templateUrl: './salary-data.component.html',
  styleUrl: './salary-data.component.scss',
  imports: [CommonModule, ImageWithTextComponent, LabelAndValueComponent, HttpClientModule],
  providers: [InternshipService]
})
export class SalaryDataComponent implements OnInit {

  keys: any = data.headings[0];
  salarydetails: any;


  constructor(private salaryservice: InternshipService) { }
  
  ngOnInit(): void {
    this.salaryservice.employeeDocumentFetch().subscribe((res) => {
      this.salarydetails = res.items[0];
    });
  }
}
