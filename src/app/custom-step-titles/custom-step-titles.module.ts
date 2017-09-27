import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepTitlesComponent } from './custom-step-titles.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomStepTitlesComponent],
  exports: [CustomStepTitlesComponent]
})
export class CustomStepTitlesModule { }
