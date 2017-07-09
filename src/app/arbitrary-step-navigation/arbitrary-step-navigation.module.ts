import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbitraryStepNavigationComponent } from './arbitrary-step-navigation.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [ArbitraryStepNavigationComponent],
  exports: [ArbitraryStepNavigationComponent]
})
export class ArbitraryStepNavigationModule { }
