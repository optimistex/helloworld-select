import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {INgxSelectOptions, NgxSelectModule} from 'ngx-select-ex';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name',
  keyCodeToOptionsOpen: 'ArrowDown'
};

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

