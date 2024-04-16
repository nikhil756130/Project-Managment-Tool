import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeInformationService{

  constructor(private http:HttpClient) {}
  
  public getEmployeeInfo(relativeLink:string):any{
    return this.http.get(relativeLink);
  }
}















































/*     this.employee.username=employeeInfo.empolyeeInformation.username;
    this.employee.EmployeeId=employeeInfo.empolyeeInformation.employeeId;
    this.employee.workEmail=employeeInfo.empolyeeInformation.workEmail;
    this.employee.workExperience=employeeInfo.empolyeeInformation.workExperience;
    this.employee.role=employeeInfo.empolyeeInformation.role;
    this.employee.TFSAccessToken=employeeInfo.empolyeeInformation.iesAccessToken;
    this.employee.TFSUsername=employeeInfo.empolyeeInformation.tfsusername;
    this.employee.designation=employeeInfo.empolyeeInformation.designation;
    this.employee.department=employeeInfo.empolyeeInformation.department; */