import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomStepSymbolComponent } from './custom-step-symbol.component';
import { CustomStepSymbolModule } from './custom-step-symbol.module';

describe('CustomStepSymbolComponent', () => {
  let component: CustomStepSymbolComponent;
  let fixture: ComponentFixture<CustomStepSymbolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ CustomStepSymbolModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
