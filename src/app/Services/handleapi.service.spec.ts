import { TestBed } from '@angular/core/testing';

import { HandleapiService } from './handleapi.service';

describe('HandleapiService', () => {
  let service: HandleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
