import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemiStrictNavigationModeComponent } from './semi-strict-navigation-mode.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [SemiStrictNavigationModeComponent],
  exports: [SemiStrictNavigationModeComponent]
})
export class SemiStrictNavigationModeModule { }
