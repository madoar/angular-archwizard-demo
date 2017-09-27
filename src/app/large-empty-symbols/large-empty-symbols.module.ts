import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeEmptySymbolsComponent } from './large-empty-symbols.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LargeEmptySymbolsComponent],
  exports: [LargeEmptySymbolsComponent]
})
export class LargeEmptySymbolsModule { }
