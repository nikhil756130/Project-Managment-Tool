import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import projectNameDetails from '../../../../assets/stubs/Employees/employeeProjectTableHeader.json'

@Component({
  selector: 'app-project-manager',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './project-manager.component.html',
  styleUrl: './project-manager.component.scss'
})
export class ProjectManagerComponent {
  projectName = projectNameDetails.projectHeader;
 
  @Input() title!:string;
}
