import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoComponent } from '../../shared/globalModule/logo/logo.component';
import { EmailFieldComponent } from '../../shared/globalModule/email-field/email-field.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResetPasswordService } from '../authServices/reset-password.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    EmailFieldComponent,
    HttpClientModule,
    MatButtonModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  providers: [ResetPasswordService]
})
export class ForgotPasswordComponent implements OnInit {
  emailConfig!: any;
  sideDescription!: any;
  forgotPasswordFormLabel!: any;
  isLoading: boolean = false;

  forgotPasswordForm!: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private rsPwSerice: ResetPasswordService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required],
    });

    this.http.get<any>('../../../../../assets/stubs/Authentication/welcomeMessages.json').subscribe((data) => {
      this.sideDescription = data.message;
    });

    this.http.get<any>('../../../../assets/stubs/Authentication/config.json').subscribe((data) => {
      const configData = data;
      this.forgotPasswordFormLabel = configData.signUpFormLabels;
      this.emailConfig = configData.emailConfig;
    })
  }

  onSubmitClick() {
    this.http.get<any>('../../../../assets/stubs/Authentication/users.json').subscribe((data) => {
      for (let index in data) {
        if (
          data[index].email === this.forgotPasswordForm.value.email
        ) {
          this.isLoading = true;
          this.rsPwSerice.setEmail(this.forgotPasswordForm.value.email)
          this.router.navigate(['../reset-password'], { relativeTo: this.route });
          break;
        }
        else {
          this.snackBar.open('Email Not Found', 'close', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      }
      const formValues = this.forgotPasswordForm.value;
      console.log(formValues);
    })
  };

  onCancelClick() {
    this.router.navigate(['../login'], { relativeTo: this.route });
  };
}
