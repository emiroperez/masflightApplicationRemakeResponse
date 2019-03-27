import { ComponentType } from "./ComponentType";
import { DateTimeFormatPipe } from "./DateTimeFormatPipe";
import { DateFormatPipe } from "./DateFormatPipe ";
import { DatePipe } from "@angular/common";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.showAlert = function (type, message) {
        this.notificationShow = true;
        this.notificationType = type;
        this.notificationMessage = message;
    };
    Utils.prototype.isEmpty = function (value) {
        if (value == null || value == '') {
            return true;
        }
        return false;
    };
    Utils.prototype.getUrlParameters = function (option) {
        console.log(option);
        var params;
        if (option.menuOptionArguments) {
            for (var _i = 0, _a = option.menuOptionArguments; _i < _a.length; _i++) {
                var menuOptionArguments = _a[_i];
                if (menuOptionArguments.categoryArguments) {
                    for (var i = 0; i < menuOptionArguments.categoryArguments.length; i++) {
                        var category = menuOptionArguments.categoryArguments[i];
                        if (category && category.arguments) {
                            for (var j = 0; j < category.arguments.length; j++) {
                                var argument = category.arguments[j];
                                if (params) {
                                    params += "&" + this.getArguments(argument);
                                }
                                else {
                                    params = this.getArguments(argument);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (option.baseUrl) {
            return { tab: option.tab, url: option.baseUrl + "?" + params };
        }
        return { tab: option.tab, url: params };
    };
    Utils.prototype.getParameters = function (option) {
        var params;
        if (option.menuOptionArguments) {
            for (var _i = 0, _a = option.menuOptionArguments; _i < _a.length; _i++) {
                var menuOptionArguments = _a[_i];
                if (menuOptionArguments.categoryArguments) {
                    for (var i = 0; i < menuOptionArguments.categoryArguments.length; i++) {
                        var category = menuOptionArguments.categoryArguments[i];
                        if (category && category.arguments) {
                            for (var j = 0; j < category.arguments.length; j++) {
                                var argument = category.arguments[j];
                                if (params) {
                                    params += "&" + this.getArguments(argument);
                                }
                                else {
                                    params = this.getArguments(argument);
                                }
                            }
                        }
                    }
                }
            }
        }
        return params;
    };
    Utils.prototype.getArguments = function (argument) {
        var args = '';
        if (argument.name1) {
            args = argument.name1 + "=" + this.getValueFormat(argument.type, argument.value1);
        }
        if (argument.name2) {
            if (args !== '') {
                args += "&" + argument.name2 + "=" + this.getValueFormat(argument.type, argument.value2);
            }
            else {
                args += argument.name2 + "=" + this.getValueFormat(argument.type, argument.value2);
            }
        }
        if (argument.name3) {
            if (args !== '') {
                args += "&" + argument.name3 + "=" + this.getValueFormat(argument.type, argument.value3);
            }
            else {
                args += argument.name3 + "=" + this.getValueFormat(argument.type, argument.value3);
            }
        }
        return args;
    };
    Utils.prototype.getValueFormat = function (type, value) {
        if (typeof value === 'undefined') {
            return '';
        }
        if (type == ComponentType.timeRange) {
            return new DateTimeFormatPipe('en-US').transform(new Date("2000-01-01 " + value).getTime());
        }
        else if (type == ComponentType.dateRange ||
            type == ComponentType.date) {
            return new DateFormatPipe('en-US').transform(value);
        }
        else if (type == ComponentType.airport) {
            if (typeof value === "string") {
                return value;
            }
            return value.iata;
        }
        else if (type == ComponentType.ceiling ||
            type == ComponentType.tailnumber ||
            type == ComponentType.rounding) {
            if (typeof value === "string") {
                return value;
            }
            return value.id;
        }
        else if (type == ComponentType.singleairline) {
            if (typeof value === "string") {
                return value;
            }
            if (typeof value.iata === 'undefined') {
                return '';
            }
            return value.iata;
        }
        else if (type == ComponentType.airline ||
            type == ComponentType.airportRoute) {
            var valueAux = "";
            var i = 0;
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var val = value_1[_i];
                if (i == 0) {
                    valueAux = val.iata;
                }
                else {
                    valueAux += "," + val.iata;
                }
                i++;
            }
            return valueAux;
        }
        else if (type == ComponentType.grouping) {
            var valueAux = "";
            var i = 0;
            for (var _a = 0, value_2 = value; _a < value_2.length; _a++) {
                var val = value_2[_a];
                if (i == 0) {
                    valueAux = val.id;
                }
                else {
                    valueAux += "," + val.id;
                }
                i++;
            }
            return valueAux;
        }
        else if (type == ComponentType.aircraftType) {
            var valueAux = "";
            var i = 0;
            for (var _b = 0, value_3 = value; _b < value_3.length; _b++) {
                var val = value_3[_b];
                if (i == 0) {
                    valueAux = val.name;
                }
                else {
                    valueAux += "," + val.name;
                }
                i++;
            }
            return valueAux;
        }
        return value;
    };
    ;
    Utils.prototype.getValueFormatView = function (type, value) {
        if (value != null) {
            if (typeof value === 'undefined') {
                return '';
            }
            if (type == ComponentType.dateRange ||
                type == ComponentType.date) {
                return this.getDateFormat(value, null);
            }
            else if (type == ComponentType.airport) {
                if (typeof value === "string") {
                    return value;
                }
                return value.iata;
            }
            else if (type == ComponentType.ceiling ||
                type == ComponentType.tailnumber ||
                type == ComponentType.rounding) {
                if (typeof value === "string") {
                    return value;
                }
                return value.id;
            }
            else if (type == ComponentType.singleairline) {
                if (typeof value === "string") {
                    return value;
                }
                if (typeof value.iata === 'undefined') {
                    return '';
                }
                return value.iata;
            }
            else if (type == ComponentType.airline ||
                type == ComponentType.airportRoute) {
                var valueAux = "";
                var i = 0;
                for (var _i = 0, value_4 = value; _i < value_4.length; _i++) {
                    var val = value_4[_i];
                    if (i == 0) {
                        valueAux = val.iata;
                    }
                    else {
                        valueAux += "," + val.iata;
                    }
                    i++;
                }
                return valueAux;
            }
            else if (type == ComponentType.grouping) {
                var valueAux = "";
                var i = 0;
                for (var _a = 0, value_5 = value; _a < value_5.length; _a++) {
                    var val = value_5[_a];
                    if (i == 0) {
                        valueAux = val.id;
                    }
                    else {
                        valueAux += "," + val.id;
                    }
                    i++;
                }
                return valueAux;
            }
            else if (type == ComponentType.aircraftType) {
                var valueAux = "";
                var i = 0;
                for (var _b = 0, value_6 = value; _b < value_6.length; _b++) {
                    var val = value_6[_b];
                    if (i == 0) {
                        valueAux = val.name;
                    }
                    else {
                        valueAux += "," + val.name;
                    }
                    i++;
                }
                return valueAux;
            }
            return value;
        }
    };
    ;
    Utils.prototype.getDateFormat = function (value, format) {
        if (value != null) {
            if (format == null) {
                format = 'MM/dd/yyyy';
            }
            var datePipe = new DatePipe('en-US');
            return datePipe.transform(value, format);
        }
        return value;
    };
    return Utils;
}());
export { Utils };
//# sourceMappingURL=utils.js.map