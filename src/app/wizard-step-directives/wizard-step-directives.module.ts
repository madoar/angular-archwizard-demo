import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepDirectivesComponent } from './wizard-step-directives.component';
import {ArchwizardModule} from 'angular-archwizard';
import { CustomStepComponentComponent } from '../custom-step-component/custom-step-component.component';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [WizardStepDirectivesComponent, CustomStepComponentComponent],
  exports: [WizardStepDirectivesComponent]
})
export class WizardStepDirectivesModule { }
