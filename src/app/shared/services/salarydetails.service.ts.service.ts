import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
/*Imports*/
import { Internship } from '../models/Internship.model';
import { Fulltime } from '../models/Fulltime.model';
import { AnnualApprisal } from '../models/AnnualApprisal.model';

@Injectable({
  providedIn: 'root'
})
export class SalarydetailsServiceTsService {
  constructor(private http: HttpClient) { }

  /*Internship Details*/
  getSalaryDetails(): Observable<{ Employeesalary: Internship[], totalCount: number }> {
    return this.http.get('/assets/stubs/Employees/InternshipDetails.json').pipe(map((result: any) => {
      const Employeesalary = result.Internship.map((salary: any) => {
        return new Internship(salary);
      });
      return { Employeesalary, totalCount: Employeesalary.count };
    }));
  }

  /*Fulltime Details */
  getFulltimeDetails(): Observable<{ items: Fulltime[]; totalcount: number }> {
    return this.http.get('/assets/stubs/Employees/FulltimeDetails.json').pipe(map((result: any) => {
      const items = result.fullTime.map((salary: any) => {
        return new Fulltime(salary);
      });
      return { items, totalcount: items.count };
    }));
  }
  
  /* Annual Details*/
  getAnnualDetails(): Observable<{ Annualsalary: AnnualApprisal[], totalcount: number }> {
    return this.http.get('/assets/stubs/Employees/AnnualAppraisalDetails.json').pipe(map((result: any) => {
      const Annualsalary = result.annualApprisals.map((salary1: any) => {
        return new AnnualApprisal(salary1);
      });
      return { Annualsalary, totalcount: Annualsalary.count };
    }))
  }

}
