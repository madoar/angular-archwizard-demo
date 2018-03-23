import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicStepSymbolComponent } from './basic-step-symbol.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [BasicStepSymbolComponent],
  exports: [BasicStepSymbolComponent]
})
export class BasicStepSymbolModule { }
