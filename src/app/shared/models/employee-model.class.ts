export class EmployeeInfoModel {
     constructor(
          public username: string,
          public EmployeeId: string,
          public workExperience: string,
          public workEmail: string,
          public department: string,
          public designation: string,
          public joiningDate: Date,
          public role: string,
          public IESAccessToken: string,
          public TFSusername: string
     ) { }
}