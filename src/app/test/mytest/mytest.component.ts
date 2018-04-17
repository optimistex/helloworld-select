import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {INgxSelectOption} from 'ngx-select-ex';
import * as escapeStringNs from 'escape-string-regexp';
// import {INgxSelectOption} from '../../lib/ngx-select/ngx-select.interfaces';
const escapeString = escapeStringNs;

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html'
})
export class MytestComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild('selOperadora') selectOperadoras: ElementRef;

  @Input() valorPorDefecto;
  @Input() items;
  @Input() field;
  @Input() isRequired;

  @Output() valorSeleccionado: EventEmitter<any> = new EventEmitter<any>();


  isDeleted: boolean;


  public searchCallback = (search: string, item: INgxSelectOption) => {

    return (!search) ||
      (((new RegExp(escapeString(search), 'i')).test(item.data.ds))) ||
      (item.data.id === +search) ||
      (item.data.ds === search);
  }

  constructor() {}

  ngOnDestroy(): void {}

  ngOnInit() {
    this.isDeleted = false;

  }

  ngAfterViewInit() {
    this.selectOperadoras.nativeElement.optionsOpen();
  }

  public doNgxDefault(): any {
    let defObj;
    let result;
    if (this.field === 'id') {
      defObj = this.items.find(item => item.id === +this.valorPorDefecto);
    } else {
      defObj = this.items.find(item => item.ds === this.valorPorDefecto);
    }
    result = defObj ? defObj.id : null;

    // this.valorSeleccionado.emit(result);

    return result;
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
    this.isDeleted = false;
    this.valorSeleccionado.emit(value);
  }

  public doRemove(value: any) {
    console.log('SingleDemoComponent.doRemove', value);

    this.valorSeleccionado.emit(null);
    this.isDeleted = (this.isRequired);

    console.log('SingleDemoComponent.doRemove', this.valorSeleccionado);
  }

  public doSelectOptions = (options: INgxSelectOption[]) => console.log('AppComponent.doSelectOptions', options);

}
