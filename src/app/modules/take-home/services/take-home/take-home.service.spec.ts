import { TestBed } from '@angular/core/testing';

import { TakeHomeService } from './take-home.service';

describe('TakeHomeService', () => {
  let service: TakeHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
