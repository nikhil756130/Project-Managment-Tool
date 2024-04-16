import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { InputFieldComponent } from "../input-field/input-field.component";

@Component({
    selector: 'app-checkbox-with-time-picker',
    standalone: true,
    templateUrl: './checkbox-with-time-picker.component.html',
    styleUrl: './checkbox-with-time-picker.component.scss',
    imports: [CommonModule, FormsModule, InputFieldComponent]
})
export class CheckboxWithTimePickerComponent {
  isChecked:boolean=false;
  @Input() checkboxlabel!:string;
  @Input() formInstance!: FormGroup;
  @Input() inputConfig!: any;
  @Input() controlName!: string;
}
