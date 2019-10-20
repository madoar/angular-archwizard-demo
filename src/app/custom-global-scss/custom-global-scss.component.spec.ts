import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CustomGlobalScssComponent} from './custom-global-scss.component';
import { CustomGlobalScssModule } from './custom-global-scss.module';

describe('CustomGlobalScssComponent', () => {
  let component: CustomGlobalScssComponent;
  let fixture: ComponentFixture<CustomGlobalScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomGlobalScssModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGlobalScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
