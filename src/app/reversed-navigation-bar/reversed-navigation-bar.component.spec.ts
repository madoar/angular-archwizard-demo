import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversedNavigationBarComponent } from './reversed-navigation-bar.component';
import { ReversedNavigationBarModule } from './reversed-navigation-bar.module';

describe('ReversedNavigationBarComponent', () => {
  let component: ReversedNavigationBarComponent;
  let fixture: ComponentFixture<ReversedNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReversedNavigationBarModule ]
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
