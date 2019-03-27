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
var MsfDatePeriodYearComponent = /** @class */ (function () {
    function MsfDatePeriodYearComponent() {
        this.loading = false;
    }
    MsfDatePeriodYearComponent.prototype.ngOnInit = function () {
        this.date = new FormControl(moment());
        this.date2 = new FormControl(moment());
    };
    MsfDatePeriodYearComponent.prototype.chosenYearHandler = function (normalizedYear, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
        this.argument.value1 = this.date;
        datepicker.close();
    };
    MsfDatePeriodYearComponent.prototype.chosenYearHandler2 = function (normalizedYear, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
        this.argument.value2 = this.date2;
        datepicker.close();
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfDatePeriodYearComponent.prototype, "argument", void 0);
    MsfDatePeriodYearComponent = __decorate([
        Component({
            selector: 'app-msf-date-period-year',
            templateUrl: './msf-date-period-year.component.html',
            styleUrls: ['./msf-date-period-year.component.css'],
            providers: [
                {
                    provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]
                },
                {
                    provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
                }
            ]
        })
    ], MsfDatePeriodYearComponent);
    return MsfDatePeriodYearComponent;
}());
export { MsfDatePeriodYearComponent };
//# sourceMappingURL=msf-date-period-year.component.js.map