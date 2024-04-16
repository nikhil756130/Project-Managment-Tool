export class Internship {
    WorkExperience!: string;
    Desigination!: string;
    JoiningDate!: string;
    salary!: string;

    constructor(raw?: any) {
        if (!raw) {
            return;
        }
        this.WorkExperience = raw.WorkExperience;
        this.Desigination = raw.Desigination;
        this.JoiningDate = raw.JoiningDate;
        this.salary = raw.salary;
    }

}
