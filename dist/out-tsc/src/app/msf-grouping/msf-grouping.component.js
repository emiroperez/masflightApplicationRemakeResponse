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
import { Arguments } from '../model/Arguments';
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';
var MsfGroupingComponent = /** @class */ (function () {
    // private _onDestroy = new Subject<void>();
    function MsfGroupingComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        // public groupingCtrl: FormControl = new FormControl();
        // public groupingFilterCtrl: FormControl = new FormControl();
        this.groupingList = [
            { id: 'YEAR', name: 'Year', column: 'Year' },
            { id: 'MONTH', name: 'Month', column: 'Month' },
            { id: 'DAY', name: 'Day', column: 'Day' },
            { id: 'HOUR', name: 'Hour', column: 'Hour' },
            { id: 'EQUIPMENTTYPESPECIFIC', name: 'Specific Equipment Type', column: 'EspecificEquipmentType' },
            { id: 'EQUIPMENTTYPEGENERAL', name: 'General Equipment Type', column: 'GeneralEquipmentType' },
            { id: 'OPERATINGAIRLINE', name: 'Operating Airline', column: 'OperatingAirline' },
            { id: 'ORIGINAIRPORT', name: 'Origin Airport', column: 'Origin' },
            { id: 'DESTINATIONAIRPORT', name: 'Destination Airport', column: 'Destination' },
            { id: 'FLIGHTNUMBER', name: 'Flight Number', column: 'FlightNumber' },
            { id: 'MARKETINGAIRLINE', name: 'Marketing Airline', column: 'Marketing_Carrier' },
            // {id: 'STATUSCODE', name: 'Status Code',column:'StatusCode'},
            { id: 'ROUTE', name: 'Route', column: 'Route' }
        ];
    }
    MsfGroupingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfGroupingComponent.prototype, "argument", void 0);
    MsfGroupingComponent = __decorate([
        Component({
            selector: 'app-msf-grouping',
            templateUrl: './msf-grouping.component.html',
            styleUrls: ['./msf-grouping.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient, Globals])
    ], MsfGroupingComponent);
    return MsfGroupingComponent;
}());
export { MsfGroupingComponent };
//# sourceMappingURL=msf-grouping.component.js.map