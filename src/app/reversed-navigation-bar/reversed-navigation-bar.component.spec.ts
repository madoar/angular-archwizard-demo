import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversedNavigationBarComponent } from './reversed-navigation-bar.component';

describe('ReversedNavigationBarComponent', () => {
  let component: ReversedNavigationBarComponent;
  let fixture: ComponentFixture<ReversedNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReversedNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversedNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
