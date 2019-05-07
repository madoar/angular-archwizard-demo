import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationLeftComponent } from './location-left.component';
import { LocationLeftModule } from './location-left.module';

describe('LocationLeftComponent', () => {
  let component: LocationLeftComponent;
  let fixture: ComponentFixture<LocationLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LocationLeftModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
