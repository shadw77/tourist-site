import { TestBed } from '@angular/core/testing';

import { DestinationCrudService } from './destination-crud.service';

describe('DestinationCrudService', () => {
  let service: DestinationCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
