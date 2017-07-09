import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTopComponent } from './location-top.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LocationTopComponent],
  exports: [LocationTopComponent]
})
export class LocationTopModule { }
