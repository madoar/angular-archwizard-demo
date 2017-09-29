import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCssComponent } from './custom-css.component';

describe('CustomCssComponent', () => {
  let component: CustomCssComponent;
  let fixture: ComponentFixture<CustomCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
