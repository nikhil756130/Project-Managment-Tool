import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule } from 'devextreme-angular'; //Plugin for Scheduler
import { MatButtonModule } from '@angular/material/button';
import SchedulerJson from '../../../../assets/stubs/Employees/Scheduler.json';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule, DxSchedulerModule, MatButtonModule],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {

  //Getting Data from json
  schedulerData = SchedulerJson.SchedulerData;

  selectedFileName: string | any;
  // function Added for Upload file
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFileName = file ? file.name : undefined;
  }
}
