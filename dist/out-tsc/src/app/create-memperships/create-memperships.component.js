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
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Globals } from '../globals/Globals';
import { Utils } from '../commons/utils';
import { Plan } from '../model/Plan';
import { PlanFeature } from "../model/PlanFeature";
import { PlanFeatureOption } from "../model/PlanFeatureOption";
import { PlanPrice } from "../model/PlanPrice";
import { PlanService } from '../services/plan.service';
import { NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
var CreateMempershipsComponent = /** @class */ (function () {
    function CreateMempershipsComponent(planServices, globals, formBuilder) {
        this.planServices = planServices;
        this.globals = globals;
        this.formBuilder = formBuilder;
        this.periodicities = [
            { label: 'Month', code: 'M' },
            { label: 'Year', code: 'Y' }
        ];
        this.utils = new Utils();
    }
    CreateMempershipsComponent.prototype.ngOnInit = function () {
        this.plansForms = this.formBuilder.group({
            items: this.formBuilder.array([])
        });
    };
    CreateMempershipsComponent.prototype.getPlans = function () {
        this.items = this.plansForms.get('items');
        return this.items.controls;
    };
    CreateMempershipsComponent.prototype.createPlan = function () {
        return this.formBuilder.group({
            name: new FormControl('', [Validators.required]),
            id: '',
            features: this.formBuilder.array([this.createFeature()]),
            fares: this.formBuilder.array([this.createPrice()]),
            deleted: false
        });
    };
    CreateMempershipsComponent.prototype.addNewPlan = function () {
        this.items = this.plansForms.get('items');
        this.items.push(this.createPlan());
    };
    CreateMempershipsComponent.prototype.deletePlan = function (index) {
        this.items = this.plansForms.get('items');
        if (this.items.at(index).get('id').value != '') {
            this.items.removeAt(index);
        }
        else {
            this.items.at(index).get('deleted').setValue(true);
        }
    };
    CreateMempershipsComponent.prototype.isPlanDelete = function (index) {
        this.items = this.plansForms.get('items');
        //console.log(this.items.at(index).get('deleted').value);
        return !(this.items.at(index).get('deleted').value);
    };
    CreateMempershipsComponent.prototype.getPlansJson = function () {
        var plansJsons = new Array();
        this.items = this.plansForms.get('items');
        for (var i = 0; i < this.items.length; i++) {
            var plan = new Plan();
            if (this.items.at(i).get("id").value != '') {
                plan.id = this.items.at(i).get("id").value;
                plan.delete = this.items.at(i).get("deleted").value;
            }
            else {
                plan.id = null;
                plan.delete = false;
            }
            plan.name = this.items.at(i).get("name").value.toUpperCase();
            plan.features = this.getFeaturesJson(i);
            plan.fares = this.getPricesJson(i);
            plansJsons.push(plan);
        }
        return plansJsons;
    };
    CreateMempershipsComponent.prototype.getPlanFeatures = function (index) {
        this.items = this.plansForms.get('items');
        this.features = this.items.controls[index]['controls']['features']['controls'];
        return this.features;
    };
    CreateMempershipsComponent.prototype.createFeature = function () {
        return this.formBuilder.group({
            id: '',
            name: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            deleted: false
        });
    };
    CreateMempershipsComponent.prototype.addNewFeature = function (index) {
        this.items = this.plansForms.get('items');
        this.features = this.items.controls[index]['controls']['features'];
        this.features.push(this.createFeature());
    };
    CreateMempershipsComponent.prototype.deleteFeature = function (indexPlan, indexFeature) {
        this.items = this.plansForms.get('items');
        this.features = this.items.controls[indexPlan]['controls']['features'];
        if (this.features.at(indexFeature).get('id').value == '') {
            this.features.removeAt(indexFeature);
        }
        else {
            this.features.at(indexFeature).get('deleted').setValue(true);
        }
    };
    CreateMempershipsComponent.prototype.isFeatureDelete = function (indexPlan, indexFeature) {
        this.items = this.plansForms.get('items');
        this.features = this.items.controls[indexPlan]['controls']['features'];
        //console.log(this.features.at(indexFeature).get('deleted').value);
        return !(this.features.at(indexFeature).get('deleted').value);
    };
    CreateMempershipsComponent.prototype.getFeaturesJson = function (index) {
        this.items = this.plansForms.get('items');
        this.features = this.items.controls[index]['controls']['features'];
        var featuresJson = new Array();
        for (var i = 0; i < this.features.length; i++) {
            var feature = new PlanFeature();
            if (this.features.at(i).get("id").value != '') {
                feature.id = this.features.at(i).get("id").value;
                feature.delete = this.features.at(i).get("deleted").value;
            }
            else {
                feature.id = null;
                feature.delete = false;
            }
            feature.features = this.features.at(i).get("name").value;
            feature.options = this.getFeatureOptions(this.features.at(i).get("description").value);
            featuresJson.push(feature);
        }
        return featuresJson;
    };
    CreateMempershipsComponent.prototype.getFeatureOptions = function (options) {
        var optionsArray = options.split(",");
        var planFeatureOptions = new Array();
        optionsArray.forEach(function (option) {
            var featureOption = new PlanFeatureOption();
            featureOption.optionName = option;
            planFeatureOptions.push(featureOption);
        });
        return planFeatureOptions;
    };
    CreateMempershipsComponent.prototype.getPlanPrices = function (index) {
        this.items = this.plansForms.get('items');
        this.prices = this.items.controls[index]['controls']['fares']['controls'];
        return this.prices;
    };
    CreateMempershipsComponent.prototype.createPrice = function () {
        return this.formBuilder.group({
            id: '',
            fare: new FormControl('', [Validators.required]),
            periodicity: new FormControl(null, [Validators.required]),
            deleted: false
        });
    };
    CreateMempershipsComponent.prototype.addNewPrice = function (index) {
        this.items = this.plansForms.get('items');
        this.prices = this.items.controls[index]['controls']['fares'];
        this.prices.push(this.createPrice());
    };
    CreateMempershipsComponent.prototype.deletePrice = function (indexPlan, indexFare) {
        this.items = this.plansForms.get('items');
        this.prices = this.items.controls[indexPlan]['controls']['fares'];
        if (this.prices.at(indexFare).get('id').value == '') {
            this.prices.removeAt(indexFare);
        }
        else {
            this.prices.at(indexFare).get('deleted').setValue(true);
        }
    };
    CreateMempershipsComponent.prototype.isFareDelete = function (indexPlan, indexFare) {
        this.items = this.plansForms.get('items');
        this.features = this.items.controls[indexPlan]['controls']['fares'];
        //console.log(this.features.at(indexFare).get('deleted').value);
        return !(this.features.at(indexFare).get('deleted').value);
    };
    CreateMempershipsComponent.prototype.getPricesJson = function (index) {
        this.items = this.plansForms.get('items');
        this.prices = this.items.controls[index]['controls']['fares'];
        var pricesJson = new Array();
        for (var i = 0; i < this.prices.length; i++) {
            var fare = new PlanPrice();
            if (this.prices.at(i).get("id").value != '') {
                fare.id = this.prices.at(i).get("id").value;
                fare.delete = this.prices.at(i).get("deleted").value;
            }
            else {
                fare.id = null;
                fare.delete = false;
            }
            fare.fare = this.prices.at(i).get("fare").value;
            fare.periodicity = this.prices.at(i).get("periodicity").value;
            pricesJson.push(fare);
        }
        return pricesJson;
    };
    CreateMempershipsComponent.prototype.getOptionsText = function (options) {
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
    CreateMempershipsComponent.prototype.getPeriodicityText = function (periodicity) {
        if (periodicity === 'M') {
            return 'MONTH';
        }
        return 'YEAR';
    };
    CreateMempershipsComponent.prototype.savePlans = function () {
        this.items = this.plansForms.get('items');
        if (this.plansForms.valid && this.items.length > 0) {
            this.planServices.savePlans(this, this.getPlansJson(), this.savePlansResponse, this.errorHandleResponse);
        }
    };
    CreateMempershipsComponent.prototype.savePlansResponse = function (this_, data) {
        console.log(data);
        this_.deleteRemoveItems(this_);
        this_.items = this_.plansForms.get('items');
        for (var i = 0; i < this_.items.length; i++) {
            this_.items.at(i).get("id").value = data[i].id;
            this_.prices = this_.items.controls[i]['controls']['fares'];
            for (var j = 0; j < this_.prices.length; j++) {
                this_.prices.at(j).get("id").value = data[i].fares[j].id;
            }
            this_.features = this_.items.controls[i]['controls']['features'];
            for (var j = 0; j < this_.features.length; j++) {
                this_.features.at(j).get("id").value = data[i].features[j].id;
            }
        }
        console.log(this_.items);
    };
    CreateMempershipsComponent.prototype.errorHandleResponse = function () {
    };
    CreateMempershipsComponent.prototype.deleteRemoveItems = function (this_) {
        this_.items = this_.plansForms.get('items');
        for (var i = 0; i < this_.items.length; i++) {
            if (this_.items.at(i).get("deleted").value == true) {
                this_.items.removeAt(i);
            }
            else {
                this_.prices = this_.items.controls[i]['controls']['fares'];
                for (var j = 0; j < this_.prices.length; j++) {
                    if (this_.prices.at(j).get("deleted").value == true) {
                        this_.prices.removeAt(j);
                    }
                }
                this_.features = this_.items.controls[i]['controls']['features'];
                for (var j = 0; j < this_.features.length; j++) {
                    if (this_.features.at(j).get("deleted").value == true) {
                        this_.features.removeAt(j);
                    }
                }
            }
        }
    };
    CreateMempershipsComponent = __decorate([
        Component({
            selector: 'app-create-memperships',
            templateUrl: './create-memperships.component.html',
            providers: [
                {
                    provide: NG_SELECT_DEFAULT_CONFIG,
                    useValue: {
                        notFoundText: 'There is no options'
                    }
                }
            ]
        }),
        __metadata("design:paramtypes", [PlanService, Globals, FormBuilder])
    ], CreateMempershipsComponent);
    return CreateMempershipsComponent;
}());
export { CreateMempershipsComponent };
//# sourceMappingURL=create-memperships.component.js.map