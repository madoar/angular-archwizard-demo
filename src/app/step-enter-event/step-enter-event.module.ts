import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepEnterEventComponent } from './step-enter-event.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [StepEnterEventComponent],
  exports: [StepEnterEventComponent]
})
export class StepEnterEventModule { }
