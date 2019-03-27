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
var MsfUserListComponent = /** @class */ (function () {
    function MsfUserListComponent(http) {
        this.http = http;
        /** control for the selected user */
        this.userCtrl = new FormControl();
        /** control for the MatSelect filter keyword */
        this.userFilterCtrl = new FormControl();
        /** list of users */
        this.users = [];
        /** list of users filtered by search keyword */
        this.filteredSimpleUser = new ReplaySubject(1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
    }
    MsfUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers(null, this.handlerSuccessInit);
        // listen for search field value changes
        this.userFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.filterUsers();
        });
    };
    MsfUserListComponent.prototype.getUsers = function (search, handlerSuccess) {
        var url = this.argument.url + "?search=" + (search != null ? search : '');
        this.http.get(this, url, handlerSuccess, this.handlerError, null);
    };
    MsfUserListComponent.prototype.handlerSuccessInit = function (_this, data, tab) {
        _this.users = data;
        _this.users.push({ id: '', email: 'ALL' });
        _this.filteredSimpleUser.next(_this.users.slice());
        _this.argument.value1 = '';
        _this.userCtrl.setValue('');
    };
    MsfUserListComponent.prototype.handlerSuccess = function (_this, data, tab) {
        _this.users = data;
        _this.filteredSimpleUser.next(_this.users.slice());
    };
    MsfUserListComponent.prototype.handlerError = function (_this, result) {
        _this.globals.isLoading = false;
        console.log(result);
    };
    MsfUserListComponent.prototype.ngAfterViewInit = function () {
    };
    MsfUserListComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MsfUserListComponent.prototype.filterUsers = function () {
        if (!this.users) {
            return;
        }
        // get the search keyword
        var search = this.userFilterCtrl.value;
        if (!search) {
            this.filteredSimpleUser.next(this.users.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the user
        this.getUsers(search, this.handlerSuccess);
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfUserListComponent.prototype, "argument", void 0);
    __decorate([
        ViewChild('userSelect'),
        __metadata("design:type", MatSelect)
    ], MsfUserListComponent.prototype, "usersSelect", void 0);
    MsfUserListComponent = __decorate([
        Component({
            selector: 'app-msf-user-list',
            templateUrl: './msf-user-list.component.html',
            styleUrls: ['./msf-user-list.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient])
    ], MsfUserListComponent);
    return MsfUserListComponent;
}());
export { MsfUserListComponent };
//# sourceMappingURL=msf-user-list.component.js.map