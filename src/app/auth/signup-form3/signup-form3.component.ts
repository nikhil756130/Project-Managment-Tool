import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { LogoComponent } from 'src/app/shared/globalModule/logo/logo.component';
import { ProgressTabComponent } from 'src/app/shared/globalModule/progress-tab/progress-tab.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../authServices/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-form3',
  standalone: true,
  imports: [CommonModule, MatRadioModule, LogoComponent, ProgressTabComponent, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup-form3.component.html',
  styleUrl: './signup-form3.component.scss'
})
export class SignupForm3Component {
  displayPart: number = 3;
  tabsCount: number = 4;

  registrationForm3 = this.formService.initializeForm();

  constructor(private formService: FormService, private router: Router, private route: ActivatedRoute) {
    // Set values from form service
    const formData = this.formService.getFormData();
    this.registrationForm3.patchValue({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      newPassword: formData.newPassword,
      purpose: formData.purpose,
      category: formData.category,
    });
  }

  // Navigate to the 'registrationPage-3' route relative to the current route
  getPrevious() {
    this.router.navigate(['../registration-page-2'], { relativeTo: this.route });
  }

  // Sets form data and navigate to registrationPage-2 when progressing to the next part
  getNext() {
    this.formService.setFormData(this.registrationForm3);
    this.router.navigate(['../registration-page-4'], { relativeTo: this.route });
  }

}


// getCategoryOptions() {
//   const purpose = this.registrationForm2.get('purpose')?.value;
//   switch (purpose) {
//     case 'work':
//       return [
//         { value: 'webApp', label: 'Web Application' },
//         { value: 'mobileApp', label: 'Mobile Application' },
//         { value: 'desktopApp', label: 'Desktop Application' }
//       ];
//     case 'education':
//       return [
//         { value: 'learning', label: 'Option 2A' },
//         { value: 'designApp', label: 'Option 2B' },
//         { value: 'codePractice', label: 'Option 2C' }
//       ];
//     case 'personal':
//       return [
//         { value: 'internProject', label: 'Internal Project' },
//         { value: 'externProject', label: 'External Project' },
//         { value: 'freelance', label: 'Freelance Project' }
//       ];
//     default:
//       return [];
//   }
// }