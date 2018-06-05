import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalLastStepComponent } from './optional-last-step.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [OptionalLastStepComponent],
  exports: [OptionalLastStepComponent]
})
export class OptionalLastStepModule { }
