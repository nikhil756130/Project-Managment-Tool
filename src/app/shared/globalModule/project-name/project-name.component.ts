import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import projectNameDetails from '../../../../assets/stubs/Employees/employeeProjectDetails.json'
@Component({
  selector: 'app-project-name',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './project-name.component.html',
  styleUrl: './project-name.component.scss'
})
export class ProjectNameComponent {
projectName = projectNameDetails

@Input() title!:string;
@Input() subtitle!:string;
@Input() avatar!:string;
}
