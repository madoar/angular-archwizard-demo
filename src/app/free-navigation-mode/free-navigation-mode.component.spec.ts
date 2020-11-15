import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FreeNavigationModeComponent } from './free-navigation-mode.component';
import { FreeNavigationModeModule } from './free-navigation-mode.module';

describe('FreeNavigationModeComponent', () => {
  let component: FreeNavigationModeComponent;
  let fixture: ComponentFixture<FreeNavigationModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FreeNavigationModeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeNavigationModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
