import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStepVerticalComponent } from './single-step-vertical.component';
import { SingleStepVerticalModule } from './single-step-vertical.module';

describe('SingleStepVerticalComponent', () => {
  let component: SingleStepVerticalComponent;
  let fixture: ComponentFixture<SingleStepVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [ SingleStepVerticalModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStepVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
