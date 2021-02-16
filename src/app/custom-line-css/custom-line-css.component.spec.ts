import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CustomLineCssComponent } from './custom-line-css.component';
import { CustomLineCssModule } from './custom-line-css.module';

describe('CustomLineCssComponent', () => {
  let component: CustomLineCssComponent;
  let fixture: ComponentFixture<CustomLineCssComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CustomLineCssModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLineCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
