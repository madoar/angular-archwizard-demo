import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerWizardComponent } from './inner-wizard.component';
import { NestedWizardsModule } from './nested-wizards.module';

describe('InnerWizardComponent', () => {
  let component: InnerWizardComponent;
  let fixture: ComponentFixture<InnerWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NestedWizardsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
