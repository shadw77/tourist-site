import { TestBed } from '@angular/core/testing';

import { UserOrderCrudService } from './user-order-crud.service';

describe('UserOrderCrudService', () => {
  let service: UserOrderCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOrderCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
