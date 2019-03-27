var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Globals } from '../globals/Globals';
import { MatTab, MatTabGroup } from '@angular/material';
import { MsfTableComponent } from '../msf-table/msf-table.component';
import { MsfChartOnTimeDelayComponent } from '../msf-chart-on-time-delay/msf-chart-on-time-delay.component';
import { MsfDynamicTableComponent } from '../msf-dynamic-table/msf-dynamic-table.component';
import { MsfMapComponent } from '../msf-map/msf-map.component';
var MsfContainerComponent = /** @class */ (function () {
    function MsfContainerComponent(globals) {
        this.globals = globals;
    }
    MsfContainerComponent.prototype.ngOnInit = function () {
    };
    MsfContainerComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        ViewChild('msfTableRef'),
        __metadata("design:type", MsfTableComponent)
    ], MsfContainerComponent.prototype, "msfTableRef", void 0);
    __decorate([
        ViewChild('msfChartRef'),
        __metadata("design:type", MsfChartOnTimeDelayComponent)
    ], MsfContainerComponent.prototype, "msfChartRef", void 0);
    __decorate([
        ViewChild('msfMapRef'),
        __metadata("design:type", MsfMapComponent)
    ], MsfContainerComponent.prototype, "msfMapRef", void 0);
    __decorate([
        ViewChild('msfDynamicTableRef'),
        __metadata("design:type", MsfDynamicTableComponent)
    ], MsfContainerComponent.prototype, "msfDynamicTableRef", void 0);
    __decorate([
        ViewChild('msfDynamicTableTabRef'),
        __metadata("design:type", MatTab)
    ], MsfContainerComponent.prototype, "msfDynamicTableTabRef", void 0);
    __decorate([
        ViewChild(MatTabGroup),
        __metadata("design:type", MatTabGroup)
    ], MsfContainerComponent.prototype, "tabGroup", void 0);
    MsfContainerComponent = __decorate([
        Component({
            selector: 'app-msf-container',
            templateUrl: './msf-container.component.html',
            styleUrls: ['./msf-container.component.css']
        }),
        __metadata("design:paramtypes", [Globals])
    ], MsfContainerComponent);
    return MsfContainerComponent;
}());
export { MsfContainerComponent };
//# sourceMappingURL=msf-container.component.js.map