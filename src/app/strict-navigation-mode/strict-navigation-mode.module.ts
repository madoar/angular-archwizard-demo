import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchwizardModule} from 'angular-archwizard';
import {StrictNavigationModeComponent} from './strict-navigation-mode.component';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [StrictNavigationModeComponent],
  exports: [StrictNavigationModeComponent]
})
export class StrictNavigationModeModule { }
