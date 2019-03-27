var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { Arguments } from '../model/Arguments';
import { MatSelect } from '@angular/material';
import { ApiClient } from '../api/api-client';
var MsfRoundingComponent = /** @class */ (function () {
    function MsfRoundingComponent(http) {
        this.http = http;
        // public roundingCtrl: FormControl = new FormControl();
        // public roundingFilterCtrl: FormControl = new FormControl();
        this.roundingList = [
            { id: 0, name: '0 Digits (n)' },
            { id: 1, name: '1 Digits (n.d)' },
            { id: 2, name: '2 Digits (n.dd)' },
            { id: 3, name: '3 Digits (n.ddd)' }
        ];
        // private _onDestroy = new Subject<void>();
        this.loading = false;
    }
    MsfRoundingComponent.prototype.ngOnInit = function () {
        this.argument.value1 = { id: 2, name: '2 Digits (n.dd)' };
        // this.filteredRounding.next(this.roundingList.slice());
        // this.roundingFilterCtrl.valueChanges
        //   .pipe(takeUntil(this._onDestroy))
        //   .subscribe(() =>{
        //     this.filterRounding();
        //   });
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfRoundingComponent.prototype, "argument", void 0);
    __decorate([
        ViewChild('roundingSelect'),
        __metadata("design:type", MatSelect)
    ], MsfRoundingComponent.prototype, "roundingSelect", void 0);
    MsfRoundingComponent = __decorate([
        Component({
            selector: 'app-msf-rounding',
            templateUrl: './msf-rounding.component.html',
            styleUrls: ['./msf-rounding.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient])
    ], MsfRoundingComponent);
    return MsfRoundingComponent;
}());
export { MsfRoundingComponent };
//# sourceMappingURL=msf-rounding.component.js.map