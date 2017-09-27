import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanExitEventComponent } from './can-exit-event.component';
import { ArchwizardModule } from 'ng2-archwizard';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArchwizardModule
  ],
  declarations: [CanExitEventComponent],
  exports: [CanExitEventComponent]
})
export class CanExitEventModule { }
