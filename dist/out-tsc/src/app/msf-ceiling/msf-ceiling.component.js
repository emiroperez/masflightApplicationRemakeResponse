var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Arguments } from '../model/Arguments';
import { ReplaySubject } from 'rxjs';
var MsfCeilingComponent = /** @class */ (function () {
    function MsfCeilingComponent() {
        this.loading = false;
        /** control for the selected airport */
        //  public originAirportCtrl: FormControl = new FormControl();
        //  /** control for the MatSelect filter keyword */
        //  public originAirportFilterCtrl: FormControl = new FormControl();
        //  /** control for the selected airport for multi-selection */
        //  public destAirportCtrl: FormControl = new FormControl();
        //  /** control for the MatSelect filter keyword multi-selection */
        //  public destAirportFilterCtrl: FormControl = new FormControl();
        /** list of airports */
        this.airports = [
            { name: 'any', id: '' },
            { name: '100', id: '100' },
            { name: '200', id: '200' },
            { name: '300', id: '300' }
        ];
        /** list of banks filtered by search keyword */
        this.filteredOriginAirports = new ReplaySubject(1);
        // /** list of banks filtered by search keyword for multi-selection */
        this.filteredDestAirports = new ReplaySubject(1);
        // ngAfterViewInit() {
        //   this.setInitialValue();
        // }
        // ngOnDestroy() {
        //   this._onDestroy.next();
        //   this._onDestroy.complete();
        // }
        //  /**
        //  * Sets the initial value after the filteredBanks are loaded initially
        //  */
        // private setInitialValue() {
        //   this.filteredOriginAirports
        //     .pipe(take(1), takeUntil(this._onDestroy))
        //     .subscribe(() => {
        //       // setting the compareWith property to a comparison function
        //       // triggers initializing the selection according to the initial value of
        //       // the form control (i.e. _initializeSelection())
        //       // this needs to be done after the filteredBanks are loaded initially
        //       // and after the mat-option elements are available
        //       this.originAirportSelect.compareWith = (a: Airport, b: Airport) => a.id === b.id;
        //       this.destAirportSelect.compareWith = (a: Airport, b: Airport) => a.id === b.id;
        //     });
        // }
        // private filterOriginAirports() {
        //   if (!this.airports) {
        //     return;
        //   }
        //   // get the search keyword
        //   let search = this.originAirportFilterCtrl.value;
        //   if (!search) {
        //     this.filteredOriginAirports.next(this.airports.slice());
        //     return;
        //   } else {
        //     search = search.toLowerCase();
        //   }
        //   // filter the airports
        //   this.filteredOriginAirports.next(
        //     this.airports.filter(airport => airport.name.toLowerCase().indexOf(search) > -1)
        //   );
        // }
        // private filterDestAirports() {
        //   if (!this.airports) {
        //     return;
        //   }
        //   // get the search keyword
        //   let search = this.destAirportFilterCtrl.value;
        //   if (!search) {
        //     this.filteredDestAirports.next(this.airports.slice());
        //     return;
        //   } else {
        //     search = search.toLowerCase();
        //   }
        //   // filter the airports
        //   this.filteredDestAirports.next(
        //     this.airports.filter(airport => airport.name.toLowerCase().indexOf(search) > -1)
        //   );
        // }
    }
    // @ViewChild('originAirportSelect') originAirportSelect: MatSelect;
    // @ViewChild('destAirportSelect') destAirportSelect: MatSelect;
    // /** Subject that emits when the component has been destroyed. */
    // private _onDestroy = new Subject<void>();
    MsfCeilingComponent.prototype.ngOnInit = function () {
        this.argument.value1 = this.airports[0];
        this.argument.value2 = this.airports[0];
        this.argument.value3 = 'ft';
        // // set initial selection
        // this.originAirportCtrl.setValue(this.airports[10]);
        // this.destAirportCtrl.setValue([this.airports[10]]);
        // // load the initial airport list
        this.filteredOriginAirports.next(this.airports.slice());
        this.filteredDestAirports.next(this.airports.slice());
        // // listen for search field value changes
        // this.originAirportFilterCtrl.valueChanges
        //   .pipe(takeUntil(this._onDestroy))
        //   .subscribe(() => {
        //     this.filterOriginAirports();
        //   });
        // this.destAirportFilterCtrl.valueChanges
        //   .pipe(takeUntil(this._onDestroy))
        //   .subscribe(() => {
        //     this.filterDestAirports();
        //   });
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfCeilingComponent.prototype, "argument", void 0);
    MsfCeilingComponent = __decorate([
        Component({
            selector: 'app-msf-ceiling',
            templateUrl: './msf-ceiling.component.html',
            styleUrls: ['./msf-ceiling.component.css']
        })
    ], MsfCeilingComponent);
    return MsfCeilingComponent;
}());
export { MsfCeilingComponent };
//# sourceMappingURL=msf-ceiling.component.js.map