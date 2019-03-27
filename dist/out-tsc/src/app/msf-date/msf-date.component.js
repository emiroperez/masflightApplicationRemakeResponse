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
var MsfDateComponent = /** @class */ (function () {
    function MsfDateComponent() {
    }
    MsfDateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfDateComponent.prototype, "argument", void 0);
    MsfDateComponent = __decorate([
        Component({
            selector: 'app-msf-date',
            templateUrl: './msf-date.component.html',
            styleUrls: ['./msf-date.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MsfDateComponent);
    return MsfDateComponent;
}());
export { MsfDateComponent };
//# sourceMappingURL=msf-date.component.js.map