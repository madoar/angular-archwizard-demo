import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionStepBackNavigationComponent } from './completion-step-back-navigation.component';

describe('CompletionStepBackNavigationComponent', () => {
  let component: CompletionStepBackNavigationComponent;
  let fixture: ComponentFixture<CompletionStepBackNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionStepBackNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionStepBackNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
