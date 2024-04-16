import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FileDragNDropDirectiveTsDirective } from '../../directives/file-drag-n-drop.directive.ts.directive';
import headingsData from '../../../../../assets/stubs/Employees/employeeHeadings.json'
import { DocumentDisplayCardComponent } from 'src/app/shared/globalModule/document-display-card/document-display-card.component';

@Component({
  selector: 'app-drag-n-drop-file',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    FileDragNDropDirectiveTsDirective,
    DocumentDisplayCardComponent],
  templateUrl: './drag-n-drop-file.component.html',
  styleUrl: './drag-n-drop-file.component.scss'
})
export class DragNDropFileComponent {

  files: any[] = [];
  public file!: File[];
  fileName!: string;
  fileType!: string;
  image: any;

  headings1: any = headingsData.headings[0];

  constructor() { }

  // File drag and drop functionality
  onFileChange(pFileList: any) {
    this.file = Object.keys(pFileList).map(key => {
      this.fileName = pFileList[key].name.toLowerCase();
      if (this.fileName.endsWith('.pdf')) {
        this.fileType = 'pdf';
        this.image = '/assets/images/EmployeeImages/pdf_image.png';
      } else if (this.fileName.endsWith('.doc') || this.fileName.endsWith('.docx')) {
        this.fileType = 'word';
        this.image = '/assets/images/EmployeeImages/worde_image.png';
      } else if (this.fileName.endsWith('.xlsx')) {
        this.fileType = 'excel';
        this.image = '/assets/images/EmployeeImages/excel.png';
      }
      else {
        this.fileType = "";
        this.image = "null";
      }
      return pFileList[key]
    });
    this.files.push({ image: this.image, file: this.file[0] });
  }

  // Document uplaod fuction
  onFileChangeOver(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const selectedFiles: any = inputElement.files;
    this.file = Object.keys(selectedFiles).map(key => {
      this.fileName = selectedFiles[key].name.toLowerCase();
      if (this.fileName.endsWith('.pdf')) {
        this.fileType = 'pdf';
        this.image = '/assets/images/EmployeeImages/pdf_image.png';
      } else if (this.fileName.endsWith('.doc') || this.fileName.endsWith('.docx')) {
        this.fileType = 'word';
        this.image = '/assets/images/EmployeeImages/worde_image.png';
      } else if (this.fileName.endsWith('.xlsx')) {
        this.fileType = 'excel';
        this.image = '/assets/images/EmployeeImages/excel.png';
      } else {
        this.fileType = " ";
        this.image = " ";
      }
      return selectedFiles[key]
    });
    this.files.push({ image: this.image, file: this.file[0] });
  }
}
