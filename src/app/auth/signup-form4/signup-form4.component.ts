import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/shared/globalModule/logo/logo.component';
import { ProgressTabComponent } from 'src/app/shared/globalModule/progress-tab/progress-tab.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormService } from '../authServices/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LabelInputFieldComponent } from 'src/app/shared/globalModule/label-input-field/label-input-field.component';

@Component({
  selector: 'app-signup-form4',
  standalone: true,
  imports: [CommonModule, LogoComponent, ProgressTabComponent, LabelInputFieldComponent, HttpClientModule],
  templateUrl: './signup-form4.component.html',
  styleUrl: './signup-form4.component.scss'
})
export class SignupForm4Component {
  textConfig!: any;

  displayPart: number = 4;
  tabsCount: number = 4;

  registrationForm4 = this.formService.initializeForm();

  constructor(private formService: FormService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    // Set values from form service
    const formData = this.formService.getFormData();
    this.registrationForm4.patchValue({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      newPassword: formData.newPassword,
      purpose: formData.purpose,
      category: formData.category,
      workspaceName: formData.workspaceName,
    });
  }

  ngOnInit(): void {
    this.http.get<any>('../../../../assets/stubs/Authentication/config.json').subscribe((data) => {
      const configData = data;
      this.textConfig = configData.textConfig;
    })
  }

// Navigate to the 'registrationPage-3' route relative to the current route
  getPrevious() {
    this.router.navigate(['../registration-page-3'], { relativeTo: this.route });
  }

  // Set form data from registrationForm4 and log it for verification
  onSubmitForm() {
    this.formService.setFormData(this.registrationForm4);
    console.log('Form Data:', this.formService.getFormData());
    // this.router.navigate(['../login'], { relativeTo: this.route });
  }
}