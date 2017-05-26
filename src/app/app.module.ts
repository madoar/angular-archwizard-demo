import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WizardTestComponent } from './pizza.component';
import {WizardModule} from 'ng2-archwizard';

@NgModule({
  declarations: [
    WizardTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [WizardTestComponent]
})
export class AppModule { }
