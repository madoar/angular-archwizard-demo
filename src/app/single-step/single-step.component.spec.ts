import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStepComponent } from './single-step.component';
import { SingleStepModule } from './single-step.module';

describe('SingleStepComponent', () => {
  let component: SingleStepComponent;
  let fixture: ComponentFixture<SingleStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [ SingleStepModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
