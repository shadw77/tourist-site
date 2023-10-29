import { TestBed } from '@angular/core/testing';

import { RestaurantCrudService } from './restaurant-crud.service';

describe('RestaurantCrudService', () => {
  let service: RestaurantCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
