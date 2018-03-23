import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeFilledComponent } from './large-filled.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LargeFilledComponent],
  exports: [LargeFilledComponent]
})
export class LargeFilledModule { }
