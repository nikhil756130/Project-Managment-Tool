import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface passwordInput {
  label: string,
  placeholder: string,
  required: boolean,
  pattern: string,
  validationMessages: any
}

@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss'
})
export class PasswordFieldComponent implements OnInit {
  @Input() formInstance!: FormGroup;
  @Input() inputConfig!: passwordInput;
  @Input() controlName!: string;

  passwordFormControl!: FormControl;

  ngOnInit(): void {
    this.passwordFormControl = this.formInstance.get(this.controlName) as FormControl;
  }

}
