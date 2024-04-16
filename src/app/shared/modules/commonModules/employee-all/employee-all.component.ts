import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationExampleComponent } from '../table-pagination-example/table-pagination-example.component';
import { RouterModule } from '@angular/router';
import { EmployeeTitleComponent } from '../employee-title/employee-title.component';

@Component({
  selector: 'app-employee-all',
  standalone: true,
  imports: [CommonModule,TablePaginationExampleComponent,RouterModule,EmployeeTitleComponent],
  templateUrl: './employee-all.component.html',
  styleUrl: './employee-all.component.scss'
})
export class EmployeeAllComponent {
 
 

}
