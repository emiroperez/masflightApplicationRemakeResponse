var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatNativeDateModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        NgModule({
            imports: [
                MatInputModule,
                MatCardModule,
                MatCheckboxModule,
                MatIconModule,
                MatButtonModule,
                MatToolbarModule,
                MatSidenavModule,
                MatListModule,
                MatDialogModule,
                MatFormFieldModule,
                MatStepperModule,
                MatSelectModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatRadioModule,
                MatMenuModule,
                MatTabsModule,
                MatTableModule,
                MatProgressSpinnerModule,
                MatExpansionModule
            ],
            exports: [
                MatInputModule,
                MatCardModule,
                MatCheckboxModule,
                MatIconModule,
                MatButtonModule,
                MatToolbarModule,
                MatSidenavModule,
                MatListModule,
                MatDialogModule,
                MatFormFieldModule,
                MatStepperModule,
                MatSelectModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatRadioModule,
                MatMenuModule,
                MatTabsModule,
                MatTableModule,
                MatSortModule,
                MatProgressSpinnerModule,
                MatExpansionModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.js.map