import {Component, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {INgxSelectOption} from 'ngx-select-ex';
// import {INgxSelectOption} from '../../lib/ngx-select/ngx-select.interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

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
  //
  // public items: string[] = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  //   'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  //   'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
  //   'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
  //   'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
  //   'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
  //   'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
  //   'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
  //   'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
  //   'Zagreb', 'Zaragoza', 'Łódź'];

  public ngxControl = new FormControl();

  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;

  public searchCallback = (search: string, item: INgxSelectOption) => {

    console.log(item.data.ds);
    console.log("search:" + search);
    console.log("data.id:" + +search === item.data.id);
    console.log("regexpr:" + new RegExp('[a-zA-Z0-9]').test(search));
    console.log("data.ds:" + (item.data.ds === search));
    return (!search) ||
      (+search === item.data.id) ||
      (new RegExp('[a-zA-Z0-9]').test(search)) ||
      (item.data.ds === search);
  }



  // public searchCallback = (search: string, item: INgxSelectOption) => ((+search === item.data.id) || (item.data.ds === search));




  constructor() {
    // consoelsearchCallback
    const idx = Math.floor(Math.random() * (this.items.length - 1));
    this._ngxDefault = this.items[idx].ds;


    // this._ngxDefaultTimeout = setTimeout(() => {
    //   this._ngxDefaultInterval = setInterval(() => {
    //     const idx = Math.floor(Math.random() * (this.items.length - 1));
    //     this._ngxDefault = this.items[idx].ds;
    //      // console.log('new default value = ', this._ngxDefault);
    //   }, 2000);
    // }, 2000);
  }

  ngOnDestroy(): void {
    // clearTimeout(this._ngxDefaultTimeout);
    // clearInterval(this._ngxDefaultInterval);
  }

  public doNgxDefault(): any {
    return this._ngxDefault;
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
