import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-project-status',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule],
  templateUrl: './project-status.component.html',
  styleUrl: './project-status.component.scss'
})
export class ProjectStatusComponent {

}
