import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTopComponent } from './location-top.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LocationTopComponent],
  exports: [LocationTopComponent]
})
export class LocationTopModule { }
