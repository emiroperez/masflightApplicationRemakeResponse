var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { Globals } from '../globals/Globals';
import { MatMenuTrigger } from '@angular/material';
var MenuOptionComponent = /** @class */ (function () {
    function MenuOptionComponent(globals) {
        this.globals = globals;
    }
    MenuOptionComponent.prototype.ngOnInit = function () {
    };
    MenuOptionComponent.prototype.optionClickHandler = function (option) {
        this.globals.clearVariables();
        this.globals.currentOption = option;
        if (this.globals.currentOption.tabType === 'map') {
            this.globals.map = true;
            this.globals.selectedIndex = 1;
        }
        if (this.globals.currentOption.tabType === 'statistics') {
            this.globals.usageStatistics = true;
        }
    };
    MenuOptionComponent.prototype.closeMenu = function () {
        //this.trigger.closeMenu();
    };
    __decorate([
        Input("options"),
        __metadata("design:type", Array)
    ], MenuOptionComponent.prototype, "options", void 0);
    __decorate([
        Input("trigger"),
        __metadata("design:type", MatMenuTrigger)
    ], MenuOptionComponent.prototype, "trigger", void 0);
    __decorate([
        ViewChild('childMenu'),
        __metadata("design:type", Object)
    ], MenuOptionComponent.prototype, "childMenu", void 0);
    MenuOptionComponent = __decorate([
        Component({
            selector: 'app-menu-option',
            templateUrl: './menu-option.component.html'
        }),
        __metadata("design:paramtypes", [Globals])
    ], MenuOptionComponent);
    return MenuOptionComponent;
}());
export { MenuOptionComponent };
//# sourceMappingURL=menu-option.component.js.map