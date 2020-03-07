import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepTitleTemplateInjectionComponent } from './custom-step-title-template-injection.component';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomStepTitleTemplateInjectionComponent],
  exports: [CustomStepTitleTemplateInjectionComponent]
})
export class CustomStepTitleTemplateInjectionModule { }
