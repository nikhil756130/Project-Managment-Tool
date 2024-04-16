import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
/*Imports*/
import { Internship } from '../../models/Internship.model';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  constructor(private httpclient: HttpClient) { }


  employeeDocumentFetch(): Observable<{ items: Internship[], totalCount: number }> {
    return this.httpclient.get('/assets/stubs/Employees/InternshipDetails.json').pipe(map((result: any) => {
      const items = result.Internship.map((salary: any) => {
        return new Internship(salary);
      });
      return { items, totalCount: items.length };
      
    }))

  }
}
