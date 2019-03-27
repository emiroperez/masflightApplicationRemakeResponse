import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals/Globals';
import { ApplicationService } from '../services/application.service';
//import { MenuService } from '../services/menu.service';
import { MobileMenuService } from '../services/menuMobile.service';
import { MsfDashboardChartValues } from '../msf-dashboard-chartmenu/msf-dashboard-chartvalues';

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
  
  constructor(public globals: Globals /*, private appService: ApplicationService*/ ,private menuService: MobileMenuService, private service: ApplicationService ) { }

  ngOnInit() {
    this.getMenuData();
    // this.getCategoryArguments();
  }
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
    _this.globals.isLoading = false;
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
      this.globals.dataAvailabilityInit();
      if(this.globals.currentOption.tabType === 'map'){
        this.globals.map = true;
        this.globals.selectedIndex = 1;
      }
      if(this.globals.currentOption.tabType === 'statistics'){
        this.globals.usageStatistics = true;
      }
      console.log(this.globals.currentOption.menuOptionArgumentsAdmin)
    }
  }
  
  getDashboardsUser(){
    this.globals.isLoading = true;
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
