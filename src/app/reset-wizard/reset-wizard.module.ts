import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetWizardComponent } from './reset-wizard.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    WizardModule
  ],
  declarations: [ResetWizardComponent],
  exports: [ResetWizardComponent]
})
export class ResetWizardModule { }
