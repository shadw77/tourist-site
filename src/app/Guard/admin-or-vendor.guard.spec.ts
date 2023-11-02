import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminOrVendorGuard } from './admin-or-vedor.guard';

describe('adminOrVedorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminOrVedorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
