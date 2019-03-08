import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CustomGlobalCssComponent} from './custom-global-css.component';

describe('CustomGlobalCssComponent', () => {
  let component: CustomGlobalCssComponent;
  let fixture: ComponentFixture<CustomGlobalCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomGlobalCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGlobalCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
