import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfigurableNavigationModeComponent } from './configurable-navigation-mode.component';
import { ConfigurableNavigationModeModule } from './configurable-navigation-mode.module';

describe('ConfigurableNavigationModeComponent', () => {
  let component: ConfigurableNavigationModeComponent;
  let fixture: ComponentFixture<ConfigurableNavigationModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ConfigurableNavigationModeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableNavigationModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
