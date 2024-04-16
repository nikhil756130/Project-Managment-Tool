import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeInformationCardComponent } from "../employee-information-card/employee-information-card.component";
import { ProhibitionDetailsComponent } from "../prohibition-details/prohibition-details.component";
import { JobTimelineComponent } from "../job-timeline/job-timeline.component";
import { WorkScheduleComponent } from "../work-schedule/work-schedule.component";
import { MaterialTableComponent } from '../../../shared/globalModule/material-table/material-table.component';

import employeeDetails from '../../../../assets/stubs/Employees/employeeDetails.json';
import { EmployeeInformationService } from '../../../services/employee-information.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-job-details',
    standalone: true,
    templateUrl: './job-details.component.html',
    styleUrl: './job-details.component.scss',
    providers:[EmployeeInformationService],
    imports: [CommonModule,
              EmployeeInformationCardComponent, 
              ProhibitionDetailsComponent, 
              JobTimelineComponent, 
              WorkScheduleComponent, 
              MaterialTableComponent,
              MatCardModule
            ]
})
export class JobDetailsComponent {

    tableHeading: Array<{ columnName: string }>=[];
    dataSourceofJson!: Array<any>;
    dataSource!: any[];
    constructor() {
        /* for headings in json-file */
            this.tableHeading.push({columnName:employeeDetails.JobTimeline.heading.jobTitle});
            this.tableHeading.push({columnName:employeeDetails.JobTimeline.heading.department});
            this.tableHeading.push({columnName:employeeDetails.JobTimeline.heading.employeeType});
            this.tableHeading.push({columnName:employeeDetails.JobTimeline.heading.manager});
            this.tableHeading.push({columnName:employeeDetails.JobTimeline.heading.office});
            this.tableHeading.push({columnName:employeeDetails.JobTimeline.heading.duration});
    }
}
