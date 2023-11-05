import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserOrderComponent } from './edit-user-order.component';

describe('EditUserOrderComponent', () => {
  let component: EditUserOrderComponent;
  let fixture: ComponentFixture<EditUserOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserOrderComponent]
    });
    fixture = TestBed.createComponent(EditUserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
