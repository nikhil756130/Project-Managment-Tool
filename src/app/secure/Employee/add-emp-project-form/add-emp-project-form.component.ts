import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { DatePickerComponent } from '../../../shared/globalModule/datepicker/datepicker.component';
import {
  DropdownComponent,
  IDropdownValue,
} from '../../../shared/globalModule/dropdown/dropdown.component';
import { AddEmpProjectTableComponent } from '../add-emp-project-table/add-emp-project-table.component';
import { InputFieldComponent } from 'src/app/shared/globalModule/input-field/input-field.component';
// json
import detailsJson from '../../../../assets/stubs/Projects/projectDetails.json';
import inputFieldJson from '../../../../assets/stubs/Authentication/inputField.json';

@Component({
  selector: 'app-add-emp-project-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DatePickerComponent,
    DropdownComponent,
    MatDividerModule,
    AddEmpProjectTableComponent,
    InputFieldComponent,
  ],
  templateUrl: './add-emp-project-form.component.html',
  styleUrl: './add-emp-project-form.component.scss',
})
export class AddEmpProjectFormComponent {
  inputBudgetData = inputFieldJson.inputField.budget;
  inputHealthData = inputFieldJson.inputField.health;
  details = detailsJson.projectDetails;

  onSaveProject() {
    alert('successfully saved !');
  }

  customerList: IDropdownValue[] = [
    { value: 1, name: 'customer 1' },
    { value: 2, name: 'customer 2' },
    { value: 3, name: 'customer 3' },
  ];

  managerList: IDropdownValue[] = [
    { value: 1, name: 'Gandhar' },
    { value: 2, name: 'Bhasker' },
  ];

  statusList: IDropdownValue[] = [
    { value: 1, name: 'Open' },
    { value: 2, name: 'Closed' },
  ];

  projectType: IDropdownValue[] = [
    { value: 1, name: 'Developement' },
    { value: 2, name: 'Maintenance' },
  ];

  openFileManager() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event) {
    const selectedFileName = (event.target as HTMLInputElement).value;
    console.log('Selected File:', selectedFileName);
  }

}
