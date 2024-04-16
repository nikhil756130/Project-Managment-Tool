import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[fileDragDrop]',
  standalone: true
})
export class FileDragNDropDirectiveTsDirective {

  @Output() private filesChangeEmiter: EventEmitter<File> = new EventEmitter();
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    debugger;
    let files = evt.dataTransfer.files;
    let valid_files: File = files;
    this.filesChangeEmiter.emit(valid_files);
  }
}
