import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormDialogComponent } from "../../../shared/modules/commonModules/form-dialog/form-dialog.component";
import { SalaryDataComponent } from '../../../shared/modules/commonModules/salary-data/salary-data.component';
import { InputFieldComponent } from "../../../shared/globalModule/input-field/input-field.component";
/*Imports*/
import { InternshipService } from '../../../shared/modules/sharedServices/internship.service';

@Component({
  selector: 'app-employee-salary-form',
  standalone: true,
  templateUrl: './employee-salary-form.component.html',
  styleUrl: './employee-salary-form.component.scss',
  providers: [InternshipService],
  imports: [CommonModule,
    NgIf,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormDialogComponent,
    SalaryDataComponent,
     InputFieldComponent]
})
export class EmployeeSalaryFormComponent implements OnInit {
  salary = 'SALARY';
  ctc = 'Annual CTC';
  showForm = false;

  users: any;

  constructor(private salaryservice: InternshipService) { }
  
  ngOnInit(): void {
    this.salaryservice.employeeDocumentFetch().subscribe((res) => {
      this.users = res.items;
    })
  }

  openForm() {
    this.showForm = true;
  }
}

