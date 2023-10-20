import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDestinationComponent } from './top-destination.component';

describe('TopDestinationComponent', () => {
  let component: TopDestinationComponent;
  let fixture: ComponentFixture<TopDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDestinationComponent]
    });
    fixture = TestBed.createComponent(TopDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
