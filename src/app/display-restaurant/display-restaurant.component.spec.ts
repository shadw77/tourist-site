import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRestaurantComponent } from './display-restaurant.component';

describe('DisplayRestaurantComponent', () => {
  let component: DisplayRestaurantComponent;
  let fixture: ComponentFixture<DisplayRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayRestaurantComponent]
    });
    fixture = TestBed.createComponent(DisplayRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
