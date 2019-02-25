import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CustomStepCssComponent} from './custom-step-css.component';

describe('CustomStepCssComponent', () => {
  let component: CustomStepCssComponent;
  let fixture: ComponentFixture<CustomStepCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStepCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
