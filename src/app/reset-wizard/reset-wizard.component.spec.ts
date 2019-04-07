import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetWizardComponent } from './reset-wizard.component';
import { ResetWizardModule } from './reset-wizard.module';

describe('ResetWizardComponent', () => {
  let component: ResetWizardComponent;
  let fixture: ComponentFixture<ResetWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ResetWizardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
