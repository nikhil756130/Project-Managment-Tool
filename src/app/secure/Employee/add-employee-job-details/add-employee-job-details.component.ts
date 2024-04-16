import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelAndValueComponent } from "../../../shared/globalModule/label-and-value/label-and-value.component";
import { ImageWithTextComponent } from "../../../shared/globalModule/image-with-text/image-with-text.component";
import { InputFieldComponent } from "../../../shared/globalModule/input-field/input-field.component";
import employeeAddJobDetails from "../../../../assets/stubs/Employees/employeeAddJobDetails.json";
import { EmailFieldComponent } from "../../../shared/globalModule/email-field/email-field.component";
import { DropdownComponent } from "../../../shared/globalModule/dropdown/dropdown.component";
import { DatePickerComponent } from "../../../shared/globalModule/datepicker/datepicker.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TimePickerComponent } from "../../../shared/globalModule/time-picker/time-picker.component";
import { CheckboxWithTimePickerComponent } from "../../../shared/globalModule/checkbox-with-time-picker/checkbox-with-time-picker.component";
@Component({
    selector: 'app-add-employee-job-details',
    standalone: true,
    templateUrl: './add-employee-job-details.component.html',
    styleUrl: './add-employee-job-details.component.scss',
    imports: [CommonModule, LabelAndValueComponent, ImageWithTextComponent, InputFieldComponent, EmailFieldComponent, DropdownComponent, DatePickerComponent, TimePickerComponent, CheckboxWithTimePickerComponent]
})
export class EmployeeJobDetailsComponent implements OnInit{
    /* headings */
    employeeInformationConfig=employeeAddJobDetails;

    usernameConfig=employeeAddJobDetails.userName;

    employeeInformationForm!:FormGroup;
    prohibationInformationForm!:FormGroup;
    jobTimelineInformationForm!:FormGroup;
    workScheduleInformationForm!:FormGroup;

    constructor(public formbuilder:FormBuilder){}

    ngOnInit(): void {
        this.employeeInformationForm=this.formbuilder.group({
            username:['',Validators.required],
            employeeId:['',Validators.required],
            workExperience:['',Validators.required],
            workEmail:[''],
            department:[''],
            designation:[''],
            joiningDate:[''],
            role:['']
        });
        this.prohibationInformationForm=this.formbuilder.group({
            result:['',Validators.required],
            comments:['',Validators.required]
        });
        this.jobTimelineInformationForm=this.formbuilder.group({
            jobTitle:['',Validators.required],
            office:['', Validators.required],
            manager:['',Validators.required]
        });
        this.workScheduleInformationForm=this.formbuilder.group({
            standarWorkHours:['',Validators.required],
            totalWorkHours:['',Validators.required],
            timepicker:['',Validators.required]
        });
    }

}


