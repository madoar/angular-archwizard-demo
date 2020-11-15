import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CanExitEventComponent } from './can-exit-event.component';
import { CanExitEventModule } from './can-exit-event.module';

describe('CanExitEventComponent', () => {
  let component: CanExitEventComponent;
  let fixture: ComponentFixture<CanExitEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ CanExitEventModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanExitEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
