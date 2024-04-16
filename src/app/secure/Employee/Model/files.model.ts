export class FileModel{
    name!:string;
    size!:number;
    type!:string;

    constructor(name:string, size:number,  type:string){
            this.name = name;
            this.size = size;
            this.type = type;
    }
}