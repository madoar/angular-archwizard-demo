import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationLeftComponent } from './location-left.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LocationLeftComponent],
  exports: [LocationLeftComponent]
})
export class LocationLeftModule { }
