import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepExitEventComponent } from './step-exit-event.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [StepExitEventComponent],
  exports: [StepExitEventComponent]
})
export class StepExitEventModule { }
