export class prohibitionModel {
    constructor(
        public startDate: Date,
        public endDate: Date,
        public evaluationDate: Date,
        public comments: string,
        public result: string,
        public manager: string
    ) { }
}