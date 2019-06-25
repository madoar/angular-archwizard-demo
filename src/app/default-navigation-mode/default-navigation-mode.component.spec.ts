import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNavigationModeComponent } from './default-navigation-mode.component';
import { DefaultNavigationModeModule } from './default-navigation-mode.module';

describe('DefaultNavigationModeComponent', () => {
  let component: DefaultNavigationModeComponent;
  let fixture: ComponentFixture<DefaultNavigationModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DefaultNavigationModeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNavigationModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
