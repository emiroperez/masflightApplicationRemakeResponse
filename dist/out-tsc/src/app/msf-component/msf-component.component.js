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
import { Globals } from '../globals/Globals';
import { ComponentType } from '../commons/ComponentType';
var MsfComponentComponent = /** @class */ (function () {
    function MsfComponentComponent(globals) {
        this.globals = globals;
        this.open = false;
    }
    MsfComponentComponent.prototype.ngOnInit = function () {
    };
    MsfComponentComponent.prototype.componentClickHandler = function (argsContainer, icon) {
        if (this.argsBefore) {
            this.argsBefore.open = false;
            this.iconBefore.innerText = "expand_more";
        }
        if (!this.open || (this.open && (this.argsBefore !== argsContainer))) {
            argsContainer.open = true;
            icon.innerText = "expand_less";
            this.open = true;
        }
        else {
            argsContainer.open = false;
            icon.innerText = "expand_more";
            this.open = false;
        }
        this.globals.currentAgts = argsContainer;
        this.iconBefore = icon;
        this.argsBefore = argsContainer;
    };
    MsfComponentComponent.prototype.isAirportRoute = function (argument) {
        return ComponentType.airportRoute == argument.type;
    };
    MsfComponentComponent.prototype.isAirport = function (argument) {
        return ComponentType.airport == argument.type;
    };
    MsfComponentComponent.prototype.isTimeRange = function (argument) {
        return ComponentType.timeRange == argument.type;
    };
    MsfComponentComponent.prototype.isDateRange = function (argument) {
        return ComponentType.dateRange == argument.type;
    };
    MsfComponentComponent.prototype.isCeiling = function (argument) {
        return ComponentType.ceiling == argument.type;
    };
    MsfComponentComponent.prototype.isWindSpeed = function (argument) {
        return ComponentType.windSpeed == argument.type;
    };
    MsfComponentComponent.prototype.isTemperature = function (argument) {
        return ComponentType.temperature == argument.type;
    };
    MsfComponentComponent.prototype.isWindDirection = function (argument) {
        return ComponentType.windDirection == argument.type;
    };
    MsfComponentComponent.prototype.isAirline = function (argument) {
        return ComponentType.airline == argument.type;
    };
    MsfComponentComponent.prototype.isSingleAirline = function (argument) {
        return ComponentType.singleairline == argument.type;
    };
    MsfComponentComponent.prototype.isTailNumber = function (argument) {
        return ComponentType.tailnumber == argument.type;
    };
    MsfComponentComponent.prototype.isAircraftType = function (argument) {
        return ComponentType.aircraftType == argument.type;
    };
    MsfComponentComponent.prototype.isFlightNumberType = function (argument) {
        return ComponentType.flightNumber == argument.type;
    };
    MsfComponentComponent.prototype.isGrouping = function (argument) {
        return ComponentType.grouping == argument.type;
    };
    MsfComponentComponent.prototype.isRounding = function (argument) {
        return ComponentType.rounding == argument.type;
    };
    MsfComponentComponent.prototype.isDate = function (argument) {
        return ComponentType.date == argument.type;
    };
    MsfComponentComponent.prototype.isCancelled = function (argument) {
        return ComponentType.cancelled == argument.type;
    };
    MsfComponentComponent.prototype.isUserList = function (argument) {
        return ComponentType.userList == argument.type;
    };
    MsfComponentComponent.prototype.isOptionList = function (argument) {
        return ComponentType.optionList == argument.type;
    };
    MsfComponentComponent.prototype.isMsFreeTextInput = function (argument) {
        return ComponentType.freeTextInput == argument.type;
    };
    MsfComponentComponent.prototype.isSelectBoxSingleOption = function (argument) {
        return ComponentType.selectBoxSingleOption == argument.type;
    };
    MsfComponentComponent.prototype.isSelectBoxMultipleOption = function (argument) {
        return ComponentType.selectBoxMultipleOption == argument.type;
    };
    MsfComponentComponent.prototype.isDatePicker = function (argument) {
        return ComponentType.datePicker == argument.type;
    };
    MsfComponentComponent.prototype.isTimePicker = function (argument) {
        return ComponentType.timePicker == argument.type;
    };
    MsfComponentComponent.prototype.isDateTimePicker = function (argument) {
        return ComponentType.dateTimePicker == argument.type;
    };
    MsfComponentComponent.prototype.isCheckBox = function (argument) {
        return ComponentType.checkBox == argument.type;
    };
    MsfComponentComponent.prototype.isCancelsCheckBox = function (argument) {
        return ComponentType.cancelsCheckBox == argument.type;
    };
    MsfComponentComponent.prototype.isDiversionsCheckBox = function (argument) {
        return ComponentType.diversionsCheckbox == argument.type;
    };
    MsfComponentComponent.prototype.isFlightDelaysCheckBox = function (argument) {
        return ComponentType.flightDelaysCheckbox == argument.type;
    };
    MsfComponentComponent.prototype.isCausesFlightDelaysCheckBox = function (argument) {
        return ComponentType.causesFlightDelaysCheckbox == argument.type;
    };
    MsfComponentComponent.prototype.isTaxiTimes = function (argument) {
        return ComponentType.taxiTimes == argument.type;
    };
    MsfComponentComponent.prototype.isTaxiTimesCheckbox = function (argument) {
        return ComponentType.taxiTimesCheckbox == argument.type;
    };
    MsfComponentComponent.prototype.isTaxiTimesCheckboxes = function (argument) {
        return ComponentType.taxiTimesCheckboxes == argument.type;
    };
    MsfComponentComponent.prototype.isDatePeriod = function (argument) {
        return ComponentType.datePeriod == argument.type;
    };
    MsfComponentComponent.prototype.isRegion = function (argument) {
        return ComponentType.region == argument.type;
    };
    MsfComponentComponent.prototype.isDatePeriodYear = function (argument) {
        return ComponentType.datePeriodYear == argument.type;
    };
    MsfComponentComponent.prototype.isDatePeriodYearMonth = function (argument) {
        return ComponentType.datePeriodYearMonth == argument.type;
    };
    MsfComponentComponent = __decorate([
        Component({
            selector: 'app-msf-component',
            templateUrl: './msf-component.component.html',
            styleUrls: ['./msf-component.component.css']
        }),
        __metadata("design:paramtypes", [Globals])
    ], MsfComponentComponent);
    return MsfComponentComponent;
}());
export { MsfComponentComponent };
//# sourceMappingURL=msf-component.component.js.map