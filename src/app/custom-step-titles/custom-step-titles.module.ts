import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepTitlesComponent } from './custom-step-titles.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [CustomStepTitlesComponent],
  exports: [CustomStepTitlesComponent]
})
export class CustomStepTitlesModule { }
