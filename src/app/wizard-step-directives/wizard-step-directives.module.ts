import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepDirectivesComponent } from './wizard-step-directives.component';
import {WizardModule} from 'ng2-archwizard';
import { CustomStepComponentComponent } from '../custom-step-component/custom-step-component.component';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [WizardStepDirectivesComponent, CustomStepComponentComponent],
  exports: [WizardStepDirectivesComponent]
})
export class WizardStepDirectivesModule { }
