import { TestBed } from '@angular/core/testing';

import { EnquirysService } from './enquirys.service';

describe('EnquirysService', () => {
  let service: EnquirysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquirysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
