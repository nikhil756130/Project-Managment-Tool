import { TestBed } from '@angular/core/testing';

import { InitialLayoutServiceService } from './initial-layout-service.service';

describe('InitialLayoutServiceService', () => {
  let service: InitialLayoutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialLayoutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
