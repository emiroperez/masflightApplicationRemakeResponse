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
import { Arguments } from '../model/Arguments';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { ApiClient } from '../api/api-client';
var MsfOptionListComponent = /** @class */ (function () {
    function MsfOptionListComponent(http) {
        this.http = http;
        /** control for the selected option */
        this.optionsCtrl = new FormControl();
        /** control for the MatSelect filter keyword */
        this.optionFilterCtrl = new FormControl();
        /** list of options */
        this.options = [];
        /** list of options filtered by search keyword */
        this.filteredSimpleOptions = new ReplaySubject(1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
    }
    MsfOptionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOptions(null, this.handlerSuccessInit);
        // listen for search field value changes
        this.optionFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.filterOptions();
        });
    };
    MsfOptionListComponent.prototype.getOptions = function (search, handlerSuccess) {
        var url = this.argument.url + "?search=" + (search != null ? search : '');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfOptionListComponent.prototype.handlerSuccessInit = function (_this, data, tab) {
        _this.options = data;
        _this.options.push({ id: '', name: 'ALL' });
        _this.filteredSimpleOptions.next(_this.options.slice());
        _this.argument.value1 = '';
        _this.optionsCtrl.setValue('');
    };
    MsfOptionListComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.options = data;
        _this.filteredSimpleOptions.next(_this.options.slice());
    };
    MsfOptionListComponent.prototype.handlerError = function (_this, result) {
        _this.globals.isLoading = false;
        console.log(result);
    };
    MsfOptionListComponent.prototype.ngAfterViewInit = function () {
    };
    MsfOptionListComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MsfOptionListComponent.prototype.filterOptions = function () {
        if (!this.options) {
            return;
        }
        // get the search keyword
        var search = this.optionFilterCtrl.value;
        if (!search) {
            this.filteredSimpleOptions.next(this.options.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the option
        this.getOptions(search, this.handlerSuccess);
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfOptionListComponent.prototype, "argument", void 0);
    __decorate([
        ViewChild('optionSelect'),
        __metadata("design:type", MatSelect)
    ], MsfOptionListComponent.prototype, "optionSelect", void 0);
    MsfOptionListComponent = __decorate([
        Component({
            selector: 'app-msf-option-list',
            templateUrl: './msf-option-list.component.html',
            styleUrls: ['./msf-option-list.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient])
    ], MsfOptionListComponent);
    return MsfOptionListComponent;
}());
export { MsfOptionListComponent };
//# sourceMappingURL=msf-option-list.component.js.map