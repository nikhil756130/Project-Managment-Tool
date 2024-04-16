
export class EmployeejobDetailsModel {

    phoneNo!:number;
    workEmail!: string;
    address!: string;
    qualification !:string;
    noOfProjects!:number;
    joiningDate!: string;
     office!:string;
     officeOption!:string;
    constructor(raw?: any) {
        if (!raw) {
            return;
        }
        this.phoneNo = raw.phoneNo;
        this.address = raw.address;
        this.workEmail = raw.workEmail;
        this.qualification = raw.qualification;
        this.noOfProjects = raw.noOfProjects;
       this.joiningDate=raw.joiningDate;
       this.office = raw.office;
       this.officeOption = raw.officeOption;
    }
}