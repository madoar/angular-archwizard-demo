import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeNavigationModeComponent } from './free-navigation-mode.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [FreeNavigationModeComponent],
  exports: [FreeNavigationModeComponent]
})
export class FreeNavigationModeModule { }
