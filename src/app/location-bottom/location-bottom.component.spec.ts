import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocationBottomComponent } from './location-bottom.component';
import { LocationBottomModule } from './location-bottom.module';

describe('LocationBottomComponent', () => {
  let component: LocationBottomComponent;
  let fixture: ComponentFixture<LocationBottomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LocationBottomModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
