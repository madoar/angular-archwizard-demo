import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchwizardModule} from 'angular-archwizard';
import {CustomNavigationModeComponent} from './custom-navigation-mode.component';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule.forRoot()
  ],
  declarations: [CustomNavigationModeComponent],
  exports: [CustomNavigationModeComponent]
})
export class CustomNavigationModeModule { }
