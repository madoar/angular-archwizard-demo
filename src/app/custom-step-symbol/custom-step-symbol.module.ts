import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepSymbolComponent } from './custom-step-symbol.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomStepSymbolComponent],
  exports: [CustomStepSymbolComponent]
})
export class CustomStepSymbolModule { }
