import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionStepBasicComponent } from './completion-step-basic.component';
import { CompletionStepBasicModule } from './completion-step-basic.module';

describe('CompletionStepBasicComponent', () => {
  let component: CompletionStepBasicComponent;
  let fixture: ComponentFixture<CompletionStepBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CompletionStepBasicModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionStepBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
