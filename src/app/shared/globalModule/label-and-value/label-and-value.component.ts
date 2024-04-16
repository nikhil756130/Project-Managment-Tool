import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-and-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-and-value.component.html',
  styleUrls:['label-and-value.components.scss']
})
/* display value component */
export class LabelAndValueComponent {
  @Input() label!:string;
  @Input() value?:string|number|Date;
}
