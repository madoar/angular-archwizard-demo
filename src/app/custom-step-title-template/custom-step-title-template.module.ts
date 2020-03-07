import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepTitleTemplateComponent } from './custom-step-title-template.component';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomStepTitleTemplateComponent],
  exports: [CustomStepTitleTemplateComponent]
})
export class CustomStepTitleTemplateModule { }
