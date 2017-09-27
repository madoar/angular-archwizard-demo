import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletionStepBasicComponent } from './completion-step-basic.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CompletionStepBasicComponent],
  exports: [CompletionStepBasicComponent]
})
export class CompletionStepBasicModule { }
