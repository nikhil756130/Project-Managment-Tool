

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordFieldComponent } from '../../shared/globalModule/password-field/password-field.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogoComponent } from '../../shared/globalModule/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResetPasswordService } from '../authServices/reset-password.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    PasswordFieldComponent,
    LogoComponent,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  providers: [ResetPasswordService]
})
export class ResetPasswordComponent implements OnInit {
  emailConfig!: any;

  newPasswordConfig!: any;
  confirmPasswordConfig!: any;
  resetPasswordFormLabel!: any;
  sideDescription!: any;
  currentEmail!: any;

  isLoading: boolean = false;

  resetPasswordForm!: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private rsPwSerice: ResetPasswordService,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      cnfPassword: ['', Validators.required],
    });

    this.rsPwSerice.currentEmail.subscribe((email) => {
      this.currentEmail = email;
    });

    this.http.get<any>('../../../../../assets/stubs/Authentication/welcomeMessages.json').subscribe((data) => {
      this.sideDescription = data.message;
    });

    this.http.get<any>('../../../../assets/stubs/Authentication/config.json').subscribe((data) => {
      const configData = data;
      this.newPasswordConfig = configData.newPasswordConfig;
      this.confirmPasswordConfig = configData.resetPasswordConfig;
      this.resetPasswordFormLabel = configData.signUpFormLabels;
    })
  }

  onSubmitClick() {
    if (this.resetPasswordForm.value.newPassword === this.resetPasswordForm.value.cnfPassword) {
      this.isLoading = true;
      // this.rsPwSerice.updatePassword(this.currentEmail,this.resetPasswordForm.value.cnfPassword).subscribe((res)=>{})
      this.snackBar.open('Password Updated Successfully', 'close', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.router.navigate(['../login'], { relativeTo: this.route });
    }
    else {
      this.snackBar.open('Password not match', 'close', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  };

  onCancelClick() {
    this.router.navigate(['../login'], { relativeTo: this.route });
  };
}