
// employee deta
export class EmployeeBasicDetailsModel{

 fullName? : string;
 profilePicture?: string;
 designition!:string;
employeeId!:number;
status!:string;
basicDetails: any;
 constructor(raw?: any) {
    if (!raw) {
        return;
    }
    this.fullName = raw.fullName;
    this.profilePicture = raw.profilePicture;
    this.designition = raw.designition;
    this.employeeId = raw.employeeId;
    this.status = raw.status;
  

}

}