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
import { Menu } from '../model/Menu';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.openMenu = function (menu, trigger) {
        if (menu === this.currentTrigger) {
            //if(!menu.menu.menuOpen()){
            menu.openMenu();
            this.currentTrigger = menu;
            console.log('mouseover');
            //}       
        }
        else {
            menu.openMenu();
            this.currentTrigger = menu;
        }
        //this.trigger = menu;
    };
    MenuComponent.prototype.closeMenu = function (menu, trigger) {
        if (menu === this.currentTrigger) {
            //if(menu.menu.menuOpen()){
            menu.closeMenu();
            console.log('mouseout');
            //}       
        }
        else {
            menu.closeMenu();
            console.log('mouseout');
        }
    };
    __decorate([
        Input("menu"),
        __metadata("design:type", Menu)
    ], MenuComponent.prototype, "menu", void 0);
    MenuComponent = __decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map