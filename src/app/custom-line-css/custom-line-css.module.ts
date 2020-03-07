import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLineCssComponent } from './custom-line-css.component';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [CustomLineCssComponent],
  exports: [CustomLineCssComponent]
})
export class CustomLineCssModule { }
