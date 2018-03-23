import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRightComponent } from './location-right.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LocationRightComponent],
  exports: [LocationRightComponent]
})
export class LocationRightModule { }
