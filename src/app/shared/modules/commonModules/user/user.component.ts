import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import userBasicDetailsJSON from '../../../../../assets/stubs/InnitialLayout/userBasicDetails.json';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userBasicDetails=userBasicDetailsJSON;
}
