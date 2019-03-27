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
        dateInput: 'MMM',
        monthYearLabel: 'MMM YYYY',
        yearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMM YYYY',
    },
};
export var MY_FORMATS_2 = {
    parse: {
        dateInput: 'MMM/YYYY',
    },
    display: {
        dateInput: 'MMM/YYYY',
        monthYearLabel: 'MM YYYY',
        yearLabel: 'MM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MM YYYY',
    },
};
var MsfDatePeriodYearMonthComponent = /** @class */ (function () {
    function MsfDatePeriodYearMonthComponent() {
        this.loading = false;
    }
    MsfDatePeriodYearMonthComponent.prototype.ngOnInit = function () {
        this.date = new FormControl(moment());
    };
    MsfDatePeriodYearMonthComponent.prototype.chosenYearHandler = function (normalizedYear, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
        this.argument.value1 = normalizedYear.year();
    };
    MsfDatePeriodYearMonthComponent.prototype.chosenMonthHandler = function (normalizedYear, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.month(normalizedYear.month());
        this.date.setValue(ctrlValue);
        this.argument.value2 = normalizedYear.month();
        datepicker.close();
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfDatePeriodYearMonthComponent.prototype, "argument", void 0);
    MsfDatePeriodYearMonthComponent = __decorate([
        Component({
            selector: 'app-msf-date-period-year-month',
            templateUrl: './msf-date-period-year-month.component.html',
            styleUrls: ['./msf-date-period-year-month.component.css'],
            providers: [
                {
                    provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]
                },
                {
                    provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
                }
            ]
        })
    ], MsfDatePeriodYearMonthComponent);
    return MsfDatePeriodYearMonthComponent;
}());
export { MsfDatePeriodYearMonthComponent };
//# sourceMappingURL=msf-date-period-year-month.component.js.map