import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArchwizardModule } from 'angular-archwizard';
import { NestedWizardsComponent } from './nested-wizards.component';
import { InnerWizardComponent } from './inner-wizard.component';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [NestedWizardsComponent, InnerWizardComponent],
  exports: [NestedWizardsComponent]
})
export class NestedWizardsModule { }
