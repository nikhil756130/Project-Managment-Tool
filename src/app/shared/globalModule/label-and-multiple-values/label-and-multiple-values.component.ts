import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dailyworkingModel } from '../../models/WorkSchedule-model.class';



@Component({
  selector: 'app-label-and-multiple-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-and-multiple-values.component.html',
  styleUrl: './label-and-multiple-values.component.scss'
})
export class LabelAndMultipleValuesComponent {
  @Input() label!:string;
  @Input() valueList?:dailyworkingModel[];
  value!:string|number|Date;
}
