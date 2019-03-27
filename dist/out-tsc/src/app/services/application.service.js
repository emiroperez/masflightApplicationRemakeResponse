var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ApiClient } from '../api/api-client';
import { Utils } from '../commons/utils';
var ApplicationService = /** @class */ (function () {
    // host1 = "http://69.64.45.220:8886"; 
    function ApplicationService(http) {
        this.http = http;
        this.host = "http://localhost:8887";
        // host = "";
        this.host1 = "http://localhost:8886";
        this.utils = new Utils();
    }
    ApplicationService.prototype.getTracking = function (_this, successHandler, errorHandler) {
        var params = this.utils.getUrlParameters(_this.globals.currentOption);
        var url = this.host1 + "/getTracking?" + params.url;
        this.http.get(_this, url, successHandler, errorHandler, null);
    };
    ApplicationService.prototype.getMapBoxTracking = function (_this, successHandler, errorHandler) {
        var params = this.utils.getUrlParameters(_this.globals.currentOption);
        var url = this.host1 + "/getMapBoxTracking?" + params.url;
        this.http.get(_this, url, successHandler, errorHandler, null);
    };
    ApplicationService.prototype.getDataTableSource = function (_this, handlerSuccess, handlerError, pageNumber) {
        _this.globals.isLoading = true;
        _this.displayedColumns = [];
        var param = this.utils.getUrlParameters(_this.globals.currentOption);
        var urlBase = param.url;
        urlBase += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=100&page_number=" + pageNumber;
        if (pageNumber == "0") {
            _this.dataSource = null;
        }
        console.log(urlBase);
        var urlArg = encodeURIComponent(urlBase);
        var url = this.host + "/consumeWebServices?url=" + urlArg + "&optionId=" + _this.globals.currentOption.id;
        this.http.get(_this, url, handlerSuccess, handlerError, null);
        console.log(url);
    };
    ApplicationService.prototype.loadChartData = function (_this, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var param = this.utils.getUrlParameters(_this.globals.currentOption);
        var urlBase = param.url;
        urlBase += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=999999";
        console.log(urlBase);
        var urlArg = encodeURIComponent(urlBase);
        var url = this.host + "/getChartData?url=" + urlArg + "&variable=" + _this.variable.id + "&xaxis=" + _this.xaxis.id + "&valueColunm=" + _this.valueColunm.id + "&function=" + _this.function.id;
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    ApplicationService.prototype.loadDynamicTableData = function (_this, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        _this.columns = [];
        _this.jqxTreeGridRef.clear();
        var param = this.utils.getUrlParameters(_this.globals.currentOption);
        var urlBase = param.url;
        urlBase += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=999999";
        console.log(urlBase);
        var urlArg = encodeURIComponent(urlBase);
        var url = this.host + "/getDynamicTableData?url=" + urlArg;
        var data = { variables: _this.globals.variables, values: _this.globals.values };
        this.http.post(_this, url, data, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.loadMenuOptions = function (_this, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/getMenuTree";
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    /*
      createMenucategory(_this, data, handlerSuccess, handlerError) {
        let url = this.host + "/menuTreeCategory";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
      }
    
      createMenuOption(_this, data, handlerSuccess, handlerError) {
        let url = this.host + "/menuTreeOption";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
      }
      */
    ApplicationService.prototype.loadOptionCategoryArguments = function (_this, data, handlerSuccess, handlerError) {
        //_this.globals.isLoading = true;    
        var url = this.host + "/getOptionArgumentsCategories?optionId=" + data.id;
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    ApplicationService.prototype.loadArguments = function (_this, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/getArguments";
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    ApplicationService.prototype.loadCategoryArguments = function (_this, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/getArgumentsCategories";
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    ApplicationService.prototype.createArgument = function (_this, data, handlerSuccess, handlerError) {
        var url = this.host + "/arguments?idOption=" + data.idOption;
        this.http.post(_this, url, data.argument, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.loadMenuCategories = function (_this, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/getMenu";
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    ApplicationService.prototype.saveMenu = function (_this, data, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/menu";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.saveOptionCategoryArguments = function (_this, data, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/saveOptionArgumentsCategories";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.loadArgumentsByCategory = function (_this, data, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/getArgumentsByCategory?idCategory=" + data.id;
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    ApplicationService.prototype.saveArgumentsCategory = function (_this, data, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/saveArgumentsCategory";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.saveArguments = function (_this, data, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/saveArguments";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.deleteArgumentsCategory = function (_this, data, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/deleteArgumentsCategory";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.deleteArguments = function (_this, data, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var url = this.host + "/deleteArguments";
        this.http.post(_this, url, data, handlerSuccess, handlerError);
    };
    ApplicationService.prototype.loadChartDataUsageStatistics = function (_this, handlerSuccess, handlerError) {
        _this.globals.isLoading = true;
        var params = this.utils.getParameters(_this.globals.currentOption);
        params += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=999999";
        console.log(params);
        var url = this.host + "/getChartDataUsageStatistics?variable=" + _this.variable.id + "&xaxis=" + _this.xaxis.id + "&valueColunm=" + _this.valueColunm.id + "&function=" + _this.function.id + "&" + params + "&optionId=" + _this.globals.currentOption.id;
        ;
        this.http.get(_this, url, handlerSuccess, handlerError, null);
    };
    ApplicationService.prototype.getDataTableSourceUsageStatistics = function (_this, handlerSuccess, handlerError) {
        _this.dataSource = null;
        _this.displayedColumns = [];
        _this.globals.isLoading = true;
        var param = this.utils.getUrlParameters(_this.globals.currentOption);
        var urlBase = param.url;
        urlBase += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=100";
        console.log(urlBase);
        var urlArg = encodeURIComponent(urlBase);
        urlBase += "&optionId=" + _this.globals.currentOption.id;
        this.http.get(_this, urlBase, handlerSuccess, handlerError, null);
    };
    ApplicationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ApiClient])
    ], ApplicationService);
    return ApplicationService;
}());
export { ApplicationService };
//# sourceMappingURL=application.service.js.map