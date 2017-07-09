import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRightComponent } from './location-right.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LocationRightComponent],
  exports: [LocationRightComponent]
})
export class LocationRightModule { }
