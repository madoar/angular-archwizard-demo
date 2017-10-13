import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FixForNgforComponent} from './fix-for-ngfor.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [FixForNgforComponent],
  exports: [FixForNgforComponent]
})

export class FixForNgforModule {
}