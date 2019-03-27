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
var MsfTimeRangeComponent = /** @class */ (function () {
    function MsfTimeRangeComponent() {
    }
    MsfTimeRangeComponent.prototype.ngOnInit = function () {
        this.argument.value1 = '12:00 am';
        this.argument.value2 = '11:59 pm';
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfTimeRangeComponent.prototype, "argument", void 0);
    MsfTimeRangeComponent = __decorate([
        Component({
            selector: 'app-msf-time-range',
            templateUrl: './msf-time-range.component.html',
            styleUrls: ['./msf-time-range.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MsfTimeRangeComponent);
    return MsfTimeRangeComponent;
}());
export { MsfTimeRangeComponent };
//# sourceMappingURL=msf-time-range.component.js.map