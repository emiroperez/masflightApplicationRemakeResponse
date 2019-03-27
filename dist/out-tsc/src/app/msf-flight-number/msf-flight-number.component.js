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
var MsfFlightNumberComponent = /** @class */ (function () {
    function MsfFlightNumberComponent() {
    }
    MsfFlightNumberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfFlightNumberComponent.prototype, "argument", void 0);
    MsfFlightNumberComponent = __decorate([
        Component({
            selector: 'app-msf-flight-number',
            templateUrl: './msf-flight-number.component.html',
            styleUrls: ['./msf-flight-number.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MsfFlightNumberComponent);
    return MsfFlightNumberComponent;
}());
export { MsfFlightNumberComponent };
//# sourceMappingURL=msf-flight-number.component.js.map