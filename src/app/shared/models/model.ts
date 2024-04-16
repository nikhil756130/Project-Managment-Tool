export class EmployeeDetailsModel {
    id: string;
    employee_name: string;
    designation: string;
    department: string;
    no_of_projects: number;
    emailid: string;
    joining_date: string;
    status: string;
    action: string;
    profile_picture:string;
  
    constructor(rwa?: any) {
      this.id = rwa.id;
      this.employee_name = rwa.employee_name;
      this.designation = rwa.designation;
      this.department = rwa.department;
      this.no_of_projects = rwa.no_of_projects;
      this.emailid = rwa.emailid;
      this.joining_date = rwa.joining_date;
      this.status = rwa.status;
      this.action = rwa.action;
      this.profile_picture = rwa.profile_picture;
    }
  }