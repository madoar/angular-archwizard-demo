import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeEmptyComponent } from './large-empty.component';

describe('LargeEmptyComponent', () => {
  let component: LargeEmptyComponent;
  let fixture: ComponentFixture<LargeEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeEmptyComponent ]
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
