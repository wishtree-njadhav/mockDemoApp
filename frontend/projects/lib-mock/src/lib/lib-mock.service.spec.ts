import { TestBed } from '@angular/core/testing';

import { LibMockService } from './lib-mock.service';

describe('LibMockService', () => {
  let service: LibMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
