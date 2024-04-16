import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
/* reusable components */
import { ImageWithTextComponent } from '../../../shared/globalModule/image-with-text/image-with-text.component';
import { LabelAndValueComponent } from '../../../shared/globalModule/label-and-value/label-and-value.component';
/* service */
import { prohibitionModel } from '../../../shared/models/prohibition-model.class';
import { EmployeeInformationService } from '../../../services/employee-information.service';

@Component({
  selector: 'app-prohibition-details',
  standalone: true,
  imports: [CommonModule,LabelAndValueComponent,HttpClientModule,ImageWithTextComponent],
  templateUrl: './prohibition-details.component.html',
  styleUrl: './prohibition-details.component.scss',
  providers:[EmployeeInformationService]
})
export class ProhibitionDetailsComponent {
      data!:prohibitionModel;
      constructor(private prohibition:EmployeeInformationService)
      {
        this.prohibition.getEmployeeInfo("assets/stubs/Employees/employeeDetails.json").subscribe((response:any)=>{
        this.data=new prohibitionModel(response.prohibitionDetails.startDate,
                                         response.prohibitionDetails.endDate,
                                         response.prohibitionDetails.evaluationDate,
                                         response.prohibitionDetails.comments,
                                         response.prohibitionDetails.result,
                                         response.prohibitionDetails.projectManager);
        });
      }
 
}
