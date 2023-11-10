import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { adminGroupGuard } from './admin-group.guard';

describe('adminGroupGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminGroupGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
