import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationLeftComponent } from './location-left.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LocationLeftComponent],
  exports: [LocationLeftComponent]
})
export class LocationLeftModule { }
