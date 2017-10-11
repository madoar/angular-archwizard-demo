import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversedNavigationBarComponent } from './reversed-navigation-bar.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [ReversedNavigationBarComponent],
  exports: [ReversedNavigationBarComponent]
})
export class ReversedNavigationBarModule { }
