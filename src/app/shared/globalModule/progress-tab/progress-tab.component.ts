import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-progress-tab',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './progress-tab.component.html',
  styleUrl: './progress-tab.component.scss'
})
export class ProgressTabComponent {
  @Input() activeStep: number = 1;
  @Input() tabsCount: number = 1;

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
