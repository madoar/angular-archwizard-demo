import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeEmptySymbolsComponent } from './large-empty-symbols.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LargeEmptySymbolsComponent],
  exports: [LargeEmptySymbolsComponent]
})
export class LargeEmptySymbolsModule { }
