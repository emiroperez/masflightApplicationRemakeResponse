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
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../model/User';
import { UserPlan } from '../model/UserPlan';
import { Utils } from '../commons/utils';
import { UserService } from '../services/user.service';
import { RegisterService } from '../services/register.service';
import { Payment } from '../model/Payment';
import { Globals } from '../globals/Globals';
import { NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
var RegisterComponent = /** @class */ (function () {
    /*  states: State[] = [
       {name: 'California', id: '1'},
       {name: 'Florida', id: '3'},
       {name: 'Texas', id: '2'},
       {name: 'Washington', id: '4'},
     ];
   
     countries: County[] = [
       {name: 'Australia', id: '4'},
       {name: 'Canada', id: '3'},
       {name: 'China', id: '1'},
       {name: 'Russia', id: '2'}
     ]; */
    function RegisterComponent(userServices, registerServices, globals, router) {
        this.userServices = userServices;
        this.registerServices = registerServices;
        this.globals = globals;
        this.router = router;
        this.isLinear = true;
        this.title = 'Personal Information';
        /* nameValidator = new FormControl('name', [Validators.required]);
        lastNameValidator = new FormControl('lastName', [Validators.required]);
        passwordValidator = new FormControl('password', [Validators.required]);
        repeatPasswordValidator = new FormControl('repeatPassword', [Validators.required, RegisterComponent.passwordMatchValidator(this)]);
        emailValidator = new FormControl('email', [Validators.required,Validators.email]);
        addressValidator = new FormControl('address', [Validators.required]);
        countryValidator = new FormControl('country', [Validators.required]);
        stateValidator = new FormControl('state', [Validators.required]);
        postalCodeValidator = new FormControl('postalCode', [Validators.required]);
        phoneNumberValidator = new FormControl('phoneNumber', [Validators.required]);
        cardNumberValidator = new FormControl('cardNumber', [Validators.required]);
        expiryDateValidator = new FormControl('expiryDate', [Validators.required]);
        cvvValidator = new FormControl('cvv', [Validators.required]); */
        this.personalInformationForm = new FormGroup({
            nameValidator: new FormControl('name', [Validators.required]),
            lastNameValidator: new FormControl('lastName', [Validators.required]),
            passwordValidator: new FormControl('password', [Validators.required]),
            repeatPasswordValidator: new FormControl('repeatPassword', [Validators.required, RegisterComponent_1.passwordMatchValidator(this)]),
            emailValidator: new FormControl('email', [Validators.required, Validators.email]),
            addressValidator: new FormControl('address', [Validators.required]),
            countryValidator: new FormControl('country', [Validators.required]),
            stateValidator: new FormControl('state', [Validators.required]),
            postalCodeValidator: new FormControl('postalCode', [Validators.required]),
            phoneNumberValidator: new FormControl('phoneNumber', [Validators.required])
        });
        this.planInformationForm = new FormGroup({
            planValidator: new FormControl('prices', [Validators.required])
        });
        this.paymentInformationForm = new FormGroup({
            paymentTypeValidator: new FormControl('paymentType', [Validators.required]),
            cardNumberValidator: new FormControl('cardNumber', [Validators.required]),
            expiryDateValidator: new FormControl('expiryDate', [Validators.required, RegisterComponent_1.expiriDateValidator(this)]),
            cvvValidator: new FormControl('cvv', [Validators.required])
        });
        this.users = new User(new Payment());
        this.userPlan = new UserPlan();
        this.utils = new Utils();
        this.plans = new Array();
        this.countries = new Array();
        this.states = new Array();
        this.globals.isLoading = true;
        this.registerServices.getCountries(this, this.renderCountries, this.errorCountries);
        this.registerServices.getPlans(this, this.renderPlans, this.errorPlans);
    }
    RegisterComponent_1 = RegisterComponent;
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.selectionChange = function (event) {
        if (event.selectedIndex == 0) {
            this.title = 'Personal Information';
        }
        else if (event.selectedIndex == 1) {
            this.title = 'Membership Plan';
        }
        else if (event.selectedIndex == 2) {
            this.title = 'Payment Method';
        }
    };
    RegisterComponent.prototype.renderPlans = function (_this, data) {
        _this.plans = data;
        _this.globals.isLoading = false;
    };
    RegisterComponent.prototype.errorPlans = function (_this, error) {
        // console.log(error);
        _this.globals.isLoading = false;
    };
    RegisterComponent.prototype.renderCountries = function (_this, data) {
        _this.countries = data;
    };
    RegisterComponent.prototype.errorCountries = function (_this, error) {
        //console.log(error);
    };
    RegisterComponent.prototype.CountryChangeEvent = function (target) {
        this.users.CState = null;
        if (target != undefined) {
            this.states = target.states;
        }
        else {
            this.states = [];
        }
    };
    RegisterComponent.prototype.setPlan = function (plan) {
        this.userPlan.IdPlan = plan;
    };
    RegisterComponent.prototype.getMonthlyValue = function (price, type) {
        if (type == "month") {
            return price;
        }
        else {
            return price / 12;
        }
    };
    RegisterComponent.passwordMatchValidator = function (comp) {
        return function (control) {
            if (comp.users != undefined) {
                return comp.users.password !== control.value ? { mismatch: true } : null;
            }
            else {
                return null;
            }
        };
    };
    RegisterComponent.expiriDateValidator = function (comp) {
        return function (control) {
            if (comp.users != undefined) {
                if (comp.users.payment != undefined) {
                    if (control.value != undefined && control.value.length == 4) {
                        var today = new Date();
                        var inputDate = control.value;
                        var dateString = inputDate.substring(0, 2) + '/01/' + today.getFullYear().toString().substring(0, 2) + inputDate.substring(2, 4);
                        var date = new Date(dateString);
                        return date < today ? { outdate: true } : null;
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        };
    };
    RegisterComponent.prototype.checkEmailValidator = function (email) {
        this.registerServices.checkEmail(this, this.checkEmailResponse, this.errorHandleResponsen, email);
    };
    RegisterComponent.prototype.checkEmailResponse = function (_this, data) {
        if (data) {
            _this.personalInformationForm.get("emailValidator").setErrors({ exists: data });
        }
        else {
            _this.personalInformationForm.get("emailValidator").setErrors(null);
        }
    };
    RegisterComponent.prototype.getErrorNameMessage = function () {
        return this.personalInformationForm.get('nameValidator').hasError('required') ? 'You must enter the name' : '';
    };
    RegisterComponent.prototype.getErrorLastNameMessage = function () {
        return this.personalInformationForm.get('lastNameValidator').hasError('required') ? 'You must enter the last name' : '';
    };
    RegisterComponent.prototype.getErrorPasswordMessage = function () {
        return this.personalInformationForm.get('passwordValidator').hasError('required') ? 'You must enter a password' : '';
    };
    RegisterComponent.prototype.getErrorRepeatPasswordMessage = function () {
        return this.personalInformationForm.get('repeatPasswordValidator').hasError('required') ? 'You must repeat password' : this.personalInformationForm.get('repeatPasswordValidator').hasError('mismatch') ? 'You must enter the same password' : '';
    };
    RegisterComponent.prototype.getErrorEmailMessage = function () {
        return this.personalInformationForm.get('emailValidator').hasError('required') ? 'You must enter an e-mail' : '';
    };
    RegisterComponent.prototype.getErrorFormatEmailMessage = function () {
        return this.personalInformationForm.get('emailValidator').hasError('email') ? 'Bad format e-mail' : '';
    };
    RegisterComponent.prototype.getErrorEmaiExistlMessage = function () {
        return this.personalInformationForm.get('emailValidator').hasError('exists') ? 'E-mail already exists' : '';
    };
    RegisterComponent.prototype.getErrorAddressMessage = function () {
        return this.personalInformationForm.get('addressValidator').hasError('required') ? 'You must enter an address' : '';
    };
    RegisterComponent.prototype.getErrorCountryMessage = function () {
        return this.personalInformationForm.get('countryValidator').hasError('required') ? 'You must select a country' : '';
    };
    RegisterComponent.prototype.getErrorStateMessage = function () {
        return this.personalInformationForm.get('stateValidator').hasError('required') ? 'You must select a state' : '';
    };
    RegisterComponent.prototype.getErrorPostalCodeMessage = function () {
        return this.personalInformationForm.get('postalCodeValidator').hasError('required') ? 'You must enter a postal code' : '';
    };
    RegisterComponent.prototype.getErrorPhoneNumberMessage = function () {
        return this.personalInformationForm.get('phoneNumberValidator').hasError('required') ? 'You must enter a phone number' : '';
    };
    RegisterComponent.prototype.getErrorCardNumberMessage = function () {
        return this.paymentInformationForm.get('cardNumberValidator').hasError('required') ? 'You must enter the card number' : '';
    };
    RegisterComponent.prototype.getErrorExpiryDateMessage = function () {
        return this.paymentInformationForm.get('expiryDateValidator').hasError('required') ? 'You must enter the expiry date' : this.paymentInformationForm.get('expiryDateValidator').hasError('outdate') ? 'You must enter a correct expiry date' : '';
    };
    RegisterComponent.prototype.getErrorCvvMessage = function () {
        return this.paymentInformationForm.get('cvvValidator').hasError('required') ? 'You must enter the cvv' : '';
    };
    RegisterComponent.prototype.successHandleResponse = function (_this, data) {
        //console.log(data);
    };
    RegisterComponent.prototype.errorHandleResponsen = function () {
    };
    RegisterComponent.prototype.insertUser = function () {
        if (this.personalInformationForm.valid && this.planInformationForm.valid && this.paymentInformationForm.valid) {
            this.userPlan.IdUser = this.users;
            this.userPlan.planPayment = this.users.payment;
            this.userServices.saveUser(this, this.userPlan, this.saveUserHandleResponse, this.errorHandleResponsen);
        }
        else {
            console.log('no valid Form');
        }
    };
    RegisterComponent.prototype.saveUserHandleResponse = function (this_, data) {
        this_.utils.showAlert('info', 'User Created Succesfully');
        //this_.router.navigate(['']);
    };
    RegisterComponent.prototype.getOptionsText = function (options) {
        var text = "";
        var i = 0;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            if (i == 0) {
                text += ' ' + option.optionName;
            }
            else if (i === options.length - 1) {
                text += ' and ' + option.optionName;
            }
            else {
                text += ', ' + option.optionName;
            }
            i++;
        }
        return text;
    };
    RegisterComponent.prototype.getPeriodicityText = function (periodicity) {
        if (periodicity === 'M') {
            return 'MONTH';
        }
        return 'YEAR';
    };
    RegisterComponent = RegisterComponent_1 = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            providers: [
                {
                    provide: NG_SELECT_DEFAULT_CONFIG,
                    useValue: {
                        notFoundText: 'There is no options'
                    }
                }
            ]
        }),
        __metadata("design:paramtypes", [UserService, RegisterService, Globals, Router])
    ], RegisterComponent);
    return RegisterComponent;
    var RegisterComponent_1;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map