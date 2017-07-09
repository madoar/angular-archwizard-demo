import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepDirectivesComponent } from './wizard-step-directives.component';

describe('WizardStepDirectivesComponent', () => {
  let component: WizardStepDirectivesComponent;
  let fixture: ComponentFixture<WizardStepDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStepDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
