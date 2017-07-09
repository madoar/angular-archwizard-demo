import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalStepsComponent } from './optional-steps.component';

describe('OptionalStepsComponent', () => {
  let component: OptionalStepsComponent;
  let fixture: ComponentFixture<OptionalStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalStepsComponent ]
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
