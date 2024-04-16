import { FileModel } from "../Model/files.model";

export class DocumentModel {
    
    id?: number
    file!: FileModel;
    image!: string;
    date!: string;
    // dateFormatted!: string;
    // documents: any;

    constructor(raw?: any) {
        if (!raw) {
            return;
        }
        this.id = raw.id;
        this.file = raw.file;
        this.image = raw.image;
        this.date = raw.date;
    }
}