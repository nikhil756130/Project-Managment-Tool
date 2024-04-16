import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageWithTextComponent } from "../../../shared/globalModule/image-with-text/image-with-text.component";
import { TableComponent } from "../../../shared/globalModule/table/table.component";
import { EmployeeInformationService } from '../../../services/employee-information.service';
import { EmployeeInfoModel } from '../../../shared/models/employee-model.class';
import { EmployeeJobTimelineModel } from '../../../shared/models/employeeJobTimeLine.model';
import { MaterialTableComponent } from "../../../shared/globalModule/material-table/material-table.component";

@Component({
    selector: 'app-job-timeline',
    standalone: true,
    templateUrl: './job-timeline.component.html',
    styleUrl: './job-timeline.component.scss',
    providers: [EmployeeInformationService],
    imports: [CommonModule, ImageWithTextComponent, TableComponent, MaterialTableComponent]
})
export class JobTimelineComponent {
    heading: { columnName: string }[] = [
        { columnName: 'Job Title' }, { columnName: 'Employee Type' }, { columnName: 'Department' }, { columnName: 'Manager' }, { columnName: 'Office' }, { columnName: 'Duration' }, { columnName: 'Action' }
    ];

    constructor(private jobDetails: EmployeeInformationService) {
        this.jobDetails.getEmployeeInfo('assets/stubs/Employees/employeeDetails.json').subscribe((response: any) => {
            console.log(response.JobTimeline);
        });
    }
}
