import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horizontal-text-decorator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-text-decorator.component.html',
  styleUrl: './horizontal-text-decorator.component.scss'
})
export class HorizontalTextDecoratorComponent {
  @Input() text!: string;
}
