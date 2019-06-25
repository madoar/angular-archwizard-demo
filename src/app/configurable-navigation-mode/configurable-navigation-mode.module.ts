import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ConfigurableNavigationModeComponent} from './configurable-navigation-mode.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule,
    FormsModule, // [(ngModel)]
  ],
  declarations: [ConfigurableNavigationModeComponent],
  exports: [ConfigurableNavigationModeComponent]
})
export class ConfigurableNavigationModeModule { }
