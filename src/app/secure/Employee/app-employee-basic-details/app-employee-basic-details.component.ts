import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../../shared/globalModule/input-field/input-field.component';
import { MatSelectModule } from '@angular/material/select';
import { DropdownComponent, IDropdownValue } from '../../../shared/globalModule/dropdown/dropdown.component';
import { DatePickerComponent } from '../../../shared/globalModule/datepicker/datepicker.component';
import { EmployeeBasicDetailsCardService } from 'src/app/shared/services/employee-basic-details-card.service';
import { EmailFieldComponent } from 'src/app/shared/globalModule/email-field/email-field.component';
import basicDetailsJsonData from '../../../../assets/stubs/Employees/employeeBasicDetails.json';
import { HorizontalTextDecoratorComponent } from 'src/app/shared/globalModule/horizontal-text-decorator/horizontal-text-decorator.component';
import { TextWithImageUploadComponent } from 'src/app/shared/globalModule/text-with-image-upload/text-with-image-upload.component';


@Component({
  selector: 'app-app-employee-basic-details',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    InputFieldComponent,
    MatSelectModule,
    DropdownComponent,
    DatePickerComponent,
    EmailFieldComponent,
    HorizontalTextDecoratorComponent,
    TextWithImageUploadComponent
  ],
  templateUrl: './app-employee-basic-details.component.html',
  styleUrl: './app-employee-basic-details.component.scss',
  providers: [EmployeeBasicDetailsCardService]
})
export class AppEmployeeBasicDetailsComponent implements OnInit {
  emailInput = basicDetailsJsonData.emailConfig;
  phoneNumber = basicDetailsJsonData.phoneNumberConfig;
  firstAddressInput = basicDetailsJsonData.address1Config;
  secondAddressInput = basicDetailsJsonData.address2Config;
  countryInput = basicDetailsJsonData.countryConfig;
  cityInput = basicDetailsJsonData.cityConfig;
  stateInput = basicDetailsJsonData.stateConfig;
  zipcodeInput = basicDetailsJsonData.zipcodeConfig;
  fullnameInput = basicDetailsJsonData.fullnameConfig;
  relationshipInput = basicDetailsJsonData.relationshipConfig;
  gender = basicDetailsJsonData.gender;
  personalInformation = basicDetailsJsonData.personalinformation;
  basicDetailsaddress = basicDetailsJsonData.address;
  emergencyContact = basicDetailsJsonData.emergencycontact;
  basicDetails = basicDetailsJsonData.basicdetails;
  profilePicture = basicDetailsJsonData.profilepicture;

  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeBasicDetailsCardService
  ) { }

  employeeForm: any;

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      fullName: [''],
      profilePicture: [''],
      email: [''],
      phoneNumber: [''],
      gender: [''],
      dateOfBirth: [''],
      address1: [''],
      address2: [''],
      country: [''],
      city: [''],
      state: [''],
      zipcode: [''],
      emergencyFullname: [''],
      emergencyRelationship: [''],
      emergencyPhoneNumber: [''],
    })
  }
  selectedFileName: string | undefined;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFileName = file ? file.name : undefined;
  }


}



