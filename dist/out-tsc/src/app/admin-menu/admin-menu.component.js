var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';
import { ApplicationService } from '../services/application.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var EditCategoryArgumentDialog = /** @class */ (function () {
    function EditCategoryArgumentDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.itemSelected = {};
        this.argumentSelected = {};
        this.selectedCategories = [];
        this.displayedColumns = ['label1', 'label2', 'name1', 'name2'];
    }
    EditCategoryArgumentDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditCategoryArgumentDialog.prototype.selectArgumentCategory = function (category) {
        if (this.itemSelected != category) {
            category.isSelected = !category.isSelected;
            this.itemSelected.isSelected = !this.itemSelected.isSelected;
            this.itemSelected = category;
        }
        else {
            category.isSelected = !category.isSelected;
            this.itemSelected = {};
        }
    };
    EditCategoryArgumentDialog.prototype.setSelectedCategoryArguments = function (category) {
        if (category.isSelected) {
            this.selectedCategories.forEach(function (currentValue, index, array) {
                if (currentValue == category) {
                    array.splice(index, 1);
                }
            });
        }
        else {
            this.selectedCategories.push(category);
        }
        category.isSelected = !category.isSelected;
    };
    EditCategoryArgumentDialog.prototype.addCategoryArgument = function () {
        var node = {
            "selected": true,
            "label": null,
            "icon:": null,
            "arguments": []
        };
        this.data.push(node);
    };
    EditCategoryArgumentDialog.prototype.deleteCategoryArgument = function () {
        var filterSelected = this.data.filter(function (item) { return item.isSelected; });
        for (var i = 0; i < filterSelected.length; i += 1) {
            this.selectedCategories.forEach(function (currentValue, index, array) {
                if (currentValue == filterSelected[i]) {
                    array.splice(index, 1);
                }
            });
        }
        filterSelected.forEach(function (item, index, array) {
            item.toDelete = true;
        });
    };
    EditCategoryArgumentDialog.prototype.toggleGroup = function (item) {
        item.isOpened = !item.isOpened;
    };
    EditCategoryArgumentDialog.prototype.addArgument = function (item) {
        var node = {
            "isSelected": false,
            "toDelete": false
        };
        item.arguments.push(node);
    };
    EditCategoryArgumentDialog.prototype.deleteArgument = function (item) {
        /*
        let filterSelected = item.arguments.filter(node => node.isSelected);
        filterSelected.forEach(function (node, index, array) {
          node.toDelete = true;
        });
        */
        item.toDelete = true;
    };
    EditCategoryArgumentDialog.prototype.setSelectedAgument = function (item) {
        if (item == this.argumentSelected) {
            this.argumentSelected.isSelected = false;
            this.argumentSelected = {};
        }
        else {
            this.argumentSelected = item;
            this.argumentSelected.isSelected = true;
        }
    };
    EditCategoryArgumentDialog = __decorate([
        Component({
            selector: 'dialog-overview-example-dialog',
            templateUrl: 'dialog-edit-argument-category.html',
            styleUrls: ['./admin-menu.component.css']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object])
    ], EditCategoryArgumentDialog);
    return EditCategoryArgumentDialog;
}());
export { EditCategoryArgumentDialog };
var AdminMenuComponent = /** @class */ (function () {
    function AdminMenuComponent(http, globals, service, snackBar, dialog) {
        this.http = http;
        this.globals = globals;
        this.service = service;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.menu = [];
        this.categoryArguments = [];
        this.categories = [];
        this.optionSelected = {};
        this.categorySelected = {};
        this.categoryArgumentSelected = {};
    }
    AdminMenuComponent.prototype.ngOnInit = function () {
        this.getMenuData();
        this.getCategoryArguments();
    };
    AdminMenuComponent.prototype.getCategoryArguments = function () {
        this.service.loadCategoryArguments(this, this.handlerSuccessCategoryArguments, this.handlerErrorCategoryArguments);
    };
    AdminMenuComponent.prototype.handlerSuccessCategoryArguments = function (_this, result) {
        _this.categories = result;
        if (_this.optionSelected.id) {
            _this.getOptionCategoryArguments(_this.optionSelected);
        }
    };
    AdminMenuComponent.prototype.handlerErrorCategoryArguments = function (_this, result) {
        console.log(result);
    };
    AdminMenuComponent.prototype.getOptionSelected = function (option) {
        this.categoryArguments = [];
        this.clearSelectedCategoryArguments();
        if (this.optionSelected == option) {
            this.optionSelected.isActive = false;
            this.optionSelected = {};
        }
        else {
            this.optionSelected.isActive = false;
            option.isActive = option.isActive == null ? true : !option.isActive;
            this.optionSelected = option;
            if (!option.root && option.id) {
                this.getOptionCategoryArguments();
            }
            console.log("was selected: " + option.label);
        }
    };
    AdminMenuComponent.prototype.getSelectCategoryArgument = function (category) {
        if (this.categoryArgumentSelected.id == category.categoryArgumentsId.id) {
            this.categoryArgumentSelected = {};
        }
        else {
            this.categoryArgumentSelected = category;
        }
        console.log("was selected: " + category.categoryArgumentsId.label);
    };
    AdminMenuComponent.prototype.clearSelectedCategoryArguments = function () {
        this.categories.forEach(function (itemCategory, indexCategory, arrayCategory) {
            itemCategory.selected = false;
        });
    };
    AdminMenuComponent.prototype.getOptionCategoryArguments = function () {
        this.service.loadOptionCategoryArguments(this, this.optionSelected, this.handlerSuccessOptionCategoryArguments, this.handlerErrorOptionCategoryArguments);
    };
    AdminMenuComponent.prototype.handlerSuccessOptionCategoryArguments = function (_this, result) {
        _this.clearSelectedCategoryArguments();
        _this.categoryArguments = result;
        _this.categoryArguments.forEach(function (itemOptionCategory, indexOptionCategory, arrayOptionCategory) {
            _this.categories.forEach(function (itemCategory, indexCategory, arrayCategory) {
                if (itemOptionCategory.categoryArgumentsId.id == itemCategory.id) {
                    itemCategory.selected = true;
                }
            });
        });
        _this.globals.isLoading = false;
    };
    AdminMenuComponent.prototype.handlerErrorOptionCategoryArguments = function (_this, result) {
        //_this.globals.isLoading = false;
    };
    AdminMenuComponent.prototype.addOption = function () {
        var newNode = {
            "label": null,
            "baseUrl": null,
            "icon": null,
            "tab": null,
            "tabType": null,
            "parentId": null,
            "children": [],
            "toDelete": false
        };
        if (this.optionSelected.label != null) {
            this.optionSelected.isOpened = true;
            this.optionSelected.children.unshift(newNode);
        }
        else {
            this.menu.unshift(newNode);
        }
    };
    AdminMenuComponent.prototype.deleteOption = function () {
        if (this.optionSelected) {
            this.optionSelected.toDelete = true;
        }
    };
    AdminMenuComponent.prototype.saveMenu = function () {
        console.log(this.menu);
        this.service.saveMenu(this, this.menu, this.handlerSuccessSaveMenuData, this.handlerErrorSaveMenuData);
    };
    AdminMenuComponent.prototype.handlerSuccessSaveMenuData = function (_this, data) {
        _this.getMenuData();
    };
    AdminMenuComponent.prototype.handlerErrorSaveMenuData = function (_this, data) {
        console.log(data);
        _this.getMenuData();
    };
    AdminMenuComponent.prototype.getMenuData = function () {
        this.service.loadMenuOptions(this, this.handlerGetSuccessMenuData, this.handlerGetErrorMenuData);
        this.optionSelected = {};
    };
    AdminMenuComponent.prototype.handlerGetSuccessMenuData = function (_this, data) {
        _this.menu = data;
        _this.globals.isLoading = false;
    };
    AdminMenuComponent.prototype.handlerGetErrorMenuData = function (_this, result) {
        console.log(result);
        _this.globals.isLoading = false;
    };
    AdminMenuComponent.prototype.setSelectedCategoryArguments = function (category) {
        category.selected = !category.selected;
    };
    AdminMenuComponent.prototype.addCategoryArgument = function () {
        var node = {
            "label": null,
            "icon:": null,
            "arguments": []
        };
        this.categories.push(node);
    };
    AdminMenuComponent.prototype.saveCategoryArgument = function () {
        this.service.saveArgumentsCategory(this, this.categories, this.handlerSuccessSaveCategoryArgument, this.handlerErrorSaveCategoryArgument);
    };
    AdminMenuComponent.prototype.handlerSuccessSaveCategoryArgument = function (_this, result) {
        _this.categories = result;
        _this.globals.isLoading = false;
        if (_this.optionSelected.id != undefined) {
            _this.getOptionCategoryArguments();
        }
    };
    AdminMenuComponent.prototype.handlerErrorSaveCategoryArgument = function (_this, result) {
        _this.globals.isLoading = false;
    };
    AdminMenuComponent.prototype.saveOptionCategoryArguments = function () {
        if (this.optionSelected.id != undefined) {
            var arrayResult_1 = [];
            //let filterSelected = this.categories.filter(item => item.selected);
            var filterSelected = this.categories;
            var optionSelectedId = this.optionSelected.id;
            filterSelected.forEach(function (item, index, array) {
                var itemToAdd = {
                    "optionId": optionSelectedId,
                    "categoryArgumentsId": item,
                    "selected": item.selected
                };
                arrayResult_1.push(itemToAdd);
            });
            this.service.saveOptionCategoryArguments(this, arrayResult_1, this.handlerSuccessSaveOptionCategoryArguments, this.handlerErrorSaveOptionCategoryArguments);
        }
    };
    AdminMenuComponent.prototype.handlerSuccessSaveOptionCategoryArguments = function (_this, result) {
        _this.globals.isLoading = false;
        _this.getCategoryArguments();
    };
    AdminMenuComponent.prototype.handlerErrorSaveOptionCategoryArguments = function (_this, result) {
        _this.globals.isLoading = false;
        console.log(result);
    };
    AdminMenuComponent.prototype.editCategoryArguments = function () {
        var _this = this;
        var duplicateObject = JSON.parse(JSON.stringify(this.categories));
        var dialogRef = this.dialog.open(EditCategoryArgumentDialog, {
            width: '70%',
            data: duplicateObject
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                _this.categories = result;
                _this.saveCategoryArgument();
            }
        });
    };
    AdminMenuComponent = __decorate([
        Component({
            selector: 'app-admin-menu',
            templateUrl: './admin-menu.component.html',
            styleUrls: ['./admin-menu.component.css']
        }),
        __metadata("design:paramtypes", [ApiClient, Globals, ApplicationService, MatSnackBar, MatDialog])
    ], AdminMenuComponent);
    return AdminMenuComponent;
}());
export { AdminMenuComponent };
//# sourceMappingURL=admin-menu.component.js.map