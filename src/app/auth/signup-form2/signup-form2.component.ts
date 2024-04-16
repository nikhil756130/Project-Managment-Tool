import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { LogoComponent } from 'src/app/shared/globalModule/logo/logo.component';
import { ProgressTabComponent } from 'src/app/shared/globalModule/progress-tab/progress-tab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormService } from '../authServices/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-form2',
  standalone: true,
  imports: [CommonModule, MatRadioModule, LogoComponent, ProgressTabComponent, ReactiveFormsModule, FormsModule, MatSelectModule],
  templateUrl: './signup-form2.component.html',
  styleUrl: './signup-form2.component.scss'
})
export class SignupForm2Component {
  displayPart: number = 2;
  tabsCount: number = 4;

  registrationForm2 = this.formService.initializeForm();

  constructor(private formService: FormService, private router: Router, private route: ActivatedRoute) {
    // Set values from form service
    const formData = this.formService.getFormData();
    this.registrationForm2.patchValue({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      newPassword: formData.newPassword,
      purpose: formData.purpose,
    });
  }

  // Navigate to the 'registrationPage-3' route relative to the current route
  getPrevious() {
    this.router.navigate(['../registration-page-1'], { relativeTo: this.route });
  }

  // Sets form data and navigate to registrationPage-2 when progressing to the next part
  getNext() {
    this.formService.setFormData(this.registrationForm2);
    this.router.navigate(['../registration-page-3'], { relativeTo: this.route });
  }
}