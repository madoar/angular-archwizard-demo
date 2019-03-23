import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeEmptySymbolsComponent } from './large-empty-symbols.component';
import { LargeEmptySymbolsModule } from './large-empty-symbols.module';

describe('LargeEmptySymbolsComponent', () => {
  let component: LargeEmptySymbolsComponent;
  let fixture: ComponentFixture<LargeEmptySymbolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LargeEmptySymbolsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeEmptySymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
