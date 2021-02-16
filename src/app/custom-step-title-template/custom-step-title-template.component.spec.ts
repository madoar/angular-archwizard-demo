import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CustomStepTitleTemplateComponent } from './custom-step-title-template.component';
import { CustomStepTitleTemplateModule } from './custom-step-title-template.module';

describe('CustomStepTitleTemplateComponent', () => {
  let component: CustomStepTitleTemplateComponent;
  let fixture: ComponentFixture<CustomStepTitleTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CustomStepTitleTemplateModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepTitleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
