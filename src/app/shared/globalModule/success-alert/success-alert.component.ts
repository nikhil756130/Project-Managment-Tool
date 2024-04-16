import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.scss'
})
export class SuccessAlertComponent {

  constructor(private router: Router, private dialog: MatDialog) { }
  onClickLogin() {
    this.router.navigate(['/login']);
    this.dialog.closeAll();
  }
}
