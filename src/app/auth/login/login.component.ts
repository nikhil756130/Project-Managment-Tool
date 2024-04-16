import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LogoComponent } from '../../shared/globalModule/logo/logo.component';
import { EmailFieldComponent } from '../../shared/globalModule/email-field/email-field.component';
import { PasswordFieldComponent } from '../../shared/globalModule/password-field/password-field.component';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
		CommonModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		HttpClientModule,
		LogoComponent,
		EmailFieldComponent,
		PasswordFieldComponent,
		MatFormFieldModule,
		MatInputModule
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
	providers: []
})

export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	email!: string;
	password!: string;

	emailConfig!: any;
	passwordConfig!: any;
	logInFormLabel!: any;
	sideDescription!: any;

	isLoading: boolean = false;
	rememberMe: boolean = false;

	constructor(
		private router: Router,
		private http: HttpClient,
		private fb: FormBuilder,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: ['', Validators.required],
			password: ['', [Validators.required]],
		});


		this.http.get<any>('../../../../../assets/stubs/Authentication/welcomeMessages.json').subscribe((data) => {
			this.sideDescription = data.message;
		});

		// getting the json data from config.json
		this.http.get<any>('../../../../assets/stubs/Authentication/config.json').subscribe((data) => {
			const configData = data;
			this.logInFormLabel = configData.signUpFormLabels;
			this.emailConfig = configData.emailConfig;
			this.passwordConfig = configData.passwordConfig;
		})
	}

	onCheckboxClick(event: Event) {
		this.rememberMe = !this.rememberMe;
	}

	clickCheckbox() {
		this.rememberMe = !this.rememberMe;
	}

	onForgotPasswordClick() {
		this.router.navigate(['../forgot-password'], { relativeTo: this.route })
	}

	onLoginClick(event: any) {
		this.http.get<any>('../../../../assets/stubs/Authentication/users.json').subscribe((data) => {
			for (let index in data) {
				if (
					data[index].email === this.loginForm.value.email &&
					data[index].password === this.loginForm.value.password  // Checking the  new password and confirm password are same or not
				) {
					this.isLoading = true;
					this.router.navigate(['/secure'], { relativeTo: this.route });  //If the condition  matches then navigate to the landing  layout page
					break;
				}
			}
			const formValues = this.loginForm.value;
			console.log(formValues);
		})
	}

	onClickSignup() {
		this.router.navigate(['../signup'], { relativeTo: this.route });
	}

	onGoogleSignInClick() {
		window.location.href = 'https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=ASKXGp27Pf1iwTlXM9PjmV5BHErg1NGjGPel3adnSkaOtRVqokt0X7QDgotN0pSTj3UshfrJW_GzRA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
	};

	onFacebookSignInClick() {
		window.location.href = 'https://www.facebook.com/';
	};

	getFormValues() {
		const formValues = this.loginForm.value;
		console.log(formValues);
	}
}