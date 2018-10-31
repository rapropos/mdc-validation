import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdcButtonModule, MdcTextFieldModule} from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdcTextFieldModule,
    MdcButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
