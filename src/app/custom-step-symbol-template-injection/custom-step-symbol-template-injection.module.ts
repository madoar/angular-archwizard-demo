import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepSymbolTemplateInjectionComponent } from './custom-step-symbol-template-injection.component';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomStepSymbolTemplateInjectionComponent],
  exports: [CustomStepSymbolTemplateInjectionComponent]
})
export class CustomStepSymbolTemplateInjectionModule { }
