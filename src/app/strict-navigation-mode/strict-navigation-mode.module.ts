import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardModule} from 'ng2-archwizard';
import {StrictNavigationModeComponent} from './strict-navigation-mode.component';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [StrictNavigationModeComponent],
  exports: [StrictNavigationModeComponent]
})
export class StrictNavigationModeModule { }
