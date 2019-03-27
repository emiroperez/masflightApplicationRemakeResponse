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
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationComponent } from '../notification/notification.component';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { Utils } from '../commons/utils';
var LoginScreenComponent = /** @class */ (function () {
    function LoginScreenComponent(router, authService, notification) {
        this.router = router;
        this.authService = authService;
        this.notification = notification;
        this.LOGIN_URL = "/login/";
        this.OK_STATUS = "ok";
        this.INVALID_USERNAME = "invaliduser";
        this.credentials = {};
        this.authenticated = false;
        this._this = this;
        this.usernameValidator = new FormControl('username', [Validators.required]);
        this.passwordValidator = new FormControl('username', [Validators.required]);
        this.user = new User(null);
        this.utils = new Utils();
    }
    LoginScreenComponent.prototype.getErrorUsernameMessage = function () {
        return this.usernameValidator.hasError('required') ? 'You must enter a username' : '';
    };
    LoginScreenComponent.prototype.getErrorPasswordMessage = function () {
        return this.passwordValidator.hasError('required') ? 'You must enter a password' : '';
    };
    LoginScreenComponent.prototype.storeSecurityToken = function (token) {
        window.localStorage.setItem("token", token);
    };
    LoginScreenComponent.prototype.handleResponse = function (_this, data) {
        var response = data;
        if (response.status == _this.OK_STATUS) {
            _this.userId = response.userId;
            if (response.token != null) {
                _this.storeSecurityToken(response.token);
                _this.username = response.username;
                _this.authenticated = true;
            }
            _this.router.navigate(['/welcome']);
        }
        else {
            _this.utils.showAlert('warning', data.errorMessage);
            _this.credentials = {};
        }
    };
    LoginScreenComponent.prototype.errorAutentication = function (_this, data) {
    };
    LoginScreenComponent.prototype.login = function () {
        if (this.utils.isEmpty(this.user.username)) {
            this.utils.showAlert('warning', 'Invalid User Name');
            return;
        }
        if (this.utils.isEmpty(this.user.password)) {
            this.utils.showAlert('warning', 'Invalid Password');
            return;
        }
        var encodedObj = this.encodeCredentials();
        this.authService.login(this, encodedObj, this.handleResponse, this.errorAutentication);
    };
    LoginScreenComponent.prototype.encodeCredentials = function () {
        var encoded = {};
        encoded['id'] = window.btoa(this.user.username);
        encoded['pd'] = window.btoa(this.user.password);
        return encoded;
    };
    LoginScreenComponent.prototype.ngOnInit = function () {
    };
    LoginScreenComponent = __decorate([
        Component({
            selector: 'app-login-screen',
            templateUrl: './login-screen.component.html'
        }),
        __metadata("design:paramtypes", [Router, AuthService, NotificationComponent])
    ], LoginScreenComponent);
    return LoginScreenComponent;
}());
export { LoginScreenComponent };
//# sourceMappingURL=login-screen.component.js.map