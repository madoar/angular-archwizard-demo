import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeEmptyComponent } from './large-empty.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [LargeEmptyComponent],
  exports: [LargeEmptyComponent]
})
export class LargeEmptyModule { }
