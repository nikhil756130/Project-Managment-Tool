import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputFieldComponent } from "../../../globalModule/input-field/input-field.component";
import { DatePickerComponent } from '../../../globalModule/datepicker/datepicker.component';
import { DropdownComponent, IDropdownValue } from '../../../globalModule/dropdown/dropdown.component';
/*Imports*/
import inputfield from '../../../../../assets/stubs/Employees/inputfield.json';
import details from '../../../../../assets/stubs/Employees/datepicker.json';


@Component({
    selector: 'app-form-dialog',
    standalone: true,
    templateUrl: './form-dialog.component.html',
    styleUrl: './form-dialog.component.scss',
    imports: [CommonModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        InputFieldComponent,
        DatePickerComponent,
        DropdownComponent]
})
export class FormDialogComponent implements OnInit {
    salaryFormHeading = 'Add Salary';
    showForm: any;
    
    employeeSalaryForm!: FormGroup;

    constructor(public formbuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initializeForm();
        this.employeeSalaryForm = this.formbuilder.group({
            Workexperience: ['', Validators.required],
            Designation: ['', Validators.required],
            Salary: ['', Validators.required]
        })
    }


    initializeForm() {
        this.employeeSalaryForm = this.formbuilder.group({
            dropDownList: [''],
            Workexperience: [''],
            Designation: [''],
            calendar: [''],
            Salary: [''],
        });
    }
    
    /*Input fields*/
    workExperience = inputfield.WorkExperienceConfig;
    Designation = inputfield.DesignationConfig;
    Salary = inputfield.SalaryConfig;

    /*Datepicker*/
    calendar = details;

    // dropdown 
    dropDownList: IDropdownValue[] = [
        { value: 1, name: 'Software Engineer' },
        { value: 2, name: 'Product Manager' },
        { value: 3, name: 'Team Lead' }
    ]
    /*when u click on clear &  save salary buttons*/
    clearForm() {
        // Reset the form to its initial state
        this.employeeSalaryForm.reset();
    }

    saveSalary() {
        alert('Salary saved!');
    }
}
