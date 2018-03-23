import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBottomComponent } from './location-bottom.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LocationBottomComponent],
  exports: [LocationBottomComponent]
})
export class LocationBottomModule { }
