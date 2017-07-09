import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicStepSymbolComponent } from './basic-step-symbol.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [BasicStepSymbolComponent],
  exports: [BasicStepSymbolComponent]
})
export class BasicStepSymbolModule { }
