import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationOrderComponent } from './notification-order.component';

describe('NotificationOrderComponent', () => {
  let component: NotificationOrderComponent;
  let fixture: ComponentFixture<NotificationOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationOrderComponent]
    });
    fixture = TestBed.createComponent(NotificationOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
