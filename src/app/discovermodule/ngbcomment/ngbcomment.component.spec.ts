import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbcommentComponent } from './ngbcomment.component';

describe('NgbcommentComponent', () => {
  let component: NgbcommentComponent;
  let fixture: ComponentFixture<NgbcommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbcommentComponent]
    });
    fixture = TestBed.createComponent(NgbcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
