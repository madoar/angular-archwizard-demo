import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchwizardModule, ArchwizardModuleConfig} from 'angular-archwizard';
import {CustomNavigationModeComponent} from './custom-navigation-mode.component';
import {CustomNavigationModeFactory} from './custom-navigation-mode-factory.provider';

const config: ArchwizardModuleConfig = {
  navigationModeFactory: new CustomNavigationModeFactory(),
};

@NgModule({
  imports: [
    CommonModule,
    // Here we use ArchwizardModule.forRoot() to pass additional configuration and
    // tell angular-archwizard about our CustomNavigationModeFactory.
    ArchwizardModule.forRoot(config)
  ],
  declarations: [CustomNavigationModeComponent],
  exports: [CustomNavigationModeComponent]
})
export class CustomNavigationModeModule { }
