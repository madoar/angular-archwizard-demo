import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanExitEventComponent } from './can-exit-event.component';

describe('CanExitEventComponent', () => {
  let component: CanExitEventComponent;
  let fixture: ComponentFixture<CanExitEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanExitEventComponent ]
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
