import { Injectable } from '@angular/core';
import { statusReportData } from '../../models/statusReportModel';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusReportServiceService {

  constructor(private http: HttpClient) { }

  onStatusReportDataFetch(): Observable<{ statusReport: statusReportData[] }> {
    return this.http.get("../../../../assets/stubs/Projects/statusReport/statusReport.json").pipe(map((result: any) => {
      const statusReport = result.statusReportDataJson.map((res: any) => {
        return new statusReportData(res);
      });
      return { statusReport };
    }));
  };

  deleteStatusReport(srID:string){
  return this.http.delete('../../../../assets/stubs/Projects/statusReport/statusReport.json'+srID+'')
  };
}
