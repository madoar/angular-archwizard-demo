import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResetWizardComponent} from './reset-wizard.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [ResetWizardComponent],
  exports: [ResetWizardComponent]
})
export class ResetWizardModule {
}
