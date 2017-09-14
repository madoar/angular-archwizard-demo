import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanEnterEventComponent } from './can-enter-event.component';

describe('CanEnterEventComponent', () => {
  let component: CanEnterEventComponent;
  let fixture: ComponentFixture<CanEnterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanEnterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanEnterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
