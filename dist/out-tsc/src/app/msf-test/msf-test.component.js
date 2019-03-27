var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ApplicationService } from '../services/application.service';
import { delay } from 'rxjs/operators';
import { ApiClient } from '../api/api-client';
var MsfTestComponent = /** @class */ (function () {
    function MsfTestComponent(services, http) {
        this.services = services;
        this.http = http;
        this.loading = false;
    }
    MsfTestComponent.prototype.ngOnInit = function () {
        this.getAirports(null, this.handlerSuccess);
    };
    MsfTestComponent.prototype.getAirports = function (search, handlerSuccess) {
        this.loading = true;
        var url = 'http://localhost:8887/getAirports?search=' + (search != null ? search : '');
        //let url = '/getAirports?search='+ (search != null?search:'');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfTestComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.airports = of(data).pipe(delay(500));
        _this.loading = false;
    };
    MsfTestComponent.prototype.handlerError = function (_this, result) {
        _this.loading = false;
        console.log(result);
    };
    MsfTestComponent = __decorate([
        Component({
            selector: 'app-msf-test',
            templateUrl: './msf-test.component.html',
            styleUrls: ['./msf-test.component.css']
        }),
        __metadata("design:paramtypes", [ApplicationService, ApiClient])
    ], MsfTestComponent);
    return MsfTestComponent;
}());
export { MsfTestComponent };
//# sourceMappingURL=msf-test.component.js.map