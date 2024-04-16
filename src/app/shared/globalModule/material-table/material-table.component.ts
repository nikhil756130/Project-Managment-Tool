import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { DisplayColumnRecord } from './column-variable-label.model';
import { EmployeeInformationService } from 'src/app/services/employee-information.service';


@Component({
  selector: 'app-material-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './material-table.component.html',
  styleUrl: './material-table.component.scss',
  providers: [EmployeeInformationService]
})

export class MaterialTableComponent {
  /*labels from HeadingS from JSON */
  @Input() columnLabels!: Array<{ columnName: string }>;
  dataSourceofJson!: Array<any>;
  @Input() dataSource!: Array<any>;
  displayedColumnsTemp: Array<DisplayColumnRecord> = [];
  displayedColumns: Array<string> = [];

  constructor(private employeeService: EmployeeInformationService) {

    //from dataSource columnName's are taken and stored in displayColumns
    let index: number = 0;
    //insted of api use Input()
    this.employeeService.getEmployeeInfo('assets/stubs/Employees/employeeDetails.json').subscribe((response: any) => {
      this.dataSourceofJson = response.JobTimeline.dataSource;
      this.dataSource = this.dataSourceofJson;
          //need to hardcode the column names when grid is used
    Object.keys(this.dataSource[0]).forEach((key: any) => {
      this.displayedColumns.push(key);
      this.displayedColumnsTemp.push({ variable: key, columnName: this.columnLabels[index].columnName });
      index++;
    });
    console.log(this.dataSource);
    });

  }

}
