import { TestBed } from '@angular/core/testing';

import { EmployeeProfileServiceService } from './employee-profile-service.service';

describe('EmployeeProfileServiceService', () => {
  let service: EmployeeProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
