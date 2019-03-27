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
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../commons/date.adapters';
import { DatePipe } from '@angular/common';
var MsfDateRangeComponent = /** @class */ (function () {
    function MsfDateRangeComponent() {
    }
    MsfDateRangeComponent.prototype.ngOnInit = function () {
    };
    MsfDateRangeComponent.prototype.dateChange = function (event) {
        if (!this.argument.value2) {
            this.argument.value2 = this.argument.value1;
        }
    };
    MsfDateRangeComponent.prototype.validateDate = function () {
        if (this.argument.value1) {
            this.argument.value1 = new DatePipe('en-US').transform(this.argument.value1, 'MM/dd/yyyy');
        }
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfDateRangeComponent.prototype, "argument", void 0);
    MsfDateRangeComponent = __decorate([
        Component({
            selector: 'app-msf-date-range',
            templateUrl: './msf-date-range.component.html',
            styleUrls: ['./msf-date-range.component.css'],
            providers: [
                {
                    provide: DateAdapter, useClass: AppDateAdapter
                },
                {
                    provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MsfDateRangeComponent);
    return MsfDateRangeComponent;
}());
export { MsfDateRangeComponent };
//# sourceMappingURL=msf-date-range.component.js.map