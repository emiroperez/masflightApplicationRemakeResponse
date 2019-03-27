var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';
import { jqxTreeGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid';
import { ApplicationService } from '../services/application.service';
var MsfDynamicTableComponent = /** @class */ (function () {
    function MsfDynamicTableComponent(http, globals, service) {
        this.http = http;
        this.globals = globals;
        this.service = service;
        this.AVG_PREFIX = 'avg_';
        this.SUM_PREFIX = 'sum_';
        this.MIN_PREFIX = 'min_';
        this.MAX_PREFIX = 'max_';
        this.COUNT_PREFIX = 'count_';
        this.MEAN_PREFIX = 'mean_';
        this.STDDEVIATION_PREFIX = 'stddeviation';
        this.AVG = 'Avg';
        this.SUM = 'Sum';
        this.MIN = 'Min';
        this.MAX = 'Max';
        this.COUNT = 'Count';
        this.MEAN = 'Mean';
        this.STDDEVIATION = 'Std Deviation';
        this.numbers = [];
        this.columns = [];
    }
    MsfDynamicTableComponent.prototype.ngOnInit = function () {
    };
    MsfDynamicTableComponent.prototype.loadData = function () {
        this.service.loadDynamicTableData(this, this.handlerSuccess, this.handlerError);
    };
    MsfDynamicTableComponent.prototype.getWidth = function () {
        return '99%';
    };
    MsfDynamicTableComponent.prototype.getHeight = function () {
        return '96%';
    };
    MsfDynamicTableComponent.prototype.handlerSuccess = function (_this, data) {
        var source = {
            dataType: 'json',
            dataFields: _this.getDataField(),
            hierarchy: {
                root: 'children'
            },
            id: 'id',
            localData: data
        };
        _this.dataAdapter = new jqx.dataAdapter(source);
        _this.columns = _this.getColumns();
        _this.globals.isLoading = false;
    };
    MsfDynamicTableComponent.prototype.getColumns = function () {
        var columns = [{ text: 'Variables', dataField: 'variable', width: '25%' }];
        for (var _i = 0, _a = this.globals.values; _i < _a.length; _i++) {
            var value = _a[_i];
            this.addColumnsName(value, columns);
        }
        return columns;
    };
    MsfDynamicTableComponent.prototype.addColumnsName = function (value, columns) {
        var columnId = value.id;
        var columnName = value.name;
        if (value.average) {
            columns.push({ text: this.AVG + " " + columnName, dataField: this.AVG_PREFIX + columnId, width: '25%', cellsformat: 'D2', cellsalign: 'right', });
        }
        if (value.summary) {
            columns.push({ text: this.SUM + " " + columnName, dataField: this.SUM_PREFIX + columnId, width: '25%', cellsformat: 'D', cellsalign: 'right' });
        }
        if (value.min) {
            columns.push({ text: this.MIN + " " + columnName, dataField: this.MIN_PREFIX + columnId, width: '25%', cellsformat: 'D', cellsalign: 'right' });
        }
        if (value.max) {
            columns.push({ text: this.MAX + " " + columnName, dataField: this.MAX_PREFIX + columnId, width: '25%', cellsformat: 'D', cellsalign: 'right' });
        }
        if (value.count) {
            columns.push({ text: this.COUNT + " " + columnName, dataField: this.COUNT_PREFIX + columnId, width: '25%', cellsformat: 'D', cellsalign: 'right' });
        }
        if (value.mean) {
            columns.push({ text: this.MEAN + " " + columnName, dataField: this.MEAN_PREFIX + columnId, width: '25%', cellsformat: 'D', cellsalign: 'right' });
        }
        if (value.stddeviation) {
            columns.push({ text: this.STDDEVIATION + " " + columnName, dataField: this.STDDEVIATION_PREFIX + columnId, width: '25%', cellsformat: 'D', cellsalign: 'right' });
        }
    };
    MsfDynamicTableComponent.prototype.getDataField = function () {
        var dataField = [
            { name: 'id', type: 'number' },
            { name: 'variable', type: 'string' },
            { name: 'children', type: 'array' },
            { name: 'expanded', type: 'bool' }
        ];
        for (var _i = 0, _a = this.globals.values; _i < _a.length; _i++) {
            var value = _a[_i];
            this.addColumnConfigObj(value, dataField);
        }
        return dataField;
    };
    MsfDynamicTableComponent.prototype.addColumnConfigObj = function (value, dataField) {
        var columnName = value.id;
        if (value.average) {
            dataField.push({ name: this.AVG_PREFIX + columnName, type: 'number' });
        }
        if (value.summary) {
            dataField.push({ name: this.SUM_PREFIX + columnName, type: 'number' });
        }
        if (value.min) {
            dataField.push({ name: this.MIN_PREFIX + columnName, type: 'number' });
        }
        if (value.max) {
            dataField.push({ name: this.MAX_PREFIX + columnName, type: 'number' });
        }
        if (value.count) {
            dataField.push({ name: this.COUNT_PREFIX + columnName, type: 'number' });
        }
        if (value.mean) {
            dataField.push({ name: this.MEAN_PREFIX + columnName, type: 'number' });
        }
        if (value.stddeviation) {
            dataField.push({ name: this.STDDEVIATION_PREFIX + columnName, type: 'number' });
        }
    };
    MsfDynamicTableComponent.prototype.handlerError = function (_this, result) {
        console.log(result);
        _this.globals.isLoading = false;
    };
    __decorate([
        ViewChild(jqxTreeGridComponent),
        __metadata("design:type", jqxTreeGridComponent)
    ], MsfDynamicTableComponent.prototype, "jqxTreeGridRef", void 0);
    MsfDynamicTableComponent = __decorate([
        Component({
            selector: 'app-msf-dynamic-table',
            templateUrl: './msf-dynamic-table.component.html',
            styleUrls: ['./msf-dynamic-table.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient, Globals, ApplicationService])
    ], MsfDynamicTableComponent);
    return MsfDynamicTableComponent;
}());
export { MsfDynamicTableComponent };
//# sourceMappingURL=msf-dynamic-table.component.js.map