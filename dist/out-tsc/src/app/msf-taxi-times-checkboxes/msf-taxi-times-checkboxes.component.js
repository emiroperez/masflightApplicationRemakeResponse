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
var MsfTaxiTimesCheckboxesComponent = /** @class */ (function () {
    function MsfTaxiTimesCheckboxesComponent(globals) {
        this.globals = globals;
        this.selected = [];
        this.all = { "checked": false };
        this.data = [
            { "id": 1,
                "name": "Taxi-Out",
                "value": "Taxi-Out",
                "checked": false },
            { "id": 2,
                "name": "Taxi-In",
                "value": "Taxi-In",
                "checked": false },
            { "id": 3,
                "name": "First Gate Departure",
                "value": "First Gate Departure",
                "checked": false },
            { "id": 4,
                "name": "1st Diversion",
                "value": "1st Diversion",
                "checked": false },
            { "id": 5,
                "name": "2nd Diversion",
                "value": "2nd Diversion",
                "checked": false }
        ];
        this.loading = false;
    }
    MsfTaxiTimesCheckboxesComponent.prototype.ngOnInit = function () {
    };
    MsfTaxiTimesCheckboxesComponent.prototype.checkBoxChange = function (checkBox) {
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
    MsfTaxiTimesCheckboxesComponent.prototype.inList = function (list, attr, value) {
        for (var i = 0; i < list.length; i++) {
            var elem = list[i];
            if (elem[attr] == value) {
                return true;
            }
        }
        return false;
    };
    MsfTaxiTimesCheckboxesComponent.prototype.changeAllSelected = function (value) {
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
    MsfTaxiTimesCheckboxesComponent.prototype.checkBoxAllChange = function () {
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
    ], MsfTaxiTimesCheckboxesComponent.prototype, "argument", void 0);
    MsfTaxiTimesCheckboxesComponent = __decorate([
        Component({
            selector: 'app-msf-taxi-times-checkboxes',
            templateUrl: './msf-taxi-times-checkboxes.component.html',
            styleUrls: ['./msf-taxi-times-checkboxes.component.css']
        }),
        __metadata("design:paramtypes", [Globals])
    ], MsfTaxiTimesCheckboxesComponent);
    return MsfTaxiTimesCheckboxesComponent;
}());
export { MsfTaxiTimesCheckboxesComponent };
//# sourceMappingURL=msf-taxi-times-checkboxes.component.js.map