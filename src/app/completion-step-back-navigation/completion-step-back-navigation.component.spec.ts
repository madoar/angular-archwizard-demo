import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionStepBackNavigationComponent } from './completion-step-back-navigation.component';
import { CompletionStepBackNavigationModule } from './completion-step-back-navigation.module';

describe('CompletionStepBackNavigationComponent', () => {
  let component: CompletionStepBackNavigationComponent;
  let fixture: ComponentFixture<CompletionStepBackNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CompletionStepBackNavigationModule ]
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
