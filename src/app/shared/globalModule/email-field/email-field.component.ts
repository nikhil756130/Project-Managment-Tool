import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface emailInput {
  label: string,
  placeholder: string,
  required: boolean,
  pattern: string,
  validationMessages: any
}

@Component({
  selector: 'app-email-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule],
  templateUrl: './email-field.component.html',
  styleUrl: './email-field.component.scss'
})
export class EmailFieldComponent implements OnInit {
  @Input() formInstance!: FormGroup;
  @Input() inputConfig!: emailInput;
  @Input() controlName!: string;
  @Input() disabled!: boolean;

  emailFormControl!: FormControl;

  ngOnInit(): void {
    this.emailFormControl = this.formInstance.get(this.controlName) as FormControl;
  }
}