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
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
var MsfCheckBoxComponent = /** @class */ (function () {
    function MsfCheckBoxComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        this.selected = [];
        this.all = { "checked": false };
        this.loading = false;
    }
    MsfCheckBoxComponent.prototype.ngOnInit = function () {
        this.getRecords(null, this.handlerSuccess);
    };
    MsfCheckBoxComponent.prototype.getRecords = function (search, handlerSuccess) {
        if (this.data == null || this.getRecords.length == 0) {
            var url = this.argument.url + "?search=" + (search != null ? search : '');
            this.http.get(this, url, handlerSuccess, this.handlerError, null);
        }
    };
    MsfCheckBoxComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.data = of(data).pipe(delay(500));
        ;
    };
    MsfCheckBoxComponent.prototype.handlerError = function (_this, result) {
        console.log(result);
    };
    MsfCheckBoxComponent.prototype.checkBoxChange = function (checkBox) {
        if (checkBox.checked) {
            if (!this.inList(this.selected, "id", checkBox.id)) {
                this.selected.push(checkBox);
            }
        }
        else {
            this.selected.forEach(function (currentValue, index, array) {
                if (currentValue == checkBox) {
                    array.splice(index, 1);
                }
            });
        }
        this.argument.value1 = this.selected;
    };
    MsfCheckBoxComponent.prototype.inList = function (list, attr, value) {
        for (var i = 0; i < list.length; i++) {
            var elem = list[i];
            if (elem[attr] == value) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfCheckBoxComponent.prototype, "argument", void 0);
    MsfCheckBoxComponent = __decorate([
        Component({
            selector: 'app-msf-check-box',
            templateUrl: './msf-check-box.component.html',
            styleUrls: ['./msf-check-box.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient, Globals])
    ], MsfCheckBoxComponent);
    return MsfCheckBoxComponent;
}());
export { MsfCheckBoxComponent };
//# sourceMappingURL=msf-check-box.component.js.map