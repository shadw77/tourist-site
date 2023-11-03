import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTripComponent } from './show-trip.component';

describe('ShowTripComponent', () => {
  let component: ShowTripComponent;
  let fixture: ComponentFixture<ShowTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTripComponent]
    });
    fixture = TestBed.createComponent(ShowTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
