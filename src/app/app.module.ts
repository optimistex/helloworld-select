import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
