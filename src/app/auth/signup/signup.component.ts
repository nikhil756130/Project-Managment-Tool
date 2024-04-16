import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import jsonLables1 from '../../../assets/stubs/Authentication/welcomeMessages.json';
import jsonLables2 from '../../../assets/stubs/Authentication/config.json';
import { LogoComponent } from 'src/app/shared/globalModule/logo/logo.component';
import { EmailFieldComponent } from 'src/app/shared/globalModule/email-field/email-field.component';
import { PasswordFieldComponent } from 'src/app/shared/globalModule/password-field/password-field.component';
import { FormService } from '../authServices/form.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, LogoComponent, EmailFieldComponent, PasswordFieldComponent, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  emailConfig: any = jsonLables2.emailConfig;
  welcomeMessage = jsonLables1.signupWelcomeMessage;
  sideDescription = jsonLables1.message;
  formLabels = jsonLables2.signUpFormLabels;
  isLoading: boolean = false;

  constructor(private router: Router, private http: HttpClient, private formService: FormService, private route: ActivatedRoute) { }

  emailForm = this.formService.initializeForm();

  onSubmit() {
    this.http.get<any>('../../../../assets/stubs/Authentication/users.json').subscribe((data) => {
      for (let index in data) {
        if (
          data[index].email === this.emailForm.value.email
        ) {
          this.isLoading = true;
          this.formService.setFormData(this.emailForm);
          this.router.navigate(['../check-inbox'], { relativeTo: this.route });  //If the condition  matches then navigate to the landing  layout page
          break;
        }
      }
      const formValues = this.emailForm.value;
      console.log(formValues);
    })
  }

  onClickLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route });
  }

  onGoogleSignInClick() {
    window.location.href = 'https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=ASKXGp27Pf1iwTlXM9PjmV5BHErg1NGjGPel3adnSkaOtRVqokt0X7QDgotN0pSTj3UshfrJW_GzRA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
  };

  onFacebookSignInClick() {
    window.location.href = 'https://www.facebook.com/';
  };
}
