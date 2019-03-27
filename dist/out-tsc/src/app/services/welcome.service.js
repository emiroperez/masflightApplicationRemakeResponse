var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var WelcomeService = /** @class */ (function () {
    function WelcomeService(http) {
        this.http = http;
    }
    WelcomeService.prototype.getApplications = function (_this, successHandler, errorHandler) {
        // let url = "/getApplications";
        var url = "http://localhost:8887/getApplications";
        _this.globals.isLoading = true;
        this.get(_this, url, successHandler, errorHandler);
    };
    WelcomeService.prototype.get = function (_this, url, successHandler, errorHandler) {
        this.http.get(url).subscribe(function (result) {
            successHandler(_this, result);
        }, function (error) {
            return errorHandler(_this, error);
        });
    };
    WelcomeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], WelcomeService);
    return WelcomeService;
}());
export { WelcomeService };
//# sourceMappingURL=welcome.service.js.map