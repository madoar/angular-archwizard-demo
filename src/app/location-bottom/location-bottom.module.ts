import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBottomComponent } from './location-bottom.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LocationBottomComponent],
  exports: [LocationBottomComponent]
})
export class LocationBottomModule { }
