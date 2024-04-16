import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private emailSource = new BehaviorSubject<string>('');
  currentEmail = this.emailSource.asObservable();

  setEmail(email: string) {
    this.emailSource.next(email);
  }
  constructor(private http: HttpClient) { }

  updatePassword(email: string, password: string) {
    return this.http.post("../../../../assets/stubs/Authentication/users.json/" + email + "", password)
  }
}