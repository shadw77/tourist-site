import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHotelsComponent } from './display-hotels.component';

describe('DisplayHotelsComponent', () => {
  let component: DisplayHotelsComponent;
  let fixture: ComponentFixture<DisplayHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayHotelsComponent]
    });
    fixture = TestBed.createComponent(DisplayHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
