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
import * as mapboxgl from 'mapbox-gl';
import { ApplicationService } from '../services/application.service';
import { Globals } from '../globals/Globals';
var MapBoxComponent = /** @class */ (function () {
    function MapBoxComponent(services, globals) {
        this.services = services;
        this.globals = globals;
        this.zoom = [3];
        this.center = [-73.968285, 40.785091];
        this.data = { 'type': 'FeatureCollection',
            'features': []
        };
        this.source = {
            'type': 'geojson',
            'data': this.data
        };
    }
    MapBoxComponent.prototype.ngOnInit = function () {
        this.getTrackingDataSource();
    };
    MapBoxComponent.prototype.ngAfterViewInit = function () {
        this.map.resize;
    };
    MapBoxComponent.prototype.refresh = function () {
        this.map.resize;
    };
    MapBoxComponent.prototype.getTrackingDataSource = function () {
        this.globals.isLoading = true;
        this.services.getMapBoxTracking(this, this.successHandler, this.errorHandler);
    };
    MapBoxComponent.prototype.successHandler = function (_this, features) {
        _this.data = {
            'type': 'FeatureCollection',
            'features': features
        };
        _this.globals.isLoading = false;
    };
    MapBoxComponent.prototype.errorHandler = function (_this, data) {
        _this.globals.isLoading = false;
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", mapboxgl.Map)
    ], MapBoxComponent.prototype, "map", void 0);
    MapBoxComponent = __decorate([
        Component({
            selector: 'app-map-box',
            templateUrl: './map-box.component.html',
            styles: ["\n    mgl-map {\n      height: 100%;\n      width: 100%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [ApplicationService, Globals])
    ], MapBoxComponent);
    return MapBoxComponent;
}());
export { MapBoxComponent };
//# sourceMappingURL=map-box.component.js.map