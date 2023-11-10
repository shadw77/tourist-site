import { TestBed } from '@angular/core/testing';

import { TransactionCrudService } from './transaction-crud.service';

describe('TransactionCrudService', () => {
  let service: TransactionCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
