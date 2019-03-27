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
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiClient } from '../api/api-client';
var MsfSingleAirlineComponent = /** @class */ (function () {
    function MsfSingleAirlineComponent(http) {
        this.http = http;
        this.loading = false;
    }
    MsfSingleAirlineComponent.prototype.ngOnInit = function () {
        this.getRecords(null, this.handlerSuccess);
    };
    MsfSingleAirlineComponent.prototype.getRecords = function (search, handlerSuccess) {
        var url = this.argument.url + "?search=" + (search != null ? search : '');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfSingleAirlineComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.loading = false;
        _this.data = of(data).pipe(delay(500));
        ;
    };
    MsfSingleAirlineComponent.prototype.handlerError = function (_this, result) {
        _this.loading = false;
        console.log(result);
    };
    MsfSingleAirlineComponent.prototype.onSearch = function ($event) {
        if ($event.length >= 2) {
            this.loading = true;
            this.getRecords($event, this.handlerSuccess);
        }
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfSingleAirlineComponent.prototype, "argument", void 0);
    MsfSingleAirlineComponent = __decorate([
        Component({
            selector: 'app-msf-single-airline',
            templateUrl: './msf-single-airline.component.html',
            styleUrls: ['./msf-single-airline.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient])
    ], MsfSingleAirlineComponent);
    return MsfSingleAirlineComponent;
}());
export { MsfSingleAirlineComponent };
//# sourceMappingURL=msf-single-airline.component.js.map