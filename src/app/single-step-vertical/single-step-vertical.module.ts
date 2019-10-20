import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleStepVerticalComponent } from './single-step-vertical.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [SingleStepVerticalComponent],
  exports: [SingleStepVerticalComponent]
})
export class SingleStepVerticalModule { }
