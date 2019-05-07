import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRightComponent } from './location-right.component';
import { LocationRightModule } from './location-right.module';

describe('LocationRightComponent', () => {
  let component: LocationRightComponent;
  let fixture: ComponentFixture<LocationRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LocationRightModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
