import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanEnterEventComponent } from './can-enter-event.component';
import {FormsModule} from '@angular/forms';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArchwizardModule
  ],
  declarations: [CanEnterEventComponent],
  exports: [CanEnterEventComponent]
})
export class CanEnterEventModule { }
