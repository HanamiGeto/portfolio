import { TestBed } from '@angular/core/testing';

import { ScrollToElementIdService } from './scroll-to-element-id.service';

describe('ScrollToElementIdService', () => {
  let service: ScrollToElementIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollToElementIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
