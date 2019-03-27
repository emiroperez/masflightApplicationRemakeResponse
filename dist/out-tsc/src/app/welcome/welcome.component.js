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
import { WelcomeService } from '../services/welcome.service';
import { Router } from '@angular/router';
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(globals, service, router) {
        this.globals = globals;
        this.service = service;
        this.router = router;
        this.options = [];
        this.options2 = [];
        this.activeElement = 'Landing';
        this.customer = {
            name: 'Emiro Perez',
            lastSession: 'July 12, 2018',
            overview: {
                since: '12/14/2011',
                plan: 'Administrator',
                username: 'admin',
                email: 'emiro.perez@aspsols.com',
                expDate: '12/14/3011(over 994 year)',
                company: 'Jet Blue',
                jobTitle: '',
                website: 'none',
                phone: 'none',
                querySaved: '99 left',
                resultsSaved: '99 left',
            },
            lastestQueries: [
                {
                    name: 'Full Reports(234)',
                    date: 'July 10,2018 16:48',
                },
                {
                    name: 'Full Reports(234)',
                    date: 'July 10,2018 16:48',
                },
                {
                    name: 'Full Reports(234)',
                    date: 'July 10,2018 16:48',
                },
                {
                    name: 'Full Reports(234)',
                    date: 'July 10,2018 16:48',
                },
                {
                    name: 'Full Reports(234)',
                    date: 'July 10,2018 16:48',
                }
            ],
            SavedQueries: [
                {
                    name: 'IAD-Marchist',
                    date: 'July 10,2018 16:48',
                    desc: 'Daily Statistics'
                }
            ]
        };
    }
    WelcomeComponent.prototype.setState = function (option) {
        this.activeElement = option;
    };
    ;
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getApplications();
    };
    WelcomeComponent.prototype.ngAfterViewInit = function () {
    };
    WelcomeComponent.prototype.getApplications = function () {
        this.service.getApplications(this, this.handlerSuccess, this.handlerError);
    };
    WelcomeComponent.prototype.handlerSuccess = function (_this, data) {
        _this.options = data;
        _this.options2 = data.slice();
        _this.options.unshift({ id: 0,
            name: "Landing",
            url: "/welcome" });
        _this.activeElement = _this.options[0];
        _this.globals.isLoading = false;
    };
    WelcomeComponent.prototype.handlerError = function (_this, result) {
        console.log(result);
        _this.globals.isLoading = false;
    };
    WelcomeComponent.prototype.goTo = function (option) {
        this.globals.currentApplication = option;
        localStorage.setItem("currentApplication", JSON.stringify(this.globals.currentApplication));
        this.router.navigate([option.url]);
    };
    WelcomeComponent = __decorate([
        Component({
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.css']
        }),
        __metadata("design:paramtypes", [Globals, WelcomeService, Router])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
export { WelcomeComponent };
//# sourceMappingURL=welcome.component.js.map