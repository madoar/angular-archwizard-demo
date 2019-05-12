import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeNavigationModeComponent } from './free-navigation-mode.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [FreeNavigationModeComponent],
  exports: [FreeNavigationModeComponent]
})
export class FreeNavigationModeModule { }
