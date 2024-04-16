import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { employeeProjectData } from '../../models/employeeProject';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {
  constructor(private http: HttpClient) {}

  fetchEmpProjectDetails(): Observable<{ items: employeeProjectData[] }> {
    return this.http
      .get('/assets/stubs/Employees/employeeProjectDetails.json')
      .pipe(
        map((result: any) => {
          const items = result.employeeProjectDetails.map((document: any) => {
            return new employeeProjectData(document);
          });
          return { items };
        })
      );
  }
}
