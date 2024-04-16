import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeOverlayTabs } from '../models/employee-overlay-tabs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeOverlayTabsService {

  getOverlayTabs() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  employeeOverlayTabsFetch(): Observable<{ items: EmployeeOverlayTabs[] }> {
    return this.http.get('/assets/stubs/Employees/overlayTabDetails.json').pipe(
      map((result: any) => {
        const items = result.map((document: any) => {
          return new EmployeeOverlayTabs(document);
        });
        return { items };
      })
    );
  }
}
