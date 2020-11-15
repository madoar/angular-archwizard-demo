import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepEnterEventComponent } from './step-enter-event.component';
import { StepEnterEventModule } from './step-enter-event.module';

describe('StepEnterEventComponent', () => {
  let component: StepEnterEventComponent;
  let fixture: ComponentFixture<StepEnterEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ StepEnterEventModule ]
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
