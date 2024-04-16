import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNDropFileComponent } from '../../../shared/modules/commonModules/drag-n-drop-file/drag-n-drop-file.component';
import { EmployeeDocumentDetailsComponent } from '../employee-document-details/employee-document-details.component';

@Component({
  selector: 'app-employee-add-documentsoverlay',
  standalone: true,
  imports: [CommonModule,
    DragNDropFileComponent,
    EmployeeDocumentDetailsComponent],
  templateUrl: './employee-add-documentsoverlay.component.html',
  styleUrl: './employee-add-documentsoverlay.component.scss'
})
export class EmployeeAddDocumentsoverlayComponent {

}
