import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeOverlayTabsComponent } from '../../../shared/modules/commonModules/add-employee-overlay-tabs/add-employee-overlay-tabs.component';

@Component({
  selector: 'app-employee-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list-view.component.html',
  styleUrl: './employee-list-view.component.scss'
})
export class EmployeeListViewComponent {
  constructor(private dialog:MatDialog){}
  openDialog(){
    this.dialog.open(AddEmployeeOverlayTabsComponent,{
      width:'60%',
      height:'100vh',
      position:{'right':'0px'}
    })
  }

}
