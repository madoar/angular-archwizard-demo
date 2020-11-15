import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DefaultWizardStepComponent } from './default-wizard-step.component';
import { DefaultWizardStepModule } from './default-wizard-step.module';

describe('DefaultWizardStepComponent', () => {
  let component: DefaultWizardStepComponent;
  let fixture: ComponentFixture<DefaultWizardStepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ DefaultWizardStepModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
