import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallComponent } from './small.component';
import { SmallModule } from './small.module';

describe('SmallComponent', () => {
  let component: SmallComponent;
  let fixture: ComponentFixture<SmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SmallModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
