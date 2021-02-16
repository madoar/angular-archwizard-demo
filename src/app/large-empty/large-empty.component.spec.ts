import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LargeEmptyComponent } from './large-empty.component';
import { LargeEmptyModule } from './large-empty.module';

describe('LargeEmptyComponent', () => {
  let component: LargeEmptyComponent;
  let fixture: ComponentFixture<LargeEmptyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LargeEmptyModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
