import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepEnterEventComponent } from './step-enter-event.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [StepEnterEventComponent],
  exports: [StepEnterEventComponent]
})
export class StepEnterEventModule { }
