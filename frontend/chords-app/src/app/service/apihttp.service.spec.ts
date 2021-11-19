import { TestBed } from '@angular/core/testing';

import { apiHttpService } from './apihttp.service';

describe('SongService', () => {
  let service: apiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(apiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
