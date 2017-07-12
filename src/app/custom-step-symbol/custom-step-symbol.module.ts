import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepSymbolComponent } from './custom-step-symbol.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [CustomStepSymbolComponent],
  exports: [CustomStepSymbolComponent]
})
export class CustomStepSymbolModule { }
