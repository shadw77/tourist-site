import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTripsComponent } from './display-trips.component';

describe('DisplayTripsComponent', () => {
  let component: DisplayTripsComponent;
  let fixture: ComponentFixture<DisplayTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTripsComponent]
    });
    fixture = TestBed.createComponent(DisplayTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
