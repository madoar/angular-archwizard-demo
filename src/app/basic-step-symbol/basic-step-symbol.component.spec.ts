import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStepSymbolComponent } from './basic-step-symbol.component';

describe('BasicStepSymbolComponent', () => {
  let component: BasicStepSymbolComponent;
  let fixture: ComponentFixture<BasicStepSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStepSymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStepSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
