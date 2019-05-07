import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanEnterEventComponent } from './can-enter-event.component';
import { CanEnterEventModule } from './can-enter-event.module';

describe('CanEnterEventComponent', () => {
  let component: CanEnterEventComponent;
  let fixture: ComponentFixture<CanEnterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CanEnterEventModule ]
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
