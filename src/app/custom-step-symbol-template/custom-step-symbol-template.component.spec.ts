import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomStepSymbolTemplateComponent } from './custom-step-symbol-template.component';
import { CustomStepSymbolTemplateModule } from './custom-step-symbol-template.module';

describe('CustomStepSymbolComponent', () => {
  let component: CustomStepSymbolTemplateComponent;
  let fixture: ComponentFixture<CustomStepSymbolTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomStepSymbolTemplateModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepSymbolTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
