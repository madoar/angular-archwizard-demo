import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletionStepBackNavigationComponent } from './completion-step-back-navigation.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [CompletionStepBackNavigationComponent],
  exports: [CompletionStepBackNavigationComponent]
})
export class CompletionStepBackNavigationModule { }
