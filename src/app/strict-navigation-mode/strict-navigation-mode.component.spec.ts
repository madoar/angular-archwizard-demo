import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictNavigationModeComponent } from './strict-navigation-mode.component';
import { StrictNavigationModeModule } from './strict-navigation-mode.module';

describe('StrictNavigationModeComponent', () => {
  let component: StrictNavigationModeComponent;
  let fixture: ComponentFixture<StrictNavigationModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StrictNavigationModeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictNavigationModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
