import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbitraryStepNavigationComponent } from './arbitrary-step-navigation.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [ArbitraryStepNavigationComponent],
  exports: [ArbitraryStepNavigationComponent]
})
export class ArbitraryStepNavigationModule { }
