import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-with-image-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-with-image-upload.component.html',
  styleUrl: './text-with-image-upload.component.scss'
})
export class TextWithImageUploadComponent {  
  @Input() labelText!: string;
  @Input() buttonText!: string;
  @Input() selectedFileName!: string;
  @Output() fileSelected = new EventEmitter<File>();

  @ViewChild('fileInput') fileInput!: ElementRef;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFileName = file ? file.name : undefined;
    this.fileSelected.emit(file);
  }
  openFileInput() {
    this.fileInput.nativeElement.click();
  }

}
