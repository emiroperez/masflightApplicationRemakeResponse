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
import { ApplicationService } from '../services/application.service';
import { Globals } from '../globals/Globals';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import * as mapboxgl from 'mapbox-gl';
var MsfMapComponent = /** @class */ (function () {
    function MsfMapComponent(services, globals, AmCharts) {
        this.services = services;
        this.globals = globals;
        this.AmCharts = AmCharts;
        this.mapReady = false;
        this.zoom = [1];
        this.center = [-73.968285, 40.785091];
        this.data = [];
        this.coordinates = [];
        this.paint = {
            'circle-radius': 2,
            'circle-color': '#B42222'
        };
        this.layout = {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        };
        this.mapTypes = [
            { id: 'line', name: 'Lines' },
            { id: 'point', name: 'Dots' }
        ];
    }
    MsfMapComponent.prototype.ngOnInit = function () {
        this.currentMapType = this.mapTypes[1];
    };
    MsfMapComponent.prototype.getTrackingDataSource = function () {
        this.zoom = [1];
        this.globals.startTimestamp = new Date();
        this.data = [];
        this.globals.isLoading = true;
        this.services.getMapBoxTracking(this, this.successHandler, this.errorHandler);
    };
    MsfMapComponent.prototype.successHandler = function (_this, features) {
        _this.globals.endTimestamp = new Date();
        _this.data = features;
        _this.setCoordinates(features);
        if (features.length > 0) {
            var size = Math.round(features[0].features.length / 2);
            _this.center = features[0].features[size].geometry.coordinates;
            _this.getChart(_this);
            _this.zoom = [4];
        }
        _this.globals.isLoading = false;
    };
    MsfMapComponent.prototype.errorHandler = function (_this, data) {
        _this.globals.isLoading = false;
    };
    MsfMapComponent.prototype.getHeight = function () {
        if (this.data != null && this.data.length == 1) {
            return 60;
        }
        return 100;
    };
    MsfMapComponent.prototype.getChart = function (_this) {
        _this.mapReady = true;
        var chartData = _this.generateChartData();
        _this.chart = _this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "black",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": chartData,
            "synchronizeGrid": true,
            "valueAxes": [{
                    "id": "v1",
                    "axisColor": "#FF6600",
                    "axisThickness": 2,
                    "axisAlpha": 1,
                    "position": "left"
                }, {
                    "id": "v2",
                    "axisColor": "#FCD202",
                    "axisThickness": 2,
                    "axisAlpha": 1,
                    "position": "right"
                }],
            "graphs": [{
                    "valueAxis": "v1",
                    "lineColor": "#FF6600",
                    "hideBulletsCount": 0,
                    "title": "Altitude",
                    "valueField": "altitude",
                    "fillAlphas": 0
                }, {
                    "valueAxis": "v2",
                    "lineColor": "#FCD202",
                    "hideBulletsCount": 0,
                    "title": "Speed",
                    "valueField": "groundSpeed",
                    "fillAlphas": 0
                }],
            "chartScrollbar": {},
            "chartCursor": {
                "cursorPosition": "mouse"
            },
            "categoryField": "pointInTime",
            "categoryAxis": {
                "parseDates": false,
                "axisColor": "#DADADA",
                "minorGridEnabled": true,
                "labelsEnabled": false
            },
            "export": {
                "enabled": false
            }
        });
        _this.chart.addListener("dataUpdated", _this.zoomChart);
        _this.zoomChart();
    };
    MsfMapComponent.prototype.generateChartData = function () {
        var chartData = [];
        if (this.data != null && this.data.length == 1) {
            chartData = this.data[0].features;
        }
        return chartData;
    };
    MsfMapComponent.prototype.zoomChart = function () {
        var lastIndex = Math.round(this.chart.dataProvider.length);
        this.chart.zoomToIndexes(0, lastIndex);
    };
    MsfMapComponent.prototype.mapTypeChange = function (type) {
        switch (type.id) {
            case 'line':
                break;
            case 'point':
                break;
        }
    };
    MsfMapComponent.prototype.setCoordinates = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var features = data_1[_i];
            for (var _a = 0, _b = features.features; _a < _b.length; _a++) {
                var feature = _b[_a];
                this.coordinates.push(feature.geometry.coordinates);
            }
        }
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", mapboxgl.Map)
    ], MsfMapComponent.prototype, "map", void 0);
    MsfMapComponent = __decorate([
        Component({
            selector: 'app-msf-map',
            templateUrl: './msf-map.component.html',
            styles: ["\n    mgl-map {\n      height: 100%;\n      width: 100%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [ApplicationService, Globals, AmChartsService])
    ], MsfMapComponent);
    return MsfMapComponent;
}());
export { MsfMapComponent };
//# sourceMappingURL=msf-map.component.js.map