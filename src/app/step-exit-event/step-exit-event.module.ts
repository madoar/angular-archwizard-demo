import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepExitEventComponent } from './step-exit-event.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [StepExitEventComponent],
  exports: [StepExitEventComponent]
})
export class StepExitEventModule { }
