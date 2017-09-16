import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWizardStepComponent } from './default-wizard-step.component';

describe('DefaultWizardStepComponent', () => {
  let component: DefaultWizardStepComponent;
  let fixture: ComponentFixture<DefaultWizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultWizardStepComponent ]
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
