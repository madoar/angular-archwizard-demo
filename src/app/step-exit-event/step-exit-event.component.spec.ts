import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepExitEventComponent } from './step-exit-event.component';
import { StepExitEventModule } from './step-exit-event.module';

describe('StepExitEventComponent', () => {
  let component: StepExitEventComponent;
  let fixture: ComponentFixture<StepExitEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ StepExitEventModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepExitEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
