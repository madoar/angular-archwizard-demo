import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleStepHorizontalComponent } from './single-step-horizontal.component';
import { SingleStepHorizontalModule } from './single-step-horizontal.module';

describe('SingleStepHorizontalComponent', () => {
  let component: SingleStepHorizontalComponent;
  let fixture: ComponentFixture<SingleStepHorizontalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ imports: [ SingleStepHorizontalModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStepHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
