import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CustomStepSymbolTemplateInjectionComponent } from './custom-step-symbol-template-injection.component';
import { CustomStepSymbolTemplateInjectionModule } from './custom-step-symbol-template-injection.module';

describe('CustomStepSymbolTemplateInjectionComponent', () => {
  let component: CustomStepSymbolTemplateInjectionComponent;
  let fixture: ComponentFixture<CustomStepSymbolTemplateInjectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CustomStepSymbolTemplateInjectionModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepSymbolTemplateInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
