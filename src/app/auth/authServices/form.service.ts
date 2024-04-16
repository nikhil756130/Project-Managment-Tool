// form.service.ts
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formData: any = {};

  initializeForm() {
    return new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      newPassword: ['', Validators.required],
      purpose: [''],
      category: [''],
      workspaceName: [''],
    });
  }

  setFormData(form: FormGroup) {
    this.formData = { ...this.formData, ...form.value };
  }

  getFormData() {
    return this.formData;
  }
}
