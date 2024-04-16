export class EmployeeJobTimelineModel{
    jobTitle!:string;
    employeeType!:string;
    department!:string;
    manager!:string;
    office!:string;
    constructor(raw?:any){
        if (!raw) {
            return;
        }
        this.jobTitle = raw.jobTitle;
        this.employeeType = raw.employeeType;
        this.department = raw.department;
        this.manager = raw.manager;
        this.office = raw.office;
    }
}