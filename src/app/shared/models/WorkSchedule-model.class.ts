export interface dailyworkingModel
{
  id:number;
  day:string;
  timing:string;
}
export class workScheduleModel {
   constructor(
                public currentSchedule:string,
                public scheduleType:string,
                public standardWorkingHoursPerDay:string|number|Date,
                public totalWorkingHoursPerMonth:string|number|Date,
                public dailyWorkingHours: dailyworkingModel[])
                {}
}