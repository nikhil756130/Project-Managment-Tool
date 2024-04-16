import { TestBed } from '@angular/core/testing';

import { OverlayTitleService } from './overlay-title.service';

describe('OverlayTitleService', () => {
  let service: OverlayTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
