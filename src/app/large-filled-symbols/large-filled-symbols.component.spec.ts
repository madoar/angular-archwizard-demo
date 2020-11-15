import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LargeFilledSymbolsComponent } from './large-filled-symbols.component';
import { LargeFilledSymbolsModule } from './large-filled-symbols.module';

describe('LargeFilledSymbolsComponent', () => {
  let component: LargeFilledSymbolsComponent;
  let fixture: ComponentFixture<LargeFilledSymbolsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LargeFilledSymbolsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeFilledSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
