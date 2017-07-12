import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepComponentComponent } from './custom-step-component.component';

describe('CustomStepComponentComponent', () => {
  let component: CustomStepComponentComponent;
  let fixture: ComponentFixture<CustomStepComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStepComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
