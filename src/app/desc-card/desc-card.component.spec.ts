import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCardComponent } from './desc-card.component';

describe('DescCardComponent', () => {
  let component: DescCardComponent;
  let fixture: ComponentFixture<DescCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescCardComponent]
    });
    fixture = TestBed.createComponent(DescCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
