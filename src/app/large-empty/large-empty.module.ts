import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeEmptyComponent } from './large-empty.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [LargeEmptyComponent],
  exports: [LargeEmptyComponent]
})
export class LargeEmptyModule { }
