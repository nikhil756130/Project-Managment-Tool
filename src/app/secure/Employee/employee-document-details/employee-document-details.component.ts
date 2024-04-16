import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InputFieldComponent } from 'src/app/shared/globalModule/input-field/input-field.component';
import data from "../../../../assets/stubs/Employees/employeeHeadings.json"
import inputFieldJSON from '../../../../assets/stubs/Employees/employeeDocuments.json'
import { FormBuilder, Validators } from '@angular/forms';
import { DatePickerComponent } from 'src/app/shared/globalModule/datepicker/datepicker.component';

@Component({
  selector: 'app-employee-document-details',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule, 
    MatButtonModule,
    InputFieldComponent,
    DatePickerComponent
  ],
  templateUrl: './employee-document-details.component.html',
  styleUrl: './employee-document-details.component.scss'
})

export class EmployeeDocumentDetailsComponent implements OnInit{

  // Accessing the data from JSON file 
  nameConfig=inputFieldJSON.documentForm;
  heading1:any = data.headings[0];
  
  documentForm!:any;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    // Form controls
    this.documentForm=this.fb.group({
      name:['',Validators.required],
      dateCreated:['',Validators.required]
    })
  }
}