import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixForNgforComponent } from './fix-for-ngfor.component';

describe('FixForNgforComponent', () => {
  let component: FixForNgforComponent;
  let fixture: ComponentFixture<FixForNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixForNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixForNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
