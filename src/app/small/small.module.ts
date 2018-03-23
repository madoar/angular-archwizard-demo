import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallComponent } from './small.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [SmallComponent],
  exports: [SmallComponent]
})
export class SmallModule { }
