import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultWizardStepComponent } from './default-wizard-step.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [DefaultWizardStepComponent],
  exports: [DefaultWizardStepComponent]
})
export class DefaultWizardStepModule { }
