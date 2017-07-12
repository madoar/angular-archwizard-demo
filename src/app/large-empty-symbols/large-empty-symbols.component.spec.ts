import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeEmptySymbolsComponent } from './large-empty-symbols.component';

describe('LargeEmptySymbolsComponent', () => {
  let component: LargeEmptySymbolsComponent;
  let fixture: ComponentFixture<LargeEmptySymbolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeEmptySymbolsComponent ]
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
