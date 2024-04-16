import { TestBed } from '@angular/core/testing';

import { SalarydetailsServiceTsService } from './salarydetails.service.ts.service';

describe('SalarydetailsServiceTsService', () => {
  let service: SalarydetailsServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalarydetailsServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
