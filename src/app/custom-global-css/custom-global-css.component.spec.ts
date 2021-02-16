import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CustomGlobalCssComponent} from './custom-global-css.component';
import { CustomGlobalCssModule } from './custom-global-css.module';

describe('CustomGlobalCssComponent', () => {
  let component: CustomGlobalCssComponent;
  let fixture: ComponentFixture<CustomGlobalCssComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ CustomGlobalCssModule ]
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
