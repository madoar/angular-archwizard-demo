import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardStepNgForComponent} from './wizard-step-ngfor.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [WizardStepNgForComponent],
  exports: [WizardStepNgForComponent]
})

export class WizardStepNgForModule {
}