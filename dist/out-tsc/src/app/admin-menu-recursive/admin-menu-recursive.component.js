var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
var AdminMenuRecursiveComponent = /** @class */ (function () {
    function AdminMenuRecursiveComponent() {
        this.optionSelected = new EventEmitter();
        this.isOpened = true;
        this.clickedDivState = 'start';
        this.optionActive = {};
    }
    AdminMenuRecursiveComponent.prototype.ngOnInit = function () {
    };
    AdminMenuRecursiveComponent.prototype.toggle = function (option) {
        if (option.isOpened) {
            option.isOpened = false;
            this.clickedDivState = 'start';
        }
        else {
            option.isOpened = true;
            this.clickedDivState = 'end';
        }
    };
    AdminMenuRecursiveComponent.prototype.selectOption = function (option) {
        this.optionSelected.emit(option);
    };
    AdminMenuRecursiveComponent.prototype.changeDivState = function (option) {
        var _this = this;
        if (option.isOpened) {
            this.clickedDivState = 'end';
        }
        else {
            setTimeout(function () {
                _this.clickedDivState = 'start';
            }, 3000);
        }
    };
    __decorate([
        Input("menu"),
        __metadata("design:type", Object)
    ], AdminMenuRecursiveComponent.prototype, "option", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AdminMenuRecursiveComponent.prototype, "optionSelected", void 0);
    AdminMenuRecursiveComponent = __decorate([
        Component({
            selector: 'app-admin-menu-recursive',
            templateUrl: './admin-menu-recursive.component.html',
            styleUrls: ['./admin-menu-recursive.component.css'],
            animations: [
                trigger('animationOption2', [
                    transition(':enter', [
                        style({
                            opacity: 0,
                            height: '0px'
                        }),
                        animate(500)
                    ]),
                    transition(':leave', [
                        animate(500, style({
                            opacity: 0,
                            height: '0px'
                        }))
                    ]),
                    state('*', style({
                        opacity: 1,
                        height: '*'
                    })),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AdminMenuRecursiveComponent);
    return AdminMenuRecursiveComponent;
}());
export { AdminMenuRecursiveComponent };
//# sourceMappingURL=admin-menu-recursive.component.js.map