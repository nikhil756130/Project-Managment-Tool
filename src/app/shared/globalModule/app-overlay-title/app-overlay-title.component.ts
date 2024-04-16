import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OverlayTitleService } from '../../../shared/services/overlay-title.service'

@Component({
  selector: 'app-app-overlay-title',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatDialogModule,MatToolbarModule],
  templateUrl: './app-overlay-title.component.html',
  styleUrl: './app-overlay-title.component.scss',
  providers:[OverlayTitleService]
})
export class AppOverlayTitleComponent implements OnInit {
  @Input() overlayTitle: any;


  constructor(private service:OverlayTitleService) {}

    ngOnInit() {
    this.service.employeeOverlayTitleFetch().subscribe((res) => {
      this.overlayTitle=res.items[0];
    });
  }
}
