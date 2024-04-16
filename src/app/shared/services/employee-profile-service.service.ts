import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeeBasicDetailsModel } from '../models/employeeBasicDetails.model';
import { EmployeejobDetailsModel } from '../models/employeeJobDetails.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileServiceService {

  constructor(private http: HttpClient) { }

  employeeBasicDetails(): Observable<{ items: EmployeeBasicDetailsModel[], totalCount: number }> {
    return this.http.get<{ employees: EmployeeBasicDetailsModel[] }>('/assets/stubs/Employees/employeeBasicDetailsProfile.json').pipe(map((result) => {
      const items = result.employees.map((document) => {
        return new EmployeeBasicDetailsModel(document);
      });
      return { items, totalCount: items.length };
    }))
  }

  employeeJobDetails(): Observable<{ items: EmployeejobDetailsModel[], totalCount: number }> {
    return this.http.get<{ jobdetails: EmployeejobDetailsModel[] }>('/assets/stubs/Employees/employeeJobDetails.json').pipe(map((result) => {
      const items = result.jobdetails.map((document) => {
        return new EmployeejobDetailsModel(document);
      });
      return { items, totalCount: items.length };
    }))
  }
}
