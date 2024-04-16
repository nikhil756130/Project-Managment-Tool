import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-label-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf],
  templateUrl: './label-input-field.component.html',
  styleUrl: './label-input-field.component.scss'
})
export class LabelInputFieldComponent {
  @Input() formInstance!: FormGroup;
  @Input() inputConfig!: any;
  @Input() controlName!: string;
  @Input() label!: string;
}
