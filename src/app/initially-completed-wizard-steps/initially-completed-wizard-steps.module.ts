import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiallyCompletedWizardStepsComponent } from './initially-completed-wizard-steps.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [InitiallyCompletedWizardStepsComponent],
  exports: [InitiallyCompletedWizardStepsComponent]
})
export class InitiallyCompletedWizardStepsModule { }
