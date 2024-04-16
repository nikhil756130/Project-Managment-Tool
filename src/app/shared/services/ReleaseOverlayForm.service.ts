import { ReleasesOverlayForm } from '../models/ReleaseOverlayForm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReleasesOverlayFormService {
  constructor(private http: HttpClient) {}

  ReleaseOverlayFormFetch(): Observable<{
    ReleaseForm: ReleasesOverlayForm[];
  }> {
    return this.http
      .get('../../../../assets/stubs/Projects/Release/Release-OverlayForm.json')
      .pipe(
        map((ReleaseFormArrayData: any) => {
          const ReleaseForm = ReleaseFormArrayData.ReleaseFormInput.map(
            (IndividualReleaseFormData: any) => {
              return new ReleasesOverlayForm(IndividualReleaseFormData);
            }
          );
          return { ReleaseForm };
        })
      );
  }
}
