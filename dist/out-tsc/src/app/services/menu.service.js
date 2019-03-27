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
var MenuService = /** @class */ (function () {
    function MenuService(http) {
        this.http = http;
    }
    MenuService.prototype.getMenu = function (_this, successHandler, errorHandler) {
        // let url = "/getMenu?";
        var url = "http://localhost:8887/getMenu?";
        if (_this.globals.currentApplication == undefined) {
            _this.globals.currentApplication = JSON.parse(localStorage.getItem("currentApplication"));
        }
        url = url + "application=" + _this.globals.currentApplication.id;
        _this.globals.isLoading = true;
        this.get(_this, url, successHandler, errorHandler);
    };
    MenuService.prototype.get = function (_this, url, successHandler, errorHandler) {
        this.http.get(url).subscribe(function (result) {
            successHandler(_this, result);
        }, function (error) {
            return errorHandler(_this, error);
        });
    };
    MenuService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], MenuService);
    return MenuService;
}());
export { MenuService };
//# sourceMappingURL=menu.service.js.map