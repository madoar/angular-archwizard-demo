import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedWizardsComponent } from './nested-wizards.component';
import { NestedWizardsModule } from './nested-wizards.module';

describe('NestedWizardsComponent', () => {
  let component: NestedWizardsComponent;
  let fixture: ComponentFixture<NestedWizardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NestedWizardsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedWizardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
