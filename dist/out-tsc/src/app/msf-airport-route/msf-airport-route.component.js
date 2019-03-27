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
import { Globals } from '../globals/Globals';
var MsfAirportRouteComponent = /** @class */ (function () {
    function MsfAirportRouteComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        this.loading = false;
    }
    MsfAirportRouteComponent.prototype.ngOnInit = function () {
        // this.globals.isLoading = true;
        // this.getAirports(null, this.handlerSuccess);
    };
    MsfAirportRouteComponent.prototype.getAirports = function (search, handlerSuccess) {
        var url = this.argument.url + "?search=" + (search != null ? search : '');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfAirportRouteComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.loading = false;
        _this.globals.airports = of(data).pipe(delay(500));
        ;
    };
    MsfAirportRouteComponent.prototype.handlerError = function (_this, result) {
        _this.loading = false;
        console.log(result);
    };
    MsfAirportRouteComponent.prototype.onSearch = function ($event) {
        if ($event.length >= 3) {
            this.loading = true;
            this.getAirports($event, this.handlerSuccess);
        }
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfAirportRouteComponent.prototype, "argument", void 0);
    MsfAirportRouteComponent = __decorate([
        Component({
            selector: 'app-msf-airport-route',
            templateUrl: './msf-airport-route.component.html',
            styleUrls: ['./msf-airport-route.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient, Globals])
    ], MsfAirportRouteComponent);
    return MsfAirportRouteComponent;
}());
export { MsfAirportRouteComponent };
//# sourceMappingURL=msf-airport-route.component.js.map