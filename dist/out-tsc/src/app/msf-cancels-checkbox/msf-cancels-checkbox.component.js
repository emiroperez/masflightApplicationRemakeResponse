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
var MsfCancelsCheckboxComponent = /** @class */ (function () {
    function MsfCancelsCheckboxComponent(globals) {
        this.globals = globals;
        this.selected = [];
        this.all = { "checked": false };
        this.data = [
            { "id": 1,
                "name": "Carrier (A)",
                "value": "Carrier (A)",
                "checked": false },
            { "id": 2,
                "name": "Weather (B)",
                "value": "Weather (B)",
                "checked": false },
            { "id": 3,
                "name": "Airspace (C)",
                "value": "Airspace (C)",
                "checked": false },
            { "id": 4,
                "name": "Security (D)",
                "value": "Security (D)",
                "checked": false }
        ];
        this.loading = false;
    }
    MsfCancelsCheckboxComponent.prototype.ngOnInit = function () {
    };
    MsfCancelsCheckboxComponent.prototype.checkBoxChange = function (checkBox) {
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
    MsfCancelsCheckboxComponent.prototype.inList = function (list, attr, value) {
        for (var i = 0; i < list.length; i++) {
            var elem = list[i];
            if (elem[attr] == value) {
                return true;
            }
        }
        return false;
    };
    MsfCancelsCheckboxComponent.prototype.changeAllSelected = function (value) {
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
    MsfCancelsCheckboxComponent.prototype.checkBoxAllChange = function () {
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
    ], MsfCancelsCheckboxComponent.prototype, "argument", void 0);
    MsfCancelsCheckboxComponent = __decorate([
        Component({
            selector: 'app-msf-cancels-checkbox',
            templateUrl: './msf-cancels-checkbox.component.html',
            styleUrls: ['./msf-cancels-checkbox.component.css']
        }),
        __metadata("design:paramtypes", [Globals])
    ], MsfCancelsCheckboxComponent);
    return MsfCancelsCheckboxComponent;
}());
export { MsfCancelsCheckboxComponent };
//# sourceMappingURL=msf-cancels-checkbox.component.js.map