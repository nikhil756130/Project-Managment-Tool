export class employeeProjectData {
  projectTitle!: string;
  projectSubTitle!: string;
  projectAvatar!: string;
  projectId!: string;
  projectStartdate!: string;
  projectEnddate!: string;
  projectManager!: string;
  managerProfilePic!: string;
  status!: string;

  constructor(empProject?: any) {
    this.projectTitle = empProject.projectTitle;
    this.projectSubTitle = empProject.projectSubTitle;
    this.projectAvatar = empProject.projectAvatar;
    this.projectId = empProject.projectId;
    this.projectStartdate = empProject.projectStartdate;
    this.projectEnddate = empProject.projectEnddate;
    this.projectManager = empProject.projectManager;
    this.managerProfilePic = empProject.managerProfilePic;
    this.status = empProject.status;
  }
}