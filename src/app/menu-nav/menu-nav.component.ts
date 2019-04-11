import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals/Globals';
import { ApplicationService } from '../services/application.service';
//import { MenuService } from '../services/menu.service';
import { MobileMenuService } from '../services/menuMobile.service';
import { MsfDashboardChartValues } from '../msf-dashboard-chartmenu/msf-dashboard-chartvalues';
import { AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  optionSelected: any = {};

  categorySelected: any = {};

  categoryArgumentSelected: any = {};

  menu_nav: any[] = [];

  //kp 22/02/2019
  
  dashboardColumns: MsfDashboardChartValues[][] = [];
  options: any[] = [];

  columnToDelete: number;
  rowToDelete: number;

  displayAddChartMenu: boolean = false;
  
  constructor(public globals: Globals /*, private appService: ApplicationService*/ ,private menuService: MobileMenuService, private service: ApplicationService) { }

  ngOnInit() {
    this.getMenuData();
    // this.getCategoryArguments();
  }

  
//   makeOptions(dataProvider)
//   {

//    return {
//     "type": "map",
//     "theme": "none",
//       "backgroundColor" : "#FFFFFF",
//       "dataProvider": {
//         "map": "worldLow",
//         "zoomLevel": 1,
//         "zoomLongitude": 2.3510,
//         "zoomLatitude": 48.8567
//        },
    
//       "areasSettings": {
//         "outlineColor ": "#3b3b3b",
//         "unlistedAreasOutlineColor " : "#3b3b3b",
//         "unlistedAreasColor": "#3b3b3b",
//         "outlineColor": "#000000",
//         "outlineAlpha": 0.5,
//         "outlineThickness": 0.5,
//         "rollOverBrightness": 30,
//         "slectedBrightness": 50,
//         "rollOverOutlineColor": "#3b3b3b",
//         "selectedOutlineColor": "#3b3b3b",
//         "unlistedAreasOutlineColor": "#000000",
//         "unlistedAreasOutlineAlpha": 0.2
//       },
    
//       "imagesSettings": {
//         "color": "#dedef7",
//         "rollOverColor": "#585869",
//         "selectedColor": "#585869",
//         "pauseDuration": 0.5,
//         "animationDuration": 10,
//         "adjustAnimationSpeed": true
//       },
    
//       "linesSettings": {
//         "color": "#00a3e1",
//         "arrowSize" : 40,
//         "size" :40
//       },
    
//       "export": {
//         "enabled": true
//       }  
//   }

// }

  getMenuData(): void {
    this.menuService.getMenu(this, this.handlerGetSuccessMenuData, this.handlerGetErrorMenuData);
    /*this.optionSelected = {}; kp 27/02/2019*/
    /*this.service.getMenuString (this, this.globals.currentApplication.id,
    this.addDataForms, this.handlerError);*/
  }

  /*getCategoryArguments() {
    this.appService.loadCategoryArguments(this, this.handlerSuccessCategoryArguments, this.handlerErrorCategoryArguments);
  }*/

  /* kp 27/02/2019
  handlerSuccessCategoryArguments(_this, result) {
    _this.categories = result;
    if (_this.optionSelected.id) {
      _this.getOptionCategoryArguments(_this.optionSelected);
    }
  }

  handlerErrorCategoryArguments(_this, result) {
    console.log(result);
  }*/

  handlerGetSuccessMenuData(_this, data) {
    _this.menu_nav = data;
    //_this.globals.isLoading = false;
    console.log( _this.menu_nav)
    _this.getDashboardsUser();
  }

  handlerGetErrorMenuData(_this, result) {
    console.log(result);
    _this.globals.isLoading = false;
  }


  getOptionSelected(option) {
    // this.categoryArguments = [];
    // this.clearSelectedCategoryArguments();
    // if (this.optionSelected == option) {
    //   this.optionSelected.isActive = false;
    //   this.optionSelected = {};
    // } else {
    //   this.optionSelected.isActive = false;
    //   option.isActive = option.isActive == null ? true : !option.isActive;
    //   this.optionSelected = option;
    //   if (!option.root && option.id) {
    //     this.getOptionCategoryArguments();
    //   }
    //   console.log("was selected: " + option.label);
    // }
   if (option.children.length==0){
      //this.globals.clearVariables();
      this.globals.map = false; /*kp 27022019*/
      this.globals.selectedIndex = 0;
      this.globals.showCategoryArguments = true;
      this.globals.showMenu = false;
      this.globals.showIntro = false;
      this.globals.currentOption = option;
      this.globals.mapsc = false;
      this.globals.dataAvailabilityInit();
      if(this.globals.currentOption.tabType != 'map' && this.globals.currentOption.tabType != 'scmap'){
        this.globals.tab=true;
      }
      if(this.globals.currentOption.tabType === 'map'){
        this.globals.map = true;
        this.globals.selectedIndex = 2;
      }
      if(this.globals.currentOption.tabType === 'scmap'){ //kp10042019
        this.globals.mapsc = true;
        this.globals.selectedIndex = 1;
        // this.globals.scheduleChart = this.AmCharts.makeChart ("chartdivmap", this.makeOptions (""));
      } 
      if(this.globals.currentOption.tabType === 'statistics'){
        this.globals.usageStatistics = true;
      }
      console.log(this.globals.currentOption.menuOptionArgumentsAdmin)
    }
  }
  
  getDashboardsUser(){
    this.menuService.getDashboardsByUser(this,this.handlerDashboard, this.errorHandler);
  }

  errorHandler(_this,result){
    console.log(result);
    _this.globals.isLoading = false;
  }

  handlerDashboard(_this, data){
    _this.dashboards = data;
    _this.globals.isLoading = false;
    console.log(_this.dashboards)
  //  _this.getAdvanceFeatures(); --> para habilitar dinamic table y export to excel segun el usuario
  }

  getAdvanceFeatures(){
    this.globals.isLoading = true;
    this.menuService.getAdvanceFeatures(this,this.handlerSuccessAF,this.handlerErrorAF);

    }

  handlerSuccessAF(_this,data){
    _this.planAdvanceFeatures = data;
    _this.planAdvanceFeatures.forEach(item => {
      item.advanceFeatureId == 1 ? _this.chartPlan = true : false;
      item.advanceFeatureId == 2 ? _this.dashboardPlan = true : false;
      item.advanceFeatureId == 3 ? _this.dynamicTablePlan = true : false;
      item.advanceFeatureId == 4 ? _this.exportExcelPlan = true : false;
    });

    //_this.validateAdmin (); --> para saber si es administrador
  }

  handlerErrorAF(_this,result){
    console.log(result);
    //_this.validateAdmin (); --> para saber si es administrador
  }

  toggle(option) {
    if (option==true) {
      this.globals.OptionDashboard = false;
     // this.clickedDivState = 'start';
    } else {
      this.globals.OptionDashboard = true;
   //   this.clickedDivState = 'end';   
    }
  }
}
