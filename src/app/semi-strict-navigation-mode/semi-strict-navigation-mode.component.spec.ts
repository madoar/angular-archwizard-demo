import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiStrictNavigationModeComponent } from './semi-strict-navigation-mode.component';
import { SemiStrictNavigationModeModule } from './semi-strict-navigation-mode.module';

describe('SemiStrictNavigationModeComponent', () => {
  let component: SemiStrictNavigationModeComponent;
  let fixture: ComponentFixture<SemiStrictNavigationModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SemiStrictNavigationModeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiStrictNavigationModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
