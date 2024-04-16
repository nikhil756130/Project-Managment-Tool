export class EmployeeBasicDetails {
    firstname: string;
    email: string;
    phonenumber: number;
    gender: string;
    dateofbirth: number;
    address1: string;
    address2: string;
    country: string;
    city: string;
    state: string;
    zipcode: number;
    fullname: number;
    relationship: string;
    emergencyPhonenumber:string;



    constructor(data: any) {
        this.firstname = data.firstname;
        this.email = data.email;
        this.phonenumber = data.phonenumber;
        this.gender = data.gender;
        this.dateofbirth = data.dateofbirth;
        this.address1 = data.address1;
        this.address2 = data.address2;
        this.country = data.country;
        this.city = data.city;
        this.state = data.state;
        this.zipcode = data.zipcode;
        this.fullname = data.fullname;
        this.relationship = data.relationship;
        this.emergencyPhonenumber=data.emergencyPhonenumber;
    }
}


