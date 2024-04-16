import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-document-display-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatMenuModule, MatIconModule],
  templateUrl: './document-display-card.component.html',
  styleUrl: './document-display-card.component.scss'
})
export class DocumentDisplayCardComponent {

  @Input() imageSource!: string;
  @Input() text!: string;
  
}
