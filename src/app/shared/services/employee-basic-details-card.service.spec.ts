import { TestBed } from '@angular/core/testing';

import { EmployeeBasicDetailsCardService } from './employee-basic-details-card.service';

describe('EmployeeBasicDetailsCardService', () => {
  let service: EmployeeBasicDetailsCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBasicDetailsCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export { EmployeeBasicDetailsCardService };
