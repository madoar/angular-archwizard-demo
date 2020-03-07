import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLineCssComponent } from './custom-line-css.component';
import { CustomLineCssModule } from './custom-line-css.module';

describe('CustomLineCssComponent', () => {
  let component: CustomLineCssComponent;
  let fixture: ComponentFixture<CustomLineCssComponent>;

  beforeEach(async(() => {
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
