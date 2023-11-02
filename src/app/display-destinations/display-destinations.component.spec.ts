import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDestinationsComponent } from './display-destinations.component';

describe('DisplayDestinationsComponent', () => {
  let component: DisplayDestinationsComponent;
  let fixture: ComponentFixture<DisplayDestinationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDestinationsComponent]
    });
    fixture = TestBed.createComponent(DisplayDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
