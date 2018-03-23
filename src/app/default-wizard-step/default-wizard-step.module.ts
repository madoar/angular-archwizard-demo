import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultWizardStepComponent } from './default-wizard-step.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [DefaultWizardStepComponent],
  exports: [DefaultWizardStepComponent]
})
export class DefaultWizardStepModule { }
