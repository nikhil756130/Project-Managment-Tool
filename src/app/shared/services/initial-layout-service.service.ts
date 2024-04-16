import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { InitialLayoutSideNavContentModel } from '../models/initialLayoutModel';

@Injectable({
  providedIn: 'root'
})
export class InitialLayoutServiceService {

  constructor(private http: HttpClient) { }

  initialLayoutSideNavContentFetch(): Observable<{ sideContent: InitialLayoutSideNavContentModel[] }> {
    return this.http.get("../../../assets/stubs/InnitialLayout/initialLayout.json").pipe(map((result: any) => {
      const sideContent = result.map((res: any) => {
        return new InitialLayoutSideNavContentModel(res);
      });
      return { sideContent };
    }));
  };
}
