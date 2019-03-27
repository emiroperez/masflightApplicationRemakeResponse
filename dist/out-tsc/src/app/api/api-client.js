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
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var ApiClient = /** @class */ (function () {
    function ApiClient(http) {
        this.http = http;
        this.SECURITY_HEADER = "Authorization";
        this.TOKEN_STORAGE_KEY = "token";
        this.post = function (_this, url, data, successHandler, errorHandler) {
            this.http.post(url, data, httpOptions).subscribe(function (result) {
                /*
                if (result.sessionExpired){
    
                }
                */
                successHandler(_this, result);
            }, function (error) {
                return errorHandler(_this, error);
            });
        };
        this.get = function (_this, url, successHandler, errorHandler, tab) {
            this.http.get(url, { observe: 'events', reportProgress: true }).subscribe(function (result) {
                if (result.type === HttpEventType.DownloadProgress) {
                    if (_this.globals != null) {
                        if (result.total != null) {
                            _this.globals.bytesLoaded = result.total;
                        }
                        else if (result.loaded != null) {
                            _this.globals.bytesLoaded = result.loaded;
                        }
                    }
                }
                if (result.type === HttpEventType.Response) {
                    successHandler(_this, result.body, tab);
                }
            }, function (error) {
                return errorHandler(_this, error);
            });
        };
    }
    ApiClient = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ApiClient);
    return ApiClient;
}());
export { ApiClient };
//# sourceMappingURL=api-client.js.map