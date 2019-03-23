import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStepSymbolComponent } from './basic-step-symbol.component';
import { BasicStepSymbolModule } from './basic-step-symbol.module';

describe('BasicStepSymbolComponent', () => {
  let component: BasicStepSymbolComponent;
  let fixture: ComponentFixture<BasicStepSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BasicStepSymbolModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStepSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
