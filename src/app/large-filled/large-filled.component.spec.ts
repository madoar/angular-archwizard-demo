import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LargeFilledComponent } from './large-filled.component';
import { LargeFilledModule } from './large-filled.module';

describe('LargeFilledComponent', () => {
  let component: LargeFilledComponent;
  let fixture: ComponentFixture<LargeFilledComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LargeFilledModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
