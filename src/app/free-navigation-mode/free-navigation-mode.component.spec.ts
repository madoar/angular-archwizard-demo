import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeNavigationModeComponent } from './free-navigation-mode.component';

describe('FreeNavigationModeComponent', () => {
  let component: FreeNavigationModeComponent;
  let fixture: ComponentFixture<FreeNavigationModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeNavigationModeComponent ]
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
