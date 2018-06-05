import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalLastStepComponent } from './optional-last-step.component';

describe('OptionalLastStepComponent', () => {
  let component: OptionalLastStepComponent;
  let fixture: ComponentFixture<OptionalLastStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalLastStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalLastStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
