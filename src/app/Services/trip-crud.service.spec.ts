import { TestBed } from '@angular/core/testing';

import { TripCrudService } from './trip-crud.service';

describe('TripCrudService', () => {
  let service: TripCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
