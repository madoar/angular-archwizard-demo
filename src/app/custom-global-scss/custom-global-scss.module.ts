import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CustomGlobalScssComponent} from './custom-global-scss.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ArchwizardModule
  ],
  declarations: [CustomGlobalScssComponent],
  exports: [CustomGlobalScssComponent]
})
export class CustomGlobalScssModule {}
