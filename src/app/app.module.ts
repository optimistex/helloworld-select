import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {INgxSelectOptions, NgxSelectModule} from 'ngx-select-ex';
import { MytestComponent } from './test/mytest/mytest.component';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'ds',
  keyCodeToOptionsOpen: 'ArrowDown'
};

@NgModule({
  declarations: [
    AppComponent,
    MytestComponent,
  ],
  imports: [
    BrowserModule, NgxSelectModule.forRoot(CustomSelectOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
