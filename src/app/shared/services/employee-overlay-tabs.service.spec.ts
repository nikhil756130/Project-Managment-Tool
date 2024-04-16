import { TestBed } from '@angular/core/testing';

import { EmployeeOverlayTabsService } from './employee-overlay-tabs.service';

describe('EmployeeOverlayTabsService', () => {
  let service: EmployeeOverlayTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeOverlayTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
