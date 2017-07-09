import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeFilledSymbolsComponent } from './large-filled-symbols.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LargeFilledSymbolsComponent],
  exports: [LargeFilledSymbolsComponent]
})
export class LargeFilledSymbolsModule { }
