import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiStrictNavigationModeComponent } from './semi-strict-navigation-mode.component';

describe('SemiStrictNavigationModeComponent', () => {
  let component: SemiStrictNavigationModeComponent;
  let fixture: ComponentFixture<SemiStrictNavigationModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiStrictNavigationModeComponent ]
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
