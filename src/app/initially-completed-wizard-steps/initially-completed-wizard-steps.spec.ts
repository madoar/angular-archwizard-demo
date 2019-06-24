import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiallyCompletedWizardStepsComponent } from './initially-completed-wizard-steps.component';
import { InitiallyCompletedWizardStepsModule } from './initially-completed-wizard-steps.module';

describe('InitiallyCompletedWizardStepsComponent', () => {
  let component: InitiallyCompletedWizardStepsComponent;
  let fixture: ComponentFixture<InitiallyCompletedWizardStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ InitiallyCompletedWizardStepsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiallyCompletedWizardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
