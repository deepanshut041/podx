import { TestBed } from '@angular/core/testing';

import { PrefStorageService } from './pref-storage.service';

describe('PrefStorageService', () => {
  let service: PrefStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
