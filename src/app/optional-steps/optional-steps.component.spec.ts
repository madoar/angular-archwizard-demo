import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OptionalStepsComponent } from './optional-steps.component';
import { OptionalStepsModule } from './optional-steps.module';

describe('OptionalStepsComponent', () => {
  let component: OptionalStepsComponent;
  let fixture: ComponentFixture<OptionalStepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ OptionalStepsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
