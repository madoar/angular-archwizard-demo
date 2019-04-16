import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepNgForComponent } from './wizard-step-ngfor.component';
import { WizardStepNgForModule } from './wizard-step-ngfor.module';

describe('WizardStepNgForComponent', () => {
  let component: WizardStepNgForComponent;
  let fixture: ComponentFixture<WizardStepNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ WizardStepNgForModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
