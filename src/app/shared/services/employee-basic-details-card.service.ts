import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeBasicDetailsCardService {

  constructor(private http:HttpClient) { }
  
   getEmployeeInfo(relativeLink:string):any{
    return this.http.get(relativeLink);
  }
}




