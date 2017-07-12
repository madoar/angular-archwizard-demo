import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetWizardComponent } from './reset-wizard.component';

describe('ResetWizardComponent', () => {
  let component: ResetWizardComponent;
  let fixture: ComponentFixture<ResetWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetWizardComponent ]
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
