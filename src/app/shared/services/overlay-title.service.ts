import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OverlayTitle } from '../models/overlay-title';

@Injectable({
  providedIn: 'root'
})
export class OverlayTitleService {
  // getOverlayTitle() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }

  employeeOverlayTitleFetch(): Observable<{ items: OverlayTitle[] }> {
    return this.http.get('/assets/stubs/Employees/overlayTitleDetails.json').pipe(
      map((result: any) => {
        const items = result.employeeOverlayTitle.map((document: any) => {
          return new OverlayTitle(document);
        });
        return { items };
      })
    );
  }
}
