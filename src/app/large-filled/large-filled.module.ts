import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeFilledComponent } from './large-filled.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LargeFilledComponent],
  exports: [LargeFilledComponent]
})
export class LargeFilledModule { }
