import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { EmployeeDetailsModel } from '../../models/model';

@Injectable({
  providedIn: 'root'
})

export class CountEmployeeService {

  constructor(private http: HttpClient) { }

  employeeDetailsGetting(): Observable<{ items: EmployeeDetailsModel[], totalCount: number }> {
    return this.http.get("../assets/stubs/Employees/employeeInformationDetails.json").pipe(map((result: any) => {
      const items = result.employees.map((document: any) => {
        return new EmployeeDetailsModel(document);
      });
      return { items, totalCount: items.length };
    }))
      ;
  }
}
