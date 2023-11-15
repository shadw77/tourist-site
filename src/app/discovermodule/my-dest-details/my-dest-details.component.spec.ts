import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDestDetailsComponent } from './my-dest-details.component';

describe('MyDestDetailsComponent', () => {
  let component: MyDestDetailsComponent;
  let fixture: ComponentFixture<MyDestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDestDetailsComponent]
    });
    fixture = TestBed.createComponent(MyDestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
