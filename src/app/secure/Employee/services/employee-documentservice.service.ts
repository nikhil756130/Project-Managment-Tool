import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentModel } from '../Model/documents.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDocumentService {

  constructor(private http: HttpClient) { }

  employeeDocumentFetch(): Observable<{ items: DocumentModel[], totalCount: number }> {
    return this.http.get<{ documents: DocumentModel[] }>('/assets/stubs/Employees/employeeDocuments.json').pipe(map((result) => {
      const items = result.documents.map((document) => {
        return new DocumentModel(document);
      });
      return { items, totalCount: items.length };
    }))
  }
}



