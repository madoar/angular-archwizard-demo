import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomStepSymbolTemplateInjectionComponent } from './custom-step-symbol-template-injection.component';
import { CustomStepSymbolTemplateInjectionModule } from './custom-step-symbol-template-injection.module';

describe('CustomStepSymbolComponent', () => {
  let component: CustomStepSymbolTemplateInjectionComponent;
  let fixture: ComponentFixture<CustomStepSymbolTemplateInjectionComponent>;

  beforeEach(async(() => {
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
