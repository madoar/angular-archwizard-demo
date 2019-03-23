import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepTitlesComponent } from './custom-step-titles.component';
import { CustomStepTitlesModule } from './custom-step-titles.module';

describe('CustomStepTitlesComponent', () => {
  let component: CustomStepTitlesComponent;
  let fixture: ComponentFixture<CustomStepTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomStepTitlesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
