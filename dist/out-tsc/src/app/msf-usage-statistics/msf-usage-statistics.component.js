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
import { ApplicationService } from '../services/application.service';
var MsfUsageStatisticsComponent = /** @class */ (function () {
    function MsfUsageStatisticsComponent(services) {
        this.services = services;
    }
    MsfUsageStatisticsComponent.prototype.ngOnInit = function () {
        //this.services.getDataTableSource
    };
    MsfUsageStatisticsComponent = __decorate([
        Component({
            selector: 'app-msf-usage-statistics',
            templateUrl: './msf-usage-statistics.component.html',
            styleUrls: ['./msf-usage-statistics.component.css']
        }),
        __metadata("design:paramtypes", [ApplicationService])
    ], MsfUsageStatisticsComponent);
    return MsfUsageStatisticsComponent;
}());
export { MsfUsageStatisticsComponent };
//# sourceMappingURL=msf-usage-statistics.component.js.map