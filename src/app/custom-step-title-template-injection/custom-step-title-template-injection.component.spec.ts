import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomStepTitleTemplateInjectionComponent } from './custom-step-title-template-injection.component';
import { CustomStepTitleTemplateInjectionModule } from './custom-step-title-template-injection.module';

describe('CustomStepTitleTemplateInjectionComponent', () => {
  let component: CustomStepTitleTemplateInjectionComponent;
  let fixture: ComponentFixture<CustomStepTitleTemplateInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomStepTitleTemplateInjectionModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepTitleTemplateInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
