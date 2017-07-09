import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEnterEventComponent } from './step-enter-event.component';

describe('StepEnterEventComponent', () => {
  let component: StepEnterEventComponent;
  let fixture: ComponentFixture<StepEnterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepEnterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEnterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
