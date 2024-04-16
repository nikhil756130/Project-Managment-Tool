import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Atomic Componenets  */
import { LabelAndMultipleValuesComponent } from '../../../shared/globalModule/label-and-multiple-values/label-and-multiple-values.component';
import { ImageWithTextComponent } from '../../../shared/globalModule/image-with-text/image-with-text.component';

/* JSON */
import { LabelAndValueComponent } from "../../../shared/globalModule/label-and-value/label-and-value.component"; 
import { EmployeeInformationService } from '../../../services/employee-information.service';
import { dailyworkingModel, workScheduleModel } from '../../../shared/models/WorkSchedule-model.class';

@Component({
    selector: 'app-work-schedule',
    standalone: true,
    templateUrl: './work-schedule.component.html',
    styleUrl: './work-schedule.component.scss',
    imports: [CommonModule, LabelAndMultipleValuesComponent, ImageWithTextComponent, LabelAndValueComponent],
    providers:[EmployeeInformationService]
})
export class WorkScheduleComponent {
  values?:dailyworkingModel[];
  data!:workScheduleModel;
  constructor(private workSchedule:EmployeeInformationService)
  {
    this.workSchedule.getEmployeeInfo("assets/stubs/Employees/employeeDetails.json").subscribe((response:any)=>{
      this.values=response.workSchedule.dailyWorkingHours;
      console.log(response.workSchedule.StandardWorkingHoursPerMonth);
      this.data=new workScheduleModel(
        response.workSchedule.currentSchedule,
        response.workSchedule.scheduleType,
        response.workSchedule.StandardWorkingHoursPerDay,
        response.workSchedule.totalWorkingHoursPerMonth,
        response.workSchedule.dailyWorkingHours
      );
    });
  }
}
