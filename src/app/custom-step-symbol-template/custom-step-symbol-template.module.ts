import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepSymbolTemplateComponent } from './custom-step-symbol-template.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomStepSymbolTemplateComponent],
  exports: [CustomStepSymbolTemplateComponent]
})
export class CustomStepSymbolTemplateModule { }
