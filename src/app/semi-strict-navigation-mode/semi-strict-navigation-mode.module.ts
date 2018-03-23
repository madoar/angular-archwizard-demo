import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemiStrictNavigationModeComponent } from './semi-strict-navigation-mode.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [SemiStrictNavigationModeComponent],
  exports: [SemiStrictNavigationModeComponent]
})
export class SemiStrictNavigationModeModule { }
