import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  emailUpdated = new EventEmitter<string>();

  setEmail(email: string) {
    this.emailUpdated.emit(email);
  }
}
