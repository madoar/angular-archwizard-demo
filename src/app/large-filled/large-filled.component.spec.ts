import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFilledComponent } from './large-filled.component';

describe('LargeFilledComponent', () => {
  let component: LargeFilledComponent;
  let fixture: ComponentFixture<LargeFilledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeFilledComponent ]
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
