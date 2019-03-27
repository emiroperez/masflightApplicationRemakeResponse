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
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { Globals } from '../globals/Globals';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';
import { Utils } from '../commons/utils';
import { ApplicationService } from '../services/application.service';
var MsfChartOnTimeDelayComponent = /** @class */ (function () {
    function MsfChartOnTimeDelayComponent(AmCharts, globals, service) {
        this.AmCharts = AmCharts;
        this.globals = globals;
        this.service = service;
        this.type = "airport";
        this.columns = [];
        this.functions = [{ id: 'avg', name: 'Average' },
            { id: 'sum', name: 'Sum' },
            { id: 'max', name: 'Max' },
            { id: 'min', name: 'Min' }
        ];
        this.chartTypes = [{ id: 'column', name: 'Columns' },
            { id: 'line', name: 'Lines' },
            { id: 'area', name: 'Area' }
        ];
        this.variableCtrl = new FormControl();
        this.variableFilterCtrl = new FormControl();
        this.xaxisCtrl = new FormControl();
        this.xaxisFilterCtrl = new FormControl();
        this.valueCtrl = new FormControl();
        this.valueFilterCtrl = new FormControl();
        this.filteredVariables = new ReplaySubject(1);
        this._onDestroy = new Subject();
        this.utils = new Utils();
    }
    MsfChartOnTimeDelayComponent.prototype.buildGraphs = function (dataProvider) {
        var graphs = [];
        for (var _i = 0, dataProvider_1 = dataProvider; _i < dataProvider_1.length; _i++) {
            var object = dataProvider_1[_i];
            graphs.push({
                balloonText: "Delay in [[category]] (" + object.valueField + "): <b>[[value]]</b>",
                fillAlphas: 0.9,
                lineAlpha: 0.2,
                valueAxis: object.valueAxis,
                lineColor: object.lineColor,
                title: object.valueField,
                type: "column",
                valueField: object.valueField
            });
        }
        return graphs;
    };
    MsfChartOnTimeDelayComponent.prototype.makeOptions = function (dataProvider) {
        var parserDate = this.xaxis.id.includes('date');
        return {
            "type": "serial",
            "theme": "dark",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": dataProvider.data,
            "synchronizeGrid": true,
            "valueAxes": [{
                    "gridColor": "#FFFFFF",
                    "gridAlpha": 0.2,
                    "dashLength": 0
                }],
            "graphs": this.buildGraphs(dataProvider.filter),
            "plotAreaFillAlphas": 0.1,
            "depth3D": 20,
            "angle": 30,
            "categoryField": this.xaxis.id,
            "categoryAxis": {
                "gridPosition": "start",
                "parseDates": parserDate,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true,
                "position": "bottom-right"
            },
            "chartScrollbar": {
                "scrollbarHeight": 2,
                "offset": -1,
                "backgroundAlpha": 0.1,
                "backgroundColor": "#888888",
                "selectedBackgroundColor": "#67b7dc",
                "selectedBackgroundAlpha": 1
            },
            "chartCursor": {
                "cursorPosition": "mouse"
            },
        };
    };
    MsfChartOnTimeDelayComponent.prototype.zoomChart = function () {
        var lastIndex = Math.round(this.chart2.dataProvider.length - (this.chart2.dataProvider.length / 2));
        this.chart2.zoomToIndexes(0, lastIndex);
    };
    MsfChartOnTimeDelayComponent.prototype.ngOnInit = function () {
        this.function = this.functions[0];
        this.currentChartType = this.chartTypes[0];
    };
    MsfChartOnTimeDelayComponent.prototype.ngAfterViewInit = function () {
        this.setInitialValue();
        this.setColumns();
    };
    /**
    * Sets the initial value after the filteredBanks are loaded initially
    */
    MsfChartOnTimeDelayComponent.prototype.setInitialValue = function () {
        var _this = this;
        this.filteredVariables
            .pipe(take(1), takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.variableSelect.compareWith = function (a, b) { return a.id === b.id; };
            _this.xaxisSelect.compareWith = function (a, b) { return a.id === b.id; };
            _this.valueSelect.compareWith = function (a, b) { return a.id === b.id; };
        });
    };
    MsfChartOnTimeDelayComponent.prototype.filterVariables = function (filterCtrl) {
        if (!this.columns) {
            return;
        }
        // get the search keyword
        var search = filterCtrl.value;
        if (!search) {
            this.filteredVariables.next(this.columns.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        this.filteredVariables.next(this.columns.filter(function (a) { return a.name.toLowerCase().indexOf(search) > -1; }));
    };
    MsfChartOnTimeDelayComponent.prototype.loadData = function () {
        this.globals.startTimestamp = new Date();
        this.service.loadChartData(this, this.handlerSuccess, this.handlerError);
        if (this.globals.currentOption.tabType === 'usageStatistics') {
            this.service.loadChartDataUsageStatistics(this, this.handlerSuccess, this.handlerError);
        }
        else {
            this.service.loadChartData(this, this.handlerSuccess, this.handlerError);
        }
    };
    MsfChartOnTimeDelayComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
        clearInterval(this.timer);
        if (this.chart2) {
            this.AmCharts.destroyChart(this.chart2);
        }
    };
    MsfChartOnTimeDelayComponent.prototype.handlerSuccess = function (_this, data) {
        _this.globals.endTimestamp = new Date();
        _this.chart2 = _this.AmCharts.makeChart('chartdiv2', _this.makeOptions(data));
        _this.chart2.addListener("dataUpdated", _this.zoomChart);
        _this.zoomChart();
        _this.chartTypeChange(_this.currentChartType);
        _this.globals.selectedIndex = 3;
        _this.globals.isLoading = false;
    };
    MsfChartOnTimeDelayComponent.prototype.handlerError = function (_this, result) {
        console.log(result);
        _this.globals.isLoading = false;
    };
    MsfChartOnTimeDelayComponent.prototype.setColumns = function () {
        for (var _i = 0, _a = this.globals.metadata; _i < _a.length; _i++) {
            var columnConfig = _a[_i];
            this.columns.push({ id: columnConfig.columnName, name: columnConfig.columnLabel });
        }
        // set initial selection
        this.variableCtrl.setValue([this.columns[0]]);
        this.xaxisCtrl.setValue([this.columns[0]]);
        this.valueCtrl.setValue([this.columns[0]]);
        this.searchChange(this.variableFilterCtrl);
        this.searchChange(this.xaxisFilterCtrl);
        this.searchChange(this.valueFilterCtrl);
    };
    MsfChartOnTimeDelayComponent.prototype.searchChange = function (filterCtrl) {
        var _this = this;
        // load the initial airport list
        this.filteredVariables.next(this.columns.slice());
        // listen for search field value changes
        filterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.filterVariables(filterCtrl);
        });
    };
    MsfChartOnTimeDelayComponent.prototype.setMsfTableRef = function (msfTableRef) {
        this.msfTableRef = msfTableRef;
    };
    MsfChartOnTimeDelayComponent.prototype.chartTypeChange = function (type) {
        switch (type.id) {
            case 'line':
                this.changeChartConfig('line', 1, 0);
                break;
            case 'area':
                this.changeChartConfig('line', 1, 0.3);
                break;
            case 'column':
                this.changeChartConfig('column', 0, 0.9);
                break;
        }
    };
    MsfChartOnTimeDelayComponent.prototype.changeChartConfig = function (type, lineAlpha, fillAlphas) {
        for (var _i = 0, _a = this.chart2.graphs; _i < _a.length; _i++) {
            var graph = _a[_i];
            graph.type = type;
            graph.lineAlpha = lineAlpha;
            graph.fillAlphas = fillAlphas;
        }
        this.chart2.validateNow();
    };
    __decorate([
        ViewChild('variableSelect'),
        __metadata("design:type", MatSelect)
    ], MsfChartOnTimeDelayComponent.prototype, "variableSelect", void 0);
    __decorate([
        ViewChild('xaxisSelect'),
        __metadata("design:type", MatSelect)
    ], MsfChartOnTimeDelayComponent.prototype, "xaxisSelect", void 0);
    __decorate([
        ViewChild('valueSelect'),
        __metadata("design:type", MatSelect)
    ], MsfChartOnTimeDelayComponent.prototype, "valueSelect", void 0);
    MsfChartOnTimeDelayComponent = __decorate([
        Component({
            selector: 'app-msf-chart-on-time-delay',
            templateUrl: 'msf-chart-on-time-delay.component.html',
            styleUrls: ['./msf-chart-on-time-delay.component.css']
        }),
        __metadata("design:paramtypes", [AmChartsService, Globals, ApplicationService])
    ], MsfChartOnTimeDelayComponent);
    return MsfChartOnTimeDelayComponent;
}());
export { MsfChartOnTimeDelayComponent };
//# sourceMappingURL=msf-chart-on-time-delay.component.js.map