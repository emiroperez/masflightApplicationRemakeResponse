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
import { ApplicationService } from '../services/application.service';
import { Globals } from '../globals/Globals';
var CategoryArgumentsComponent = /** @class */ (function () {
    function CategoryArgumentsComponent(globals, service) {
        this.globals = globals;
        this.service = service;
        this.columnDefs = [
            {
                headerName: 'Label',
                field: 'label',
                checkboxSelection: true,
                editable: true
            },
            {
                headerName: 'Icon',
                field: 'icon',
                editable: true
            }
        ];
        this.columnDefsArguments = [
            {
                headerName: 'Name1',
                field: 'name1',
                checkboxSelection: true,
                editable: true
            },
            {
                headerName: 'Name2',
                field: 'name2',
                editable: true
            },
            {
                headerName: 'Name3',
                field: 'name3',
                editable: true
            },
            {
                headerName: 'Label1',
                field: 'label1',
                editable: true
            },
            {
                headerName: 'Label2',
                field: 'label2',
                editable: true
            },
            {
                headerName: 'Label3',
                field: 'label3',
                editable: true
            },
            {
                headerName: 'Title',
                field: 'title',
                editable: true
            },
            {
                headerName: 'URL',
                field: 'url',
                editable: true
            },
            {
                headerName: 'Type',
                field: "type",
                editable: true,
                cellEditor: 'agSelectCellEditor',
                cellEditorParams: {
                    values: ["airline", "airportRoute", "timeRange", "dateRange", "tailnumber",
                        "singleairline", "aircraftType", "flightNumber", "airport", "grouping",
                        "rounding", "date", "windDirection", "ceiling", "windSpeed", "temperature"]
                }
            }
        ];
        this.rowData = [];
        this.rowDataToDelete = [];
        this.rowDataArguments = [];
        this.rowDataArgumentsToDelete = [];
    }
    CategoryArgumentsComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        /*
        this.gridApi.sizeColumnsToFit();
        window.onresize = () => {
          this.gridApi.sizeColumnsToFit();
        }
        */
    };
    CategoryArgumentsComponent.prototype.onGridReadyArgument = function (params) {
        this.gridApiArgument = params.api;
        this.columnApiArgument = params.columnApi;
        /*
        this.gridApiArgument.sizeColumnsToFit();
        window.onresize = () => {
          this.gridApiArgument.sizeColumnsToFit();
        }
        */
    };
    CategoryArgumentsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CategoryArgumentsComponent.prototype.getData = function () {
        this.service.loadCategoryArguments(this, this.handlerSuccessCategoryArguments, this.handlerErrorCategoryArguments);
    };
    CategoryArgumentsComponent.prototype.handlerSuccessCategoryArguments = function (_this, data) {
        _this.rowDataToDelete = [];
        _this.rowData = data;
        _this.globals.isLoading = false;
    };
    CategoryArgumentsComponent.prototype.handlerErrorCategoryArguments = function (_this, result) {
        _this.globals.isLoading = false;
        console.log(result);
    };
    CategoryArgumentsComponent.prototype.getDataCategoryArguments = function () {
        var rowDataResult = [];
        this.gridApi.forEachNode(function (node) { return rowDataResult.push(node.data); });
        return rowDataResult;
    };
    CategoryArgumentsComponent.prototype.getDataArguments = function () {
        var rowDataResult = [];
        this.gridApiArgument.forEachNode(function (node) { return rowDataResult.push(node.data); });
        return rowDataResult;
    };
    CategoryArgumentsComponent.prototype.onSelectionChanged = function (event) {
        var selectedRows = this.gridApi.getSelectedRows();
        if (selectedRows.length > 0 && selectedRows[0].id != null) {
            this.service.loadArgumentsByCategory(this, selectedRows[0], this.handlerSuccessArgumentsByCategory, this.handlerErrorArgumentsByCategory);
        }
        else {
            this.rowDataArguments = [];
            this.rowDataArgumentsToDelete = [];
        }
        console.log(selectedRows);
    };
    CategoryArgumentsComponent.prototype.handlerSuccessArgumentsByCategory = function (_this, result) {
        _this.globals.isLoading = false;
        _this.rowDataArgumentsToDelete = [];
        _this.rowDataArguments = result;
    };
    CategoryArgumentsComponent.prototype.handlerErrorArgumentsByCategory = function (_this, result) {
        _this.globals.isLoading = false;
        console.log(result);
    };
    CategoryArgumentsComponent.prototype.addCategoryArgument = function () {
        var value = {
            "id": null,
            "label": null,
            "icon": null
        };
        this.rowData.unshift(value);
        this.gridApi.setRowData(this.rowData);
    };
    CategoryArgumentsComponent.prototype.removeCategoryArgument = function () {
        var selectedData = this.gridApi.getSelectedRows();
        this.rowDataToDelete.push(selectedData[0]);
        var res = this.gridApi.updateRowData({ remove: selectedData });
        console.log(this.rowData);
    };
    CategoryArgumentsComponent.prototype.saveCategoryArgument = function () {
        this.service.saveArgumentsCategory(this, this.getDataCategoryArguments(), this.handlerSuccessSaveCategoryArgument, this.handlerErrorSaveCategoryArgument);
    };
    CategoryArgumentsComponent.prototype.handlerSuccessSaveCategoryArgument = function (_this, result) {
        _this.deleteArgumentsCategory();
    };
    CategoryArgumentsComponent.prototype.handlerErrorSaveCategoryArgument = function (_this, result) {
        _this.globals.isLoading = false;
    };
    CategoryArgumentsComponent.prototype.deleteArgumentsCategory = function () {
        this.service.deleteArgumentsCategory(this, this.rowDataToDelete, this.handlerSuccesDeleteArgumentsCategory, this.handlerErrorDeleteArgumentsCategory);
    };
    CategoryArgumentsComponent.prototype.handlerSuccesDeleteArgumentsCategory = function (_this, result) {
        _this.getData();
    };
    CategoryArgumentsComponent.prototype.handlerErrorDeleteArgumentsCategory = function (_this, result) {
        console.log(result);
    };
    CategoryArgumentsComponent.prototype.addArgument = function () {
        var selectedData = this.gridApi.getSelectedRows();
        if (selectedData.length == 1) {
            var value = {
                "categoryId": selectedData[0].id,
                "name1": null,
                "name2": null,
                "name3": null,
                "url": null,
                "type": null
            };
            this.rowDataArguments.unshift(value);
            this.gridApiArgument.setRowData(this.rowDataArguments);
        }
    };
    CategoryArgumentsComponent.prototype.saveArguments = function () {
        this.service.saveArguments(this, this.getDataArguments(), this.handlerSuccessSaveArguments, this.handlerErrorSaveArguments);
    };
    CategoryArgumentsComponent.prototype.handlerSuccessSaveArguments = function (_this, result) {
        _this.deleteArgument();
    };
    CategoryArgumentsComponent.prototype.handlerErrorSaveArguments = function (_this, result) {
        _this.globals.isLoading = false;
        console.log(result);
    };
    CategoryArgumentsComponent.prototype.removeArgument = function () {
        var selectedData = this.gridApiArgument.getSelectedRows();
        this.rowDataArgumentsToDelete.push(selectedData[0]);
        var res = this.gridApiArgument.updateRowData({ remove: selectedData });
        console.log(this.rowDataArgumentsToDelete);
    };
    CategoryArgumentsComponent.prototype.deleteArgument = function () {
        this.service.deleteArguments(this, this.rowDataArgumentsToDelete, this.handlerSuccessDeleteArguments, this.handlerErrorDeleteArguments);
    };
    CategoryArgumentsComponent.prototype.handlerSuccessDeleteArguments = function (_this, result) {
        _this.onSelectionChanged();
        _this.globals.isLoading = false;
        console.log(result);
    };
    CategoryArgumentsComponent.prototype.handlerErrorDeleteArguments = function (_this, result) {
        console.log(result);
    };
    CategoryArgumentsComponent = __decorate([
        Component({
            selector: 'app-category-arguments',
            templateUrl: './category-arguments.component.html',
            styleUrls: ['./category-arguments.component.css']
        }),
        __metadata("design:paramtypes", [Globals, ApplicationService])
    ], CategoryArgumentsComponent);
    return CategoryArgumentsComponent;
}());
export { CategoryArgumentsComponent };
//# sourceMappingURL=category-arguments.component.js.map