import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {

  files: any[] = [];
  public file!: File[];
  fileName!: string;
  fileType!: string;
  image: any;

  onImageUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const selectedFiles: any = inputElement.files;
    this.file = Object.keys(selectedFiles).map(key => {
      console.log(selectedFiles[key]);
      this.fileName = selectedFiles[key].name.toLowerCase();
      console.log(this.fileName);
      return selectedFiles[key]
    });
    this.files.push({ image: this.image, file: this.file[0] });
    console.log(this.files);
  }
}
