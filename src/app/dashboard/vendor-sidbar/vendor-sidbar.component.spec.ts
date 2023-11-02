import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSidbarComponent } from './vendor-sidbar.component';

describe('VendorSidbarComponent', () => {
  let component: VendorSidbarComponent;
  let fixture: ComponentFixture<VendorSidbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorSidbarComponent]
    });
    fixture = TestBed.createComponent(VendorSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
