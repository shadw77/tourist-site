import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsVendorComponent } from './hotels-vendor.component';

describe('HotelsVendorComponent', () => {
  let component: HotelsVendorComponent;
  let fixture: ComponentFixture<HotelsVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsVendorComponent]
    });
    fixture = TestBed.createComponent(HotelsVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
