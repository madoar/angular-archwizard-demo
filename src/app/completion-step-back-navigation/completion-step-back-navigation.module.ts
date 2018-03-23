import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletionStepBackNavigationComponent } from './completion-step-back-navigation.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CompletionStepBackNavigationComponent],
  exports: [CompletionStepBackNavigationComponent]
})
export class CompletionStepBackNavigationModule { }
