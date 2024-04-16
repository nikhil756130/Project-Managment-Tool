import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/shared/globalModule/logo/logo.component';
import { EmailFieldComponent } from 'src/app/shared/globalModule/email-field/email-field.component';
import { PasswordFieldComponent } from 'src/app/shared/globalModule/password-field/password-field.component';
import { ImageUploadComponent } from 'src/app/shared/globalModule/image-upload/image-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../authServices/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressTabComponent } from 'src/app/shared/globalModule/progress-tab/progress-tab.component';
import { LabelInputFieldComponent } from 'src/app/shared/globalModule/label-input-field/label-input-field.component';

@Component({
  selector: 'app-signup-form1',
  standalone: true,
  imports: [CommonModule, LogoComponent, ProgressTabComponent, EmailFieldComponent, LabelInputFieldComponent, PasswordFieldComponent, ImageUploadComponent, FormsModule, ReactiveFormsModule, HttpClientModule, MatFormFieldModule, MatInputModule],
  templateUrl: './signup-form1.component.html',
  styleUrl: './signup-form1.component.scss'
})
export class SignupForm1Component implements OnInit {
  passwordConfig!: any;
  emailConfig!: any;
  textConfig!: any;

  displayPart: number = 1;
  tabsCount: number = 4;

  registrationForm1 = this.formService.initializeForm();

  constructor(private formService: FormService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    // Set values from form service
    const formData = this.formService.getFormData();
    this.registrationForm1.patchValue({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      newPassword: formData.newPassword,
    });
  }

  ngOnInit(): void {
    this.http.get<any>('../../../../assets/stubs/Authentication/config.json').subscribe((data) => {
      const configData = data;
      this.passwordConfig = configData.passwordConfig;
      this.emailConfig = configData.emailConfig;
      this.textConfig = configData.textConfig;
    })
  }

  // Sets form data and navigate to registrationPage-2 when progressing to the next part
  showPart() {
    this.formService.setFormData(this.registrationForm1);
    this.router.navigate(['../registration-page-2'], { relativeTo: this.route });
  }
}