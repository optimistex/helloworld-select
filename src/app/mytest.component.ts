import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {INgxSelectOption} from 'ngx-select-ex';
import * as escapeStringNs from 'escape-string-regexp';
// import {INgxSelectOption} from '../../lib/ngx-select/ngx-select.interfaces';
const escapeString = escapeStringNs;

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit, OnDestroy{

  // private _ngxDefaultTimeout;
  // private _ngxDefaultInterval;
  private _ngxDefault: string;

  @Input() valorPorDefecto;

  public items = [
    {id: 1, ds: "uno", selected: true},
    {id: 2, ds: "dos", selected: true},
    {id: 3, ds: "tres", selected: true},
    {id: 4, ds: "cuatro", selected: true},
    {id: 5, ds: "cinco", selected: true},
    {id: 6, ds: "seis", selected: true},
    {id: 7, ds: "siete", selected: true},
    {id: 8, ds: "ocho", selected: true},
    {id: 9, ds: "nueve", selected: true},
    {id: 10, ds: "diez", selected: true}
  ];

  public searchCallback = (search: string, item: INgxSelectOption) => {

    console.log(item.data.ds);
    console.log("search:" + search);
    console.log("data.id:" + (+search === item.data.id));
    console.log("regexpr:" + new RegExp('[a-zA-Z0-9]').test(search));
    console.log("data.ds:" + (item.data.ds === search));
    return (!search) ||
      (((new RegExp(escapeString(search), 'i')).test(item.data.ds))) ||
      (item.data.id === +search) ||
      (item.data.ds === search);
  }

  constructor() {
    // this._ngxDefault = this.valorPorDefecto;
    // this._ngxDefaultTimeout = setTimeout(() => {
    //   this._ngxDefaultInterval = setInterval(() => {
    //     const idx = Math.floor(Math.random() * (this.items.length - 1));
    //     this._ngxDefault = this.items[idx].ds;
    //     console.log('new default value = ', this._ngxDefault);
    //   }, 2000);
    // }, 2000);
  }

  ngOnDestroy(): void {
    // clearTimeout(this._ngxDefaultTimeout);
    // clearInterval(this._ngxDefaultInterval);
  }

  ngOnInit() {
  }

  public doNgxDefault(): any {
    console.log("doNgxDefault | valorPorDefecto " + this.valorPorDefecto);
    return this.valorPorDefecto;
  }

  public inputTyped(source: string, text: string) {
    console.log('SingleDemoComponent.inputTyped', source, text);
  }

  public doFocus() {
    console.log('SingleDemoComponent.doFocus');
  }

  public doBlur() {
    console.log('SingleDemoComponent.doBlur');
  }

  public doOpen() {
    console.log('SingleDemoComponent.doOpen');
  }

  public doClose() {
    console.log('SingleDemoComponent.doClose');
  }

  public doSelect(value: any) {
    console.log('SingleDemoComponent.doSelect', value);
  }

  public doRemove(value: any) {
    console.log('SingleDemoComponent.doRemove', value);
  }

  public doSelectOptions = (options: INgxSelectOption[]) => console.log('AppComponent.doSelectOptions', options);

}
