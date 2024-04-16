import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectDetailsService } from '../../../shared/services/employeeProjectDetails/project-details.service';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ProjectNameComponent } from '../../../shared/globalModule/project-name/project-name.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectManagerComponent } from '../../../shared/globalModule/project-manager/project-manager.component';
import { ProjectStatusComponent } from 'src/app/shared/globalModule/project-status/project-status.component';
// JSON
import projectTableDetailsJson from '../../../../assets/stubs/Employees/employeeProjectTableHeader.json';
@Component({
  selector: 'app-add-emp-project-table',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    ProjectNameComponent,
    ProjectManagerComponent,
    ProjectStatusComponent,
    HttpClientModule,
    MatCardModule
  ],
  templateUrl: './add-emp-project-table.component.html',
  styleUrl: './add-emp-project-table.component.scss',
  providers: [ProjectDetailsService],
})
export class AddEmpProjectTableComponent implements OnInit {
  displayedColumns: string[] = [
    'projectName',
    'id',
    'duration',
    'manager',
    'status',
    'actions',
  ];
  details = projectTableDetailsJson.projectHeader;
  dataSource: any;

  constructor(private projectdetails: ProjectDetailsService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.projectdetails.fetchEmpProjectDetails().subscribe((data) => {
      this.dataSource = data.items;
    });
  }

}
