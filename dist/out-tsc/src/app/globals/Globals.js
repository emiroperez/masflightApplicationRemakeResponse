var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var Globals = /** @class */ (function () {
    function Globals() {
        this.isLoading = false;
        this.chart = false;
        this.map = false;
        this.usageStatistics = false;
        this.generateDynamicTable = false;
        this.selectedIndex = 1;
        this.totalRecord = 0;
        this.dataSource = false;
        this.startTimestamp = null;
        this.endTimestamp = null;
        this.bytesLoaded = 0;
        this.moreResults = false;
        this.moreResultsBtn = true;
    }
    Globals.prototype.clearVariables = function () {
        this.currentOption = null;
        this.currentAgts = null;
        this.isLoading = false;
        this.chart = false;
        this.map = false;
        this.variables = null;
        this.values = null;
        this.generateDynamicTable = false;
        this.selectedIndex = 1;
        this.totalRecord = 0;
        this.startTimestamp = null;
        this.endTimestamp = null;
        this.bytesLoaded = 0;
        this.moreResults = false;
        this.moreResultsBtn = true;
        this.dataSource = false;
    };
    Globals.prototype.getTime = function () {
        if (this.endTimestamp != null && this.startTimestamp != null) {
            return (this.endTimestamp.getTime() - this.startTimestamp.getTime()) / 1000;
        }
        return 0;
    };
    ;
    Globals.prototype.getBytesLoaded = function () {
        if (this.getTime() > 0) {
            return this.bytesLoaded;
        }
        return 0;
    };
    Globals.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    Globals = __decorate([
        Injectable()
    ], Globals);
    return Globals;
}());
export { Globals };
//# sourceMappingURL=Globals.js.map