import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleStepHorizontalComponent } from './single-step-horizontal.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [SingleStepHorizontalComponent],
  exports: [SingleStepHorizontalComponent]
})
export class SingleStepHorizontalModule { }
