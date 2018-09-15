import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeAreWorkingComponent } from './how-we-are-working.component';

describe('HowWeAreWorkingComponent', () => {
  let component: HowWeAreWorkingComponent;
  let fixture: ComponentFixture<HowWeAreWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeAreWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeAreWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
