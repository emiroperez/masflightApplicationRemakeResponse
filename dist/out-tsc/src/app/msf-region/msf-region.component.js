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
import { Globals } from '../globals/Globals';
import { Arguments } from '../model/Arguments';
var MsfRegionComponent = /** @class */ (function () {
    function MsfRegionComponent(globals) {
        this.globals = globals;
        this.selected = [];
        this.all = { "checked": false };
        this.data = [
            { "id": 1,
                "name": "Domestic",
                "value": "D",
                "checked": false },
            { "id": 2,
                "name": "Atlantic",
                "value": "A",
                "checked": false },
            { "id": 3,
                "name": "International",
                "value": "I",
                "checked": false },
            { "id": 4,
                "name": "Latin America",
                "value": "L",
                "checked": false },
            { "id": 5,
                "name": "Pacific",
                "value": "P",
                "checked": false }
        ];
        this.loading = false;
    }
    MsfRegionComponent.prototype.ngOnInit = function () {
    };
    MsfRegionComponent.prototype.checkBoxChange = function (checkBox) {
        if (checkBox.checked) {
            if (!this.inList(this.selected, "id", checkBox.id)) {
                this.selected.push(checkBox);
            }
        }
        else {
            this.selected.forEach(function (currentValue, index, array) {
                if (currentValue == checkBox) {
                    array.splice(index, 1);
                }
            });
        }
        this.argument.value1 = this.selected;
        if (this.selected.length == this.data.length) {
            this.all.checked = true;
        }
        else {
            this.all.checked = false;
        }
    };
    MsfRegionComponent.prototype.inList = function (list, attr, value) {
        for (var i = 0; i < list.length; i++) {
            var elem = list[i];
            if (elem[attr] == value) {
                return true;
            }
        }
        return false;
    };
    MsfRegionComponent.prototype.changeAllSelected = function (value) {
        for (var index = 0; index < this.data.length; index++) {
            var element = this.data[index];
            element.checked = value;
        }
        if (value) {
            this.selected = this.data;
        }
        else {
            this.selected = [];
        }
    };
    MsfRegionComponent.prototype.checkBoxAllChange = function () {
        if (this.all.checked) {
            this.changeAllSelected(true);
        }
        else {
            this.changeAllSelected(false);
        }
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfRegionComponent.prototype, "argument", void 0);
    MsfRegionComponent = __decorate([
        Component({
            selector: 'app-msf-region',
            templateUrl: './msf-region.component.html',
            styleUrls: ['./msf-region.component.css']
        }),
        __metadata("design:paramtypes", [Globals])
    ], MsfRegionComponent);
    return MsfRegionComponent;
}());
export { MsfRegionComponent };
//# sourceMappingURL=msf-region.component.js.map