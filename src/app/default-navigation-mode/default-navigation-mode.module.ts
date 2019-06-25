import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchwizardModule} from 'angular-archwizard';
import {DefaultNavigationModeComponent} from './default-navigation-mode.component';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [DefaultNavigationModeComponent],
  exports: [DefaultNavigationModeComponent]
})
export class DefaultNavigationModeModule { }
