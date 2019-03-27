var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelect } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Utils } from '../commons/utils';
import { Globals } from '../globals/Globals';
var MsfDynamicTableVariablesComponent = /** @class */ (function () {
    function MsfDynamicTableVariablesComponent(dialogRef, data, globals) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.globals = globals;
        this.columns = [];
        this.dynamicTableOpen = new EventEmitter();
        this.variableCtrl = new FormControl();
        this.variableFilterCtrl = new FormControl();
        this.filteredVariables = new ReplaySubject(1);
        /** control for the selected variable */
        this.valueCtrl = new FormControl();
        /** control for the MatSelect filter keyword */
        this.valueFilterCtrl = new FormControl();
        /** list of variable filtered by search keyword */
        this.filteredValues = new ReplaySubject(1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
        this.order = 0;
        this.orderValue = 0;
        this.metadata = data.metadata;
        this.utils = new Utils();
    }
    MsfDynamicTableVariablesComponent.prototype.onNoClick = function () {
        this.globals.values = [];
        this.globals.variables = [];
        this.dialogRef.close();
    };
    MsfDynamicTableVariablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setColumns();
        this.variableCtrl.setValue([this.columns[0], this.columns[1], this.columns[2]]);
        this.filteredVariables.next(this.columns.slice());
        this.variableFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.filterVariables();
        });
        this.valueCtrl.setValue([this.columns[0], this.columns[1], this.columns[2]]);
        this.filteredValues.next(this.columns.slice());
        this.valueFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.filterValues();
        });
    };
    MsfDynamicTableVariablesComponent.prototype.ngAfterViewInit = function () {
        this.setInitialValue();
    };
    MsfDynamicTableVariablesComponent.prototype.setInitialValue = function () {
        var _this = this;
        this.filteredVariables
            .pipe(take(1), takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.variableSelect.compareWith = function (a, b) { return a.id === b.id; };
            _this.valueSelect.compareWith = function (a, b) { return a.id === b.id; };
        });
    };
    MsfDynamicTableVariablesComponent.prototype.filterVariables = function () {
        if (!this.columns) {
            return;
        }
        var search = this.variableFilterCtrl.value;
        if (!search) {
            this.filteredVariables.next(this.columns.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        this.filteredVariables.next(this.columns.filter(function (variable) { return variable.name.toLowerCase().indexOf(search) > -1; }));
    };
    MsfDynamicTableVariablesComponent.prototype.filterValues = function () {
        if (!this.columns) {
            return;
        }
        var search = this.valueFilterCtrl.value;
        if (!search) {
            this.filteredValues.next(this.columns.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        this.filteredValues.next(this.columns.filter(function (value) { return value.name.toLowerCase().indexOf(search) > -1; }));
    };
    MsfDynamicTableVariablesComponent.prototype.setColumns = function () {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var columnConfig = _a[_i];
            this.columns.push({ id: columnConfig.columnName, name: columnConfig.columnLabel });
        }
    };
    MsfDynamicTableVariablesComponent.prototype.deleteVariable = function (variable) {
        var i = 0;
        for (var _i = 0, _a = this.globals.variables; _i < _a.length; _i++) {
            var vari = _a[_i];
            if (vari === variable) {
                this.globals.variables.splice(i, 1);
            }
            i++;
        }
    };
    MsfDynamicTableVariablesComponent.prototype.generateTable = function () {
        this.globals.generateDynamicTable = true;
        this.globals.selectedIndex = 2;
        this.dynamicTableOpen.emit();
        this.dialogRef.close();
    };
    MsfDynamicTableVariablesComponent.prototype.orderVariable = function (elements) {
        if (elements) {
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element = elements_1[_i];
                if (element.order == null) {
                    element.order = this.order;
                    this.order++;
                }
            }
            var elementsOrdered = elements.sort(function (a, b) { return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0); });
            this.globals.variables = elementsOrdered;
        }
    };
    MsfDynamicTableVariablesComponent.prototype.orderValues = function (elements) {
        if (elements) {
            for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
                var element = elements_2[_i];
                if (element.order == null) {
                    element.order = this.orderValue;
                    this.orderValue++;
                }
            }
            var elementsOrdered = elements.sort(function (a, b) { return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0); });
            this.globals.values = elementsOrdered;
        }
    };
    MsfDynamicTableVariablesComponent.prototype.disabled = function () {
        if ((!this.globals.values || this.globals.values.length < 1 || !this.hasFunctions())
            || (!this.globals.variables || this.globals.variables.length < 1)) {
            return true;
        }
        return false;
    };
    MsfDynamicTableVariablesComponent.prototype.hasFunctions = function () {
        for (var _i = 0, _a = this.globals.values; _i < _a.length; _i++) {
            var value = _a[_i];
            if (!value.average && !value.summary && !value.min && !value.max
                && !value.count && !value.mean && !value.mean) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MsfDynamicTableVariablesComponent.prototype, "dynamicTableOpen", void 0);
    __decorate([
        ViewChild('variableSelect'),
        __metadata("design:type", MatSelect)
    ], MsfDynamicTableVariablesComponent.prototype, "variableSelect", void 0);
    __decorate([
        ViewChild('valueSelect'),
        __metadata("design:type", MatSelect)
    ], MsfDynamicTableVariablesComponent.prototype, "valueSelect", void 0);
    MsfDynamicTableVariablesComponent = __decorate([
        Component({
            selector: 'app-msf-dynamic-table-variables',
            templateUrl: './msf-dynamic-table-variables.component.html',
            styleUrls: ['./msf-dynamic-table-variables.component.css']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object, Globals])
    ], MsfDynamicTableVariablesComponent);
    return MsfDynamicTableVariablesComponent;
}());
export { MsfDynamicTableVariablesComponent };
//# sourceMappingURL=msf-dynamic-table-variables.component.js.map