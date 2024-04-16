import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DxSpeedDialActionModule, DxSchedulerModule, DxSchedulerComponent } from 'devextreme-angular';
import {
  LeaveplanService,
  Appointment,
  Resource
} from '../../sharedServices/leaveplan.service';
import { MatCardModule } from '@angular/material/card';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-leave-plan',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    DxSchedulerModule,
    DxSpeedDialActionModule,
    MatCardModule
    // BrowserModule
  ],
  templateUrl: './leave-plan.component.html',
  styleUrl: './leave-plan.component.scss',
  providers: [LeaveplanService],
})
export class LeavePlanComponent {

  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent | any;
  
  priorities: Resource[];
  cellDuration = 30;
  appointmentsData: Appointment[] | any;

  //Getting Data from Service
  constructor(_lvs: LeaveplanService) {
    this.appointmentsData = _lvs.getAppointments();
    this.priorities = _lvs.getResources();
  }
}