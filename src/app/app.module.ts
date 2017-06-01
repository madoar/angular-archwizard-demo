import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {WizardModule} from 'ng2-archwizard';
import { PizzaComponent } from './pizza.component';

@NgModule({
  declarations: [
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [PizzaComponent]
})
export class AppModule { }
