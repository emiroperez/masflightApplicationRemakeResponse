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
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
var MsfTailNumberComponent = /** @class */ (function () {
    function MsfTailNumberComponent() {
        this.tailNumberCtrl = new FormControl();
        this.tailNumberFilterCtrl = new FormControl();
        this.tailNumbers = [
            { name: 'N300AU US Boeing 737-3001 ', id: 'N300AU' },
            { name: 'N103US US Airbus A320-214', id: 'N103US' },
            { name: 'HBIOZ', id: 'HBIOZ' },
            { name: 'N691AA', id: 'N691AA' },
            { name: 'N587AA', id: 'N587AA' },
            { name: 'N620AA', id: 'N620AA' },
            { name: 'N558AA', id: 'N558AA' },
            { name: 'N820NN', id: 'N820NN' },
            { name: 'N942AN', id: 'N942AN' },
            { name: 'N186AN', id: 'N186AN' },
            { name: 'N9618A', id: 'N9618A' },
            { name: 'N9677W', id: 'N9677W' },
            { name: 'N970AN', id: 'N970AN' },
            { name: 'N608AA', id: 'N608AA' },
            { name: 'N817NN', id: 'N817NN' },
            { name: 'N696AN', id: 'N696AN' },
            { name: 'N992AN', id: 'N992AN' },
            { name: 'N380AN', id: 'N380AN' }
        ];
        this.filteredTailNumbers = new ReplaySubject(1);
        this._onDestroy = new Subject();
    }
    MsfTailNumberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input("argument"),
        __metadata("design:type", Arguments)
    ], MsfTailNumberComponent.prototype, "argument", void 0);
    __decorate([
        ViewChild('tailNumberSelect'),
        __metadata("design:type", MatSelect)
    ], MsfTailNumberComponent.prototype, "tailNumberSelect", void 0);
    MsfTailNumberComponent = __decorate([
        Component({
            selector: 'app-msf-tail-number',
            templateUrl: './msf-tail-number.component.html',
            styleUrls: ['./msf-tail-number.component.css']
        })
    ], MsfTailNumberComponent);
    return MsfTailNumberComponent;
}());
export { MsfTailNumberComponent };
//# sourceMappingURL=msf-tail-number.component.js.map