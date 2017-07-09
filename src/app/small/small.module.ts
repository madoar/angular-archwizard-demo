import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallComponent } from './small.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [SmallComponent],
  exports: [SmallComponent]
})
export class SmallModule { }
