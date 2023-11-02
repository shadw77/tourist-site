import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayServicesComponent } from './display-services.component';

describe('DisplayServicesComponent', () => {
  let component: DisplayServicesComponent;
  let fixture: ComponentFixture<DisplayServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayServicesComponent]
    });
    fixture = TestBed.createComponent(DisplayServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
