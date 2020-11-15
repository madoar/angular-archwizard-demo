import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArbitraryStepNavigationComponent } from './arbitrary-step-navigation.component';
import { ArbitraryStepNavigationModule } from './arbitrary-step-navigation.module';

describe('ArbitraryStepNavigationComponent', () => {
  let component: ArbitraryStepNavigationComponent;
  let fixture: ComponentFixture<ArbitraryStepNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ArbitraryStepNavigationModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitraryStepNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
