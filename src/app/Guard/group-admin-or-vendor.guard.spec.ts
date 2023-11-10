import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { groupAdminOrVendorGuard } from './group-admin-or-vendor.guard';

describe('groupAdminOrVendorGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => groupAdminOrVendorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
