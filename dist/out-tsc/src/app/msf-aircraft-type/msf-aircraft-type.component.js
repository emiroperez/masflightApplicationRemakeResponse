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
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Arguments } from '../model/Arguments';
import { Globals } from '../globals/Globals';
import { ApiClient } from '../api/api-client';
var MsfAircraftTypeComponent = /** @class */ (function () {
    function MsfAircraftTypeComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        /** control for the selected airline */
        this.airlineCtrl = new FormControl();
        /** control for the MatSelect filter keyword */
        this.airlineFilterCtrl = new FormControl();
        this.loading = false;
    }
    MsfAircraftTypeComponent.prototype.ngOnInit = function () {
        this.getRecords(null, this.handlerSuccess);
    };
    MsfAircraftTypeComponent.prototype.getRecords = function (search, handlerSuccess) {
        var url = this.argument.url + "?search=" + (search != null ? search : '');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfAircraftTypeComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.loading = false;
        _this.data = of(data).pipe(delay(500));
        ;
    };
    MsfAircraftTypeComponent.prototype.handlerError = function (_this, result) {
        _this.loading = false;
        console.log(result);
    };
    MsfAircraftTypeComponent.prototype.onSearch = function ($event) {
        if ($event.length >= 2) {
            this.loading = true;
            this.getRecords($event, this.handlerSuccess);
        }
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfAircraftTypeComponent.prototype, "argument", void 0);
    MsfAircraftTypeComponent = __decorate([
        Component({
            selector: 'app-msf-aircraft-type',
            templateUrl: './msf-aircraft-type.component.html',
            styleUrls: ['./msf-aircraft-type.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient, Globals])
    ], MsfAircraftTypeComponent);
    return MsfAircraftTypeComponent;
}());
export { MsfAircraftTypeComponent };
//# sourceMappingURL=msf-aircraft-type.component.js.map