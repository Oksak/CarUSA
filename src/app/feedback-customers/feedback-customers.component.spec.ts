import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCustomersComponent } from './feedback-customers.component';

describe('FeedbackCustomersComponent', () => {
  let component: FeedbackCustomersComponent;
  let fixture: ComponentFixture<FeedbackCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
