import { TestBed } from '@angular/core/testing';

import { EmployeeDocumentService } from './employee-documentservice.service';

describe('EmployeeDocumentserviceService', () => {
  let service: EmployeeDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
