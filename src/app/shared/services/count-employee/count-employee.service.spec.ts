import { TestBed } from '@angular/core/testing';

import { CountEmployeeService } from './count-employee.service';

describe('CountEmployeeService', () => {
  let service: CountEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
