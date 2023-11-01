import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehotelVendorComponent } from './updatehotel-vendor.component';

describe('UpdatehotelVendorComponent', () => {
  let component: UpdatehotelVendorComponent;
  let fixture: ComponentFixture<UpdatehotelVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatehotelVendorComponent]
    });
    fixture = TestBed.createComponent(UpdatehotelVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
