import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeEmptyComponent } from './large-empty.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LargeEmptyComponent],
  exports: [LargeEmptyComponent]
})
export class LargeEmptyModule { }
