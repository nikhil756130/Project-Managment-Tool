export class VariableLabelModel
{
    constructor(public variable:string,public columnName:string)
    {}
}

export interface DisplayColumnRecord
{
   variable: string ;
   columnName: string  ;
}