import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { CountEmployeeService } from '../../../services/count-employee/count-employee.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { style } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeOverlayTabsComponent } from '../add-employee-overlay-tabs/add-employee-overlay-tabs.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-employee-title',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule,HttpClientModule,MatIconModule],
  templateUrl: './employee-title.component.html',
  styleUrl: './employee-title.component.scss',
  providers:[CountEmployeeService]
})

export class EmployeeTitleComponent {
  employee: any;
  employeeCount!:number;

  constructor(private countService: CountEmployeeService, private dialog:MatDialog, private router:Router, private route:ActivatedRoute) { }
  
  getEmployeeCount(){
    this.countService.employeeDetailsGetting().subscribe((res)=>{
      this.employee=res.items;
      this.employeeCount=res.totalCount;
      console.log(res.items)
    });
  }

  ngOnInit(): void {
    this.getEmployeeCount();
    
  }
  openDialog() {
      this.dialog.open(AddEmployeeOverlayTabsComponent, {
        width: 'auto',
        height: '100vh',
        position: { 'right': '0px' }
      })
    }
}
