import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-picture.component.html',
  styleUrl: './text-picture.component.scss'
})
export class TextPictureComponent {

  @Input() text!: string;
  @Input() imageUrl!: string;
}
