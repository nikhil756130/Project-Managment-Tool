import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-with-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-with-text.component.html',
  styleUrl: './image-with-text.component.scss'
})
export class ImageWithTextComponent {
    @Input() imageSource!:string;
    @Input() text!:string;
    @Input() textType!:string;
}
