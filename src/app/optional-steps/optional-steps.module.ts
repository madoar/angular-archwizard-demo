import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalStepsComponent } from './optional-steps.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [OptionalStepsComponent],
  exports: [OptionalStepsComponent]
})
export class OptionalStepsModule { }
