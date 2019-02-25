import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomStepCssComponent} from './custom-step-css.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomStepCssComponent],
  exports: [CustomStepCssComponent]
})
export class CustomStepCssModule {}
