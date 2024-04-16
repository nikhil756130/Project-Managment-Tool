import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDocumentService } from '../services/employee-documentservice.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeProfileComponent } from '../../../shared/modules/commonModules/employee-profile/employee-profile.component';
import { AddEmployeeOverlayTabsComponent } from '../../../shared/modules/commonModules/add-employee-overlay-tabs/add-employee-overlay-tabs.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TextPictureComponent } from '../../../shared/globalModule/text-picture/text-picture.component';
import { DocumentModel } from '../Model/documents.model';

@Component({
  selector: 'app-employee-documents',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    TextPictureComponent,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    EmployeeProfileComponent,
    AddEmployeeOverlayTabsComponent],
  templateUrl: './employee-documents.component.html',
  styleUrl: './employee-documents.component.scss',
  providers: [EmployeeDocumentService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeDocumentsComponent {

  files!: DocumentModel[];
  id: any;
  dataSource!: MatTableDataSource<DocumentModel>;

  displayedColumns: string[] = [
    'File Name',
    'Date',
    'Action',
  ];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeDocumentsService: EmployeeDocumentService) {
    // Fetching the data through services
    this.employeDocumentsService.employeeDocumentFetch().subscribe({
      next: (res) => {
        this.files = res.items;
        this.dataSource = new MatTableDataSource<DocumentModel>(this.files)
        this.dataSource.sort = this.sort;
      },
      error: (errors) => {
        console.log('Error while loading the employee documents data' + errors);
      }
    })
  }

  showActions(element: any): void {
    // Toggle the showActions property to show/hide the dropdown menu
    element.showActions = !element.showActions;
  }

  editItem(element: any): void {
    // Implement edit functionality here
    console.log('Edit item:', element);
    // You can close the dropdown menu if needed
    element.showActions = false;
  }

  deleteItem(element: any): void {
    // Implement delete functionality here
    console.log('Delete item:', element);
    // You can close the dropdown menu if needed
    element.showActions = false;
  }


}
