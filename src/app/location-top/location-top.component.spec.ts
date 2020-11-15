import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocationTopComponent } from './location-top.component';
import { LocationTopModule } from './location-top.module';

describe('LocationTopComponent', () => {
  let component: LocationTopComponent;
  let fixture: ComponentFixture<LocationTopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LocationTopModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
