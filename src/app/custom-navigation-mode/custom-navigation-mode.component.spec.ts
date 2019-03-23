import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavigationModeComponent } from './custom-navigation-mode.component';

describe('CustomNavigationModeComponent', () => {
  let component: CustomNavigationModeComponent;
  let fixture: ComponentFixture<CustomNavigationModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNavigationModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavigationModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
