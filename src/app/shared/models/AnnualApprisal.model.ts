export class AnnualApprisal {
    WorkExperience!: string;
    Desigination!: string;
    JoiningDate!: string;
    salary!: string;
    constructor(raw: any) {
        this.WorkExperience = raw.WorkExperience;
        this.Desigination = raw.Desigination;
        this.JoiningDate = raw.JoiningDate;
        this.salary = raw.salary;
    }
}