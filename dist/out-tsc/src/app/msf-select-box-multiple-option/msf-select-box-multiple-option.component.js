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
import { of } from 'rxjs';
import { Arguments } from '../model/Arguments';
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';
import { delay } from 'rxjs/operators';
var MsfSelectBoxMultipleOptionComponent = /** @class */ (function () {
    function MsfSelectBoxMultipleOptionComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        this.loading = false;
    }
    MsfSelectBoxMultipleOptionComponent.prototype.ngOnInit = function () {
        this.getRecords(null, this.handlerSuccess);
    };
    MsfSelectBoxMultipleOptionComponent.prototype.getRecords = function (search, handlerSuccess) {
        var url = this.argument.url + "?search=" + (search != null ? search : '');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfSelectBoxMultipleOptionComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.loading = false;
        _this.data = of(data).pipe(delay(500));
        ;
    };
    MsfSelectBoxMultipleOptionComponent.prototype.handlerError = function (_this, result) {
        _this.loading = false;
        console.log(result);
    };
    MsfSelectBoxMultipleOptionComponent.prototype.onSearch = function ($event) {
        if ($event.length >= 2) {
            this.loading = true;
            this.getRecords($event, this.handlerSuccess);
        }
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfSelectBoxMultipleOptionComponent.prototype, "argument", void 0);
    MsfSelectBoxMultipleOptionComponent = __decorate([
        Component({
            selector: 'app-msf-select-box-multiple-option',
            templateUrl: './msf-select-box-multiple-option.component.html',
            styleUrls: ['./msf-select-box-multiple-option.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient, Globals])
    ], MsfSelectBoxMultipleOptionComponent);
    return MsfSelectBoxMultipleOptionComponent;
}());
export { MsfSelectBoxMultipleOptionComponent };
//# sourceMappingURL=msf-select-box-multiple-option.component.js.map