var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './routing/app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './notification/notification.component';
import { ApiClient } from './api/api-client';
import { RegisterComponent } from './register/register.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { MenuComponent } from './menu/menu.component';
import { MenuOptionComponent } from './menu-option/menu-option.component';
import { ApplicationComponent } from './application/application.component';
import { MsfComponentComponent } from './msf-component/msf-component.component';
import { Globals } from './globals/Globals';
import { MsfAirportComponent } from './msf-airport/msf-airport.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MsfContainerComponent } from './msf-container/msf-container.component';
import { MsfTableComponent } from './msf-table/msf-table.component';
import { IntroComponent } from './intro/intro.component';
import { CurrentQuerySummaryComponent } from './current-query-summary/current-query-summary.component';
import { MsfAirportRouteComponent } from './msf-airport-route/msf-airport-route.component';
import { MsfTimeRangeComponent } from './msf-time-range/msf-time-range.component';
import { MsfDateRangeComponent } from './msf-date-range/msf-date-range.component';
import { MsfCeilingComponent } from './msf-ceiling/msf-ceiling.component';
import { MsfWindComponent } from './msf-wind/msf-wind.component';
import { MsfWindDirectionComponent } from './msf-wind-direction/msf-wind-direction.component';
import { MsfTemperatureComponent } from './msf-temperature/msf-temperature.component';
import { MsfTabSelectorComponent } from './msf-tab-selector/msf-tab-selector.component';
import { DateFormatPipe } from './commons/DateFormatPipe ';
import { DateTimeFormatPipe } from './commons/DateTimeFormatPipe';
import { MsfAirlineComponent } from './msf-airline/msf-airline.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { MsfChartOnTimeDelayComponent } from './msf-chart-on-time-delay/msf-chart-on-time-delay.component';
import { MsfDynamicTableVariablesComponent } from './msf-dynamic-table-variables/msf-dynamic-table-variables.component';
import { MsfDynamicTableComponent } from './msf-dynamic-table/msf-dynamic-table.component';
import { MsfTailNumberComponent } from './msf-tail-number/msf-tail-number.component';
import { MsfAircraftTypeComponent } from './msf-aircraft-type/msf-aircraft-type.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxTreeGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MsfMapComponent } from './msf-map/msf-map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MsfSingleAirlineComponent } from './msf-single-airline/msf-single-airline.component';
import { MsfFlightNumberComponent } from './msf-flight-number/msf-flight-number.component';
import { MsfLoadingComponent } from './msf-loading/msf-loading.component';
import { MsfGroupingComponent } from './msf-grouping/msf-grouping.component';
import { MsfRoundingComponent } from './msf-rounding/msf-rounding.component';
import { MsfDateComponent } from './msf-date/msf-date.component';
import { MsfUsageStatisticsComponent } from './msf-usage-statistics/msf-usage-statistics.component';
import { MsfCancelledComponent } from './msf-cancelled/msf-cancelled.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CreateMempershipsComponent } from './create-memperships/create-memperships.component';
import { MatSnackBarModule } from '@angular/material';
import { CategoryArgumentsComponent } from './category-arguments/category-arguments.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { AdminMenuRecursiveComponent } from './admin-menu-recursive/admin-menu-recursive.component';
import { AgGridModule } from 'ag-grid-angular';
import { Utils } from './commons/utils';
import { MsfUserListComponent } from './msf-user-list/msf-user-list.component';
import { MsfOptionListComponent } from './msf-option-list/msf-option-list.component';
import { EditCategoryArgumentDialog } from './admin-menu/admin-menu.component';
import { MsfTestComponent } from './msf-test/msf-test.component';
import { MsfFreeTextInputComponent } from './msf-free-text-input/msf-free-text-input.component';
import { MsfSelectBoxSingleOptionComponent } from './msf-select-box-single-option/msf-select-box-single-option.component';
import { MsfSelectBoxMultipleOptionComponent } from './msf-select-box-multiple-option/msf-select-box-multiple-option.component';
import { MsfDatePickerComponent } from './msf-date-picker/msf-date-picker.component';
import { MsfTimePickerComponent } from './msf-time-picker/msf-time-picker.component';
import { MsfDateTimePickerComponent } from './msf-date-time-picker/msf-date-time-picker.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MsfCheckBoxComponent } from './msf-check-box/msf-check-box.component';
import { MsfCancelsCheckboxComponent } from './msf-cancels-checkbox/msf-cancels-checkbox.component';
import { MsfDiversionsCheckboxComponent } from './msf-diversions-checkbox/msf-diversions-checkbox.component';
import { MsfFlightDelaysCheckboxesComponent } from './msf-flight-delays-checkboxes/msf-flight-delays-checkboxes.component';
import { MsfCausesFlightDelaysCheckboxesComponent } from './msf-causes-flight-delays-checkboxes/msf-causes-flight-delays-checkboxes.component';
import { MsfTaxiTimesComponent } from './msf-taxi-times/msf-taxi-times.component';
import { MsfTaxiTimesCheckboxComponent } from './msf-taxi-times-checkbox/msf-taxi-times-checkbox.component';
import { MsfTaxiTimesCheckboxesComponent } from './msf-taxi-times-checkboxes/msf-taxi-times-checkboxes.component';
import { MsfDatePeriodComponent } from './msf-date-period/msf-date-period.component';
import { MsfRegionComponent } from './msf-region/msf-region.component';
import { MsfDatePeriodYearComponent } from './msf-date-period-year/msf-date-period-year.component';
import { MsfDatePeriodYearMonthComponent } from './msf-date-period-year-month/msf-date-period-year-month.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginScreenComponent,
                WelcomeComponent,
                MessageComponent,
                NotificationComponent,
                MenuOptionComponent,
                RegisterComponent,
                MenuComponent,
                MenuOptionComponent,
                ApplicationComponent,
                MenuComponent,
                MsfComponentComponent,
                MsfAirportComponent,
                MsfContainerComponent,
                MsfTableComponent,
                IntroComponent,
                CurrentQuerySummaryComponent,
                MsfAirportRouteComponent,
                MsfTimeRangeComponent,
                MsfDateRangeComponent,
                MsfCeilingComponent,
                MsfWindComponent,
                MsfWindDirectionComponent,
                MsfTemperatureComponent,
                MsfTabSelectorComponent,
                DateFormatPipe,
                DateTimeFormatPipe,
                MsfAirlineComponent,
                MsfChartOnTimeDelayComponent,
                MsfDynamicTableVariablesComponent,
                MsfDynamicTableComponent,
                MsfTailNumberComponent,
                MsfAircraftTypeComponent,
                jqxBarGaugeComponent,
                jqxGridComponent,
                jqxTreeGridComponent,
                MsfMapComponent,
                MsfSingleAirlineComponent,
                MsfFlightNumberComponent,
                MsfLoadingComponent,
                MsfGroupingComponent,
                MsfRoundingComponent,
                MsfDateComponent,
                MsfUsageStatisticsComponent,
                AdminMenuComponent,
                CreateMempershipsComponent,
                MsfCancelledComponent,
                MapBoxComponent,
                AdminMenuComponent,
                AdminMenuComponent,
                CategoryArgumentsComponent,
                AdminMenuRecursiveComponent,
                MsfUserListComponent,
                MsfOptionListComponent,
                EditCategoryArgumentDialog,
                MsfTestComponent,
                MsfFreeTextInputComponent,
                MsfSelectBoxSingleOptionComponent,
                MsfSelectBoxMultipleOptionComponent,
                MsfDatePickerComponent,
                MsfTimePickerComponent,
                MsfDateTimePickerComponent,
                MsfCheckBoxComponent,
                MsfCancelsCheckboxComponent,
                MsfDiversionsCheckboxComponent,
                MsfFlightDelaysCheckboxesComponent,
                MsfCausesFlightDelaysCheckboxesComponent,
                MsfTaxiTimesComponent,
                MsfTaxiTimesCheckboxComponent,
                MsfTaxiTimesCheckboxesComponent,
                MsfDatePeriodComponent,
                MsfRegionComponent,
                MsfDatePeriodYearComponent,
                MsfDatePeriodYearMonthComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                AppRoutingModule,
                LayoutModule,
                MaterialModule,
                FormsModule,
                HttpClientModule,
                ReactiveFormsModule,
                NgxMaskModule.forRoot(),
                NgSelectModule,
                NgxMaterialTimepickerModule.forRoot(),
                ReactiveFormsModule,
                BrowserAnimationsModule,
                MatSelectModule,
                MatFormFieldModule,
                NgxMatSelectSearchModule,
                AmChartsModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyArd7Sqcy7bB0ucBKhm2ik4r2xZPG9wPtU'
                }),
                AgmDirectionModule,
                AgmSnazzyInfoWindowModule,
                NgxMapboxGLModule.withConfig({
                    accessToken: 'pk.eyJ1IjoiYXNwc29sdXRpb25zIiwiYSI6ImNqbm5uNGhscTI4N28za3FybnJ0OWF6NmEifQ.pDzlIgQjVkVszvxF2UoXvA',
                    geocoderAccessToken: 'pk.eyJ1IjoiYXNwc29sdXRpb25zIiwiYSI6ImNqbm5uNGhscTI4N28za3FybnJ0OWF6NmEifQ.pDzlIgQjVkVszvxF2UoXvA'
                }),
                MatSnackBarModule,
                MatTableModule,
                MatPaginatorModule,
                AgGridModule.withComponents(null),
                OwlDateTimeModule,
                OwlNativeDateTimeModule
            ],
            providers: [
                AuthService,
                NotificationComponent,
                ApiClient,
                MenuOptionComponent,
                MenuComponent,
                MsfComponentComponent,
                Globals,
                MsfAirportComponent,
                MsfContainerComponent,
                MsfContainerComponent,
                DateFormatPipe,
                DateTimeFormatPipe,
                Utils
            ],
            bootstrap: [AppComponent],
            entryComponents: [MessageComponent, MsfDynamicTableVariablesComponent, EditCategoryArgumentDialog]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map