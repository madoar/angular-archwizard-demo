import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepTitlesComponent } from './custom-step-titles.component';

describe('CustomStepTitlesComponent', () => {
  let component: CustomStepTitlesComponent;
  let fixture: ComponentFixture<CustomStepTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStepTitlesComponent ]
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
