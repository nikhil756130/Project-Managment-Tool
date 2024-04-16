import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsonLables1 from '../../../assets/stubs/Authentication/welcomeMessages.json';
import jsonLables2 from '../../../assets/stubs/Authentication/config.json';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LogoComponent } from 'src/app/shared/globalModule/logo/logo.component';
import { EmailFieldComponent } from 'src/app/shared/globalModule/email-field/email-field.component';
import { PasswordFieldComponent } from 'src/app/shared/globalModule/password-field/password-field.component';
import { FormService } from '../authServices/form.service';

@Component({
  selector: 'app-check-inbox',
  standalone: true,
  imports: [CommonModule, LogoComponent, EmailFieldComponent, PasswordFieldComponent, HttpClientModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, MatInputModule],
  templateUrl: './check-inbox.component.html',
  styleUrl: './check-inbox.component.scss',
})
export class CheckInboxComponent implements OnInit {
  passwordConfig!: any;
  emailConfig!: any;

  passwordForm = this.formService.initializeForm();

  welcomeMessage = jsonLables1.signupWelcomeMessage;
  sideDescription = jsonLables1.message;
  signUpPageLabels = jsonLables2.signUpFormLabels;

  constructor(private router: Router, private http: HttpClient, private formService: FormService, private route: ActivatedRoute) {
    this.passwordForm.patchValue({ email: this.formService.getFormData().email });
  }

  ngOnInit(): void {
    this.http.get<any>('../../../../assets/stubs/Authentication/config.json').subscribe((data) => {
      const configData = data;
      this.passwordConfig = configData.passwordConfig;
      this.emailConfig = configData.emailConfig;
    })
  }

  onSubmitLogin() {
    this.http.get<any>('../../../../assets/stubs/Authentication/users.json').subscribe((data) => {
      data.find((each: { email: string; password: string; }) => {
        if (each.email === this.passwordForm.value.email && each.password === this.passwordForm.value.password) {
          console.log("Email verified Successfully...........!")
          this.formService.setFormData(this.passwordForm);
          this.router.navigate(['../registration-page-1'], { relativeTo: this.route });
        }
      })
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