import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomCssComponent} from './custom-css.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomCssComponent],
  exports: [CustomCssComponent]
})
export class CustomCssModule {}
