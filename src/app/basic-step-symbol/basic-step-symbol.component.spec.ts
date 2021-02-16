import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicStepSymbolComponent } from './basic-step-symbol.component';
import { BasicStepSymbolModule } from './basic-step-symbol.module';

describe('BasicStepSymbolComponent', () => {
  let component: BasicStepSymbolComponent;
  let fixture: ComponentFixture<BasicStepSymbolComponent>;

  beforeEach(waitForAsync(() => {
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
