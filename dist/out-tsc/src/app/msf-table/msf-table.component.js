var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource, MatTab } from '@angular/material';
import { Globals } from '../globals/Globals';
import { ApplicationService } from '../services/application.service';
import { MsfGroupingComponent } from '../msf-grouping/msf-grouping.component';
var MsfTableComponent = /** @class */ (function () {
    function MsfTableComponent(globals, service) {
        this.globals = globals;
        this.service = service;
        this.isLoading = false;
        this.color = 'primary';
        this.displayedColumns = [];
        this.indexOfAttrInList = function (list, attr, value) {
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj[attr] == value) {
                    return i;
                }
            }
            return -1;
        };
    }
    MsfTableComponent.prototype.ngOnInit = function () {
        // this.dataSource.sort = this.sort;  
    };
    MsfTableComponent.prototype.ngAfterViewInit = function () {
        //this.globals.generateDynamicTable = false;
    };
    MsfTableComponent.prototype.setGroupingArgument = function () {
        var _this = this;
        var menuOptionArguments = this.globals.currentOption.menuOptionArguments;
        var categoryArguments = menuOptionArguments[menuOptionArguments.length - 1].categoryArguments;
        categoryArguments.forEach(function (element) {
            element.arguments.forEach(function (element2) {
                if (element2.type == "grouping") {
                    _this.groupingArgument = element2;
                }
            });
        });
    };
    MsfTableComponent.prototype.addGroupingColumns = function (displayedColumns) {
        var array = this.groupingArgument.value1;
        for (var index = array.length - 1; index >= 0; index--) {
            var element = array[index];
            var indexColumn = this.indexOfAttrInList(displayedColumns, "columnName", element.column);
            displayedColumns.unshift({ columnType: "string",
                columnName: element.column,
                columnLabel: element.name });
            if (indexColumn != -1) {
                displayedColumns.splice(indexColumn, 1);
            }
            else {
            }
        }
    };
    MsfTableComponent.prototype.setMsfChartRef = function (msfChartRef) {
        msfChartRef.setColumns(this.displayedColumns);
    };
    MsfTableComponent.prototype.replaceAll = function (text) {
        var re = /_/gi;
        return text.replace(re, ' ');
    };
    MsfTableComponent.prototype.getData = function (moreResults) {
        if (this.globals.moreResultsBtn) {
            this.globals.startTimestamp = new Date();
            var pageSize = 100;
            if (moreResults) {
                this.actualPageNumber++;
                this.globals.moreResults = true;
            }
            else {
                this.actualPageNumber = 0;
            }
            this.service.getDataTableSource(this, this.handlerSuccess, this.handlerError, "" + this.actualPageNumber);
        }
    };
    MsfTableComponent.prototype.getDataUsageStatistics = function () {
        this.service.getDataTableSourceUsageStatistics(this, this.handlerSuccess, this.handlerError);
    };
    MsfTableComponent.prototype.getDataCurrentSource = function () {
        var tab = this.tabRef;
        for (var _i = 0, _a = this.dataSource; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.id === tab) {
                return data;
            }
        }
        return null;
    };
    MsfTableComponent.prototype.getMainKey = function (keys, response) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var i = keys_1[_i];
            var obj = response[i];
            if (obj instanceof Object) {
                return obj;
            }
        }
        return null;
    };
    MsfTableComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.setGroupingArgument();
        _this.globals.endTimestamp = new Date();
        var response = data.Response;
        _this.globals.totalRecord = response.total;
        var keys = Object.keys(response);
        var mainElement = _this.getMainKey(keys, response);
        if (!(mainElement instanceof Array)) {
            mainElement = [mainElement];
        }
        if (_this.globals.totalRecord > 0) {
            _this.globals.displayedColumns = data.metadata;
            if (_this.groupingArgument != null) {
                _this.addGroupingColumns(_this.globals.displayedColumns);
            }
            _this.metadata = data.metadata;
            _this.globals.metadata = data.metadata;
            console.log(_this.globals.displayedColumns);
            _this.setColumnsDisplayed(_this);
            var dataResult = new MatTableDataSource(mainElement);
            dataResult.sort = _this.sort;
            if (_this.globals.moreResults) {
                if (_this.globals.totalRecord < 100) {
                    _this.globals.moreResultsBtn = false;
                    _this.globals.moreResults = false;
                }
                _this.dataSource.data = _this.dataSource.data.concat(dataResult.data);
            }
            else {
                _this.dataSource = dataResult;
            }
        }
        else {
            if (_this.globals.moreResults) {
                _this.globals.moreResultsBtn = false;
                _this.globals.moreResults = false;
            }
        }
        _this.globals.isLoading = false;
        if (_this.dataSource) {
            _this.dataSource.sort = _this.sort;
            _this.globals.dataSource = true;
            console.log(_this.dataSource);
        }
    };
    MsfTableComponent.prototype.setColumnsDisplayed = function (_this) {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var column = _a[_i];
            _this.displayedColumns.push(column.columnName);
        }
    };
    MsfTableComponent.prototype.handlerError = function (_this, result) {
        _this.globals.isLoading = false;
        console.log(result);
    };
    __decorate([
        Input('tabRef'),
        __metadata("design:type", MatTab)
    ], MsfTableComponent.prototype, "tabRef", void 0);
    __decorate([
        Input('displayedColumns'),
        __metadata("design:type", Array)
    ], MsfTableComponent.prototype, "displayedColumns", void 0);
    __decorate([
        Input('msfGroupingComponent'),
        __metadata("design:type", MsfGroupingComponent)
    ], MsfTableComponent.prototype, "msfGroupingComponent", void 0);
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", MatSort)
    ], MsfTableComponent.prototype, "sort", void 0);
    MsfTableComponent = __decorate([
        Component({
            selector: 'app-msf-table',
            templateUrl: './msf-table.component.html',
            styleUrls: ['./msf-table.component.css']
        }),
        __metadata("design:paramtypes", [Globals, ApplicationService])
    ], MsfTableComponent);
    return MsfTableComponent;
}());
export { MsfTableComponent };
//# sourceMappingURL=msf-table.component.js.map