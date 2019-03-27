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
import { Globals } from '../globals/Globals';
import { Utils } from '../commons/utils';
var CurrentQuerySummaryComponent = /** @class */ (function () {
    function CurrentQuerySummaryComponent(utils, globals) {
        this.utils = utils;
        this.globals = globals;
        this.open = false;
    }
    CurrentQuerySummaryComponent.prototype.ngOnInit = function () {
    };
    CurrentQuerySummaryComponent.prototype.componentClickHandler = function (argsContainer, icon) {
        if (this.argsBefore) {
            this.argsBefore.open = false;
            this.iconBefore.innerText = "expand_more";
        }
        if (!this.open || (this.open && (this.argsBefore !== argsContainer))) {
            argsContainer.open = true;
            icon.innerText = "expand_less";
            this.open = true;
        }
        else {
            argsContainer.open = false;
            icon.innerText = "expand_more";
            this.open = false;
        }
        this.globals.currentAgts = argsContainer;
        this.iconBefore = icon;
        this.argsBefore = argsContainer;
    };
    CurrentQuerySummaryComponent = __decorate([
        Component({
            selector: 'app-current-query-summary',
            templateUrl: './current-query-summary.component.html',
            styleUrls: ['./current-query-summary.component.css']
        }),
        __metadata("design:paramtypes", [Utils, Globals])
    ], CurrentQuerySummaryComponent);
    return CurrentQuerySummaryComponent;
}());
export { CurrentQuerySummaryComponent };
//# sourceMappingURL=current-query-summary.component.js.map