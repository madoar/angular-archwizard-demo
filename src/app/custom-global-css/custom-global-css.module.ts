import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomGlobalCssComponent} from './custom-global-css.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomGlobalCssComponent],
  exports: [CustomGlobalCssComponent]
})
export class CustomGlobalCssModule {}
