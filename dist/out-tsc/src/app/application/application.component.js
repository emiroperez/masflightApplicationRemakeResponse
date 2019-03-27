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
import { Globals } from '../globals/Globals';
import { MatDialog } from '@angular/material';
import { MsfDynamicTableVariablesComponent } from '../msf-dynamic-table-variables/msf-dynamic-table-variables.component';
import { MsfContainerComponent } from '../msf-container/msf-container.component';
import { MenuService } from '../services/menu.service';
var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(dialog, globals, service) {
        this.dialog = dialog;
        this.globals = globals;
        this.service = service;
        this.status = true;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    ApplicationComponent.prototype.getMenu = function () {
        this.service.getMenu(this, this.handlerSuccess, this.handlerError);
    };
    ApplicationComponent.prototype.handlerSuccess = function (_this, data) {
        _this.menu = data;
        _this.globals.isLoading = false;
    };
    ApplicationComponent.prototype.handlerError = function (_this, result) {
        console.log(result);
        _this.globals.isLoading = false;
    };
    ApplicationComponent.prototype.toogle = function () {
        this.status = !this.status;
        if (!this.status && this.globals.currentAgts) {
            this.globals.currentAgts.open = false;
        }
        if (this.status && this.globals.currentAgts) {
            this.globals.currentAgts.open = true;
        }
    };
    ApplicationComponent.prototype.search = function () {
        this.globals.moreResults = false;
        if (this.globals.currentOption.tabType === 'map') {
            this.globals.map = true;
            this.msfContainerRef.msfMapRef.getTrackingDataSource();
        }
        else if (this.globals.currentOption.tabType === 'usageStatistics') {
            this.msfContainerRef.msfTableRef.getDataUsageStatistics();
        }
        else {
            this.msfContainerRef.msfTableRef.getData(false);
        }
    };
    ApplicationComponent.prototype.moreResults = function () {
        if (this.globals.currentOption.tabType === 'map') {
            this.globals.map = true;
            this.msfContainerRef.msfMapRef.getTrackingDataSource();
        }
        else if (this.globals.currentOption.tabType === 'usageStatistics') {
            this.msfContainerRef.msfTableRef.getDataUsageStatistics();
        }
        else {
            this.msfContainerRef.msfTableRef.getData(true);
        }
    };
    ApplicationComponent.prototype.disabled = function () {
        var option = this.globals.currentOption;
        var disabled = false;
        if (option && option.menuOptionArguments) {
            for (var _i = 0, _a = option.menuOptionArguments; _i < _a.length; _i++) {
                var menuOptionArguments = _a[_i];
                if (menuOptionArguments.categoryArguments) {
                    if (menuOptionArguments.categoryArguments) {
                        for (var i = 0; i < menuOptionArguments.categoryArguments.length; i++) {
                            var category = menuOptionArguments.categoryArguments[i];
                            if (category && category.arguments) {
                                for (var j = 0; j < category.arguments.length; j++) {
                                    var argument = category.arguments[j];
                                    if (argument.required) {
                                        if (argument.value1 == null || (argument.name2 && argument.value2 == null)) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return disabled;
    };
    ApplicationComponent.prototype.openChart = function () {
        this.globals.chart = !this.globals.chart;
        this.globals.selectedIndex = 3;
    };
    ApplicationComponent.prototype.dynamicTable = function () {
        this.openDialog();
    };
    ApplicationComponent.prototype.openDialog = function () {
        var _this = this;
        this.globals.generateDynamicTable = true;
        var dialogRef = this.dialog.open(MsfDynamicTableVariablesComponent, {
            width: '600px',
            data: { metadata: this.msfContainerRef.msfTableRef.metadata, variables: this.variables }
        });
        var sub = dialogRef.componentInstance.dynamicTableOpen.subscribe(function () {
            _this.msfContainerRef.msfDynamicTableRef.loadData();
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    __decorate([
        ViewChild('msfContainerRef'),
        __metadata("design:type", MsfContainerComponent)
    ], ApplicationComponent.prototype, "msfContainerRef", void 0);
    ApplicationComponent = __decorate([
        Component({
            selector: 'app-application',
            templateUrl: './application.component.html',
            styleUrls: ['./application.component.css']
        }),
        __metadata("design:paramtypes", [MatDialog, Globals, MenuService])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
export { ApplicationComponent };
//# sourceMappingURL=application.component.js.map