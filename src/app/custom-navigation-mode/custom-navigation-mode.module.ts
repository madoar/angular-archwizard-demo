import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchwizardModule, ArchwizardModuleConfig} from 'angular-archwizard';
import {CustomNavigationModeComponent} from './custom-navigation-mode.component';
import {CustomNavigationModeFactory} from './custom-navigation-mode-factory.provider';

const config: ArchwizardModuleConfig = {
  navigationModeFactory: CustomNavigationModeFactory,
};

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule.forRoot(config)
  ],
  declarations: [CustomNavigationModeComponent],
  exports: [CustomNavigationModeComponent]
})
export class CustomNavigationModeModule { }
