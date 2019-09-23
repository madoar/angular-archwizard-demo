import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleStepComponent } from './single-step.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [SingleStepComponent],
  exports: [SingleStepComponent]
})
export class SingleStepModule { }
