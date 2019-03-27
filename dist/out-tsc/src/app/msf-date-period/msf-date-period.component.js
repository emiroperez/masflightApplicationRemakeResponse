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
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
var moment = _rollupMoment || _moment;
export var MY_FORMATS = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
        monthYearLabel: 'MMM YYYY',
        yearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var MsfDatePeriodComponent = /** @class */ (function () {
    function MsfDatePeriodComponent() {
        this.loading = false;
        this.quarters = [
            { id: 0, name: '1st Quarter', value: "1" },
            { id: 1, name: '2nd Quarter', value: "2" },
            { id: 2, name: '3rd Quarter', value: "3" },
            { id: 3, name: '4st Quarter', value: "4" }
        ];
    }
    MsfDatePeriodComponent.prototype.ngOnInit = function () {
        this.date = new FormControl(moment());
    };
    MsfDatePeriodComponent.prototype.chosenYearHandler = function (normalizedYear, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
        this.argument.value1 = this.date;
        datepicker.close();
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfDatePeriodComponent.prototype, "argument", void 0);
    MsfDatePeriodComponent = __decorate([
        Component({
            selector: 'app-msf-date-period',
            templateUrl: './msf-date-period.component.html',
            styleUrls: ['./msf-date-period.component.css'],
            providers: [
                {
                    provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]
                },
                {
                    provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
                }
            ]
        })
    ], MsfDatePeriodComponent);
    return MsfDatePeriodComponent;
}());
export { MsfDatePeriodComponent };
//# sourceMappingURL=msf-date-period.component.js.map