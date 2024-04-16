import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

export interface IDropdownValue {
  value: string | number;
  name: string | number;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MatSelectModule,MatFormFieldModule,MatInputModule],
  templateUrl: './dropdown.component.html',
  styleUrl:'./dropdown.component.scss'
})


export class DropdownComponent {
  @Input() placeholder!: string;
  @Input() dropdownList: IDropdownValue[] = [];

  @Output() selectedValueChange = new EventEmitter();

  selectedValue: number = 0;

  onSelectionChange() {
    console.log(this.selectedValue);
    this.selectedValueChange.emit(this.selectedValue);
  }
}