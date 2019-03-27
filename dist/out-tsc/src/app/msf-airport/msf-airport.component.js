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
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';
var MsfAirportComponent = /** @class */ (function () {
    function MsfAirportComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        this.loading = false;
    }
    MsfAirportComponent.prototype.ngOnInit = function () {
        this.getRecords(null, this.handlerSuccess);
    };
    MsfAirportComponent.prototype.getRecords = function (search, handlerSuccess) {
        var url = this.argument.url + "?search=" + (search != null ? search : '');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfAirportComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.loading = false;
        _this.data = of(data).pipe(delay(500));
        ;
    };
    MsfAirportComponent.prototype.handlerError = function (_this, result) {
        _this.loading = false;
        console.log(result);
    };
    MsfAirportComponent.prototype.onSearch = function ($event) {
        if ($event.length >= 3) {
            this.loading = true;
            this.getRecords($event, this.handlerSuccess);
        }
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfAirportComponent.prototype, "argument", void 0);
    MsfAirportComponent = __decorate([
        Component({
            selector: 'app-msf-airport',
            templateUrl: './msf-airport.component.html',
            styleUrls: ['./msf-airport.component.css'],
            providers: [
                {
                    provide: DateAdapter, useClass: AppDateAdapter
                },
                {
                    provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
                }
            ]
        }),
        __metadata("design:paramtypes", [ApiClient, Globals])
    ], MsfAirportComponent);
    return MsfAirportComponent;
}());
export { MsfAirportComponent };
//# sourceMappingURL=msf-airport.component.js.map