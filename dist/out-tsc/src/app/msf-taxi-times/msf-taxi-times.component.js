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
var MsfTaxiTimesComponent = /** @class */ (function () {
    function MsfTaxiTimesComponent() {
    }
    MsfTaxiTimesComponent.prototype.ngOnInit = function () {
        this.argument.value1 = 0;
        this.argument.value2 = 999;
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfTaxiTimesComponent.prototype, "argument", void 0);
    MsfTaxiTimesComponent = __decorate([
        Component({
            selector: 'app-msf-taxi-times',
            templateUrl: './msf-taxi-times.component.html',
            styleUrls: ['./msf-taxi-times.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MsfTaxiTimesComponent);
    return MsfTaxiTimesComponent;
}());
export { MsfTaxiTimesComponent };
//# sourceMappingURL=msf-taxi-times.component.js.map