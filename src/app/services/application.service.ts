import { Injectable } from '@angular/core';
import { ApiClient } from '../api/api-client';
import { Utils } from '../commons/utils';
import { Observable, of } from 'rxjs';
import { Airport } from '../model/Airport';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Globals } from '../globals/Globals';
import { MatDialog } from '@angular/material';
import { MsfConfirmationDialogComponent } from '../msf-confirmation-dialog/msf-confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  utils: Utils;
  
  // host = "http://localhost:8887";
  host = "";

  // host1 = "http://localhost:8886";
  host1 = "http://69.64.45.220:8886";

  constructor(private http: ApiClient, private globals:Globals, private dialog: MatDialog,private router: Router) {
    this.utils = new Utils();
    this.host = this.globals.baseUrl;
    this.host1 = this.globals.baseUrl2;
  }

  getTracking(_this, successHandler, errorHandler) {
    let params = this.utils.getUrlParameters(_this.globals.currentOption);
    let url = this.host1 + "/getTracking?" + params.url;
    this.http.get(_this, url, successHandler, errorHandler, null);
  }

  getMapBoxTracking(_this, successHandler, errorHandler) {
    let params = this.utils.getUrlParameters(_this.globals.currentOption);
    let url = this.host1 + "/getMapBoxTracking?" + params.url;
    this.http.get(_this, url, successHandler, errorHandler, null);
  }

  getDataTableSource(_this, handlerSuccess, handlerError,pageNumber: String) {
    // _this.globals.isLoading = true;
    _this.displayedColumns = [];
    let param = this.utils.getUrlParameters(_this.globals.currentOption);
    let urlBase = param.url;
    if(!urlBase.includes("MIN_VALUE")){
      urlBase += "&MIN_VALUE=0";
    }
    if(!urlBase.includes("MAX_VALUE")){
      urlBase += "&MAX_VALUE=999";
    }
    if(!urlBase.includes("minuteunit")){
      urlBase += "&minuteunit=m";
    }
    urlBase += "&pageSize=100&page_number="+pageNumber;
    if(pageNumber=="0"){
      _this.dataSource = null;
    }
    console.log(urlBase);
    let urlArg = encodeURIComponent(urlBase);
    let url = this.host + "/consumeWebServices?url=" + urlArg + "&optionId=" + _this.globals.currentOption.id;
    this.http.get(_this, url, handlerSuccess, handlerError, null);
    console.log(url);
  }

  loadChartData(_this, handlerSuccess, handlerError) {
    _this.globals.isLoading = true;
    let param = this.utils.getUrlParameters(_this.globals.currentOption);
    let urlBase = param.url;
    urlBase += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=999999&page_number=0";
    console.log(urlBase);
    let urlArg = encodeURIComponent(urlBase);
    let url = this.host + "/getChartData?url=" + urlArg + "&variable=" + _this.variable.id + "&xaxis=" + _this.xaxis.id + "&valueColumn=" + _this.valueColumn.id + "&function=" + _this.function.id;
    this.http.post(_this, url, null, handlerSuccess, handlerError);
  }


  loadDynamicTableData(_this, handlerSuccess, handlerError) {
    _this.globals.isLoading = true;
    _this.columns = [];

    _this.jqxTreeGridRef.clear();
    let param = this.utils.getUrlParameters(_this.globals.currentOption);
    let urlBase = param.url;
    urlBase += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=999999&page_number=0";
    console.log(urlBase);
    let urlArg = encodeURIComponent(urlBase);
    let url = this.host + "/getDynamicTableData?url=" + urlArg;
    let data = { variables: _this.globals.variables, values: _this.globals.values };
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }

  loadMenuOptions(_this, handlerSuccess, handlerError) {
    _this.globals.isLoading = true;								   
    if(_this.globals.currentApplication==undefined){
      _this.globals.currentApplication = JSON.parse(localStorage.getItem("currentApplication"));
    }
    //let url = this.host + "/getMenuTree"+"?appId="+_this.globals.currentApplication.id;
    let url = this.host + "/getMenuTree?appId=" + _this.globals.currentApplication.id;
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }

/*
  createMenucategory(_this, data, handlerSuccess, handlerError) {      
    let url = this.host + "/menuTreeCategory";
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }

  createMenuOption(_this, data, handlerSuccess, handlerError) {      
    let url = this.host + "/menuTreeOption";
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }
  */

  loadOptionCategoryArguments(_this, data, handlerSuccess, handlerError) {
    //_this.globals.isLoading = true;    
    let url = this.host + "/getOptionArgumentsCategories?optionId=" + data.id;
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }

  loadArguments(_this, handlerSuccess, handlerError) {
    _this.globals.isLoading = true;
    let url = this.host + "/getArguments";
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }

  loadCategoryArguments(_this, handlerSuccess, handlerError) {
    _this.globals.isLoading = true;
    let url = this.host + "/getArgumentsCategories";
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }

  createArgument(_this, data, handlerSuccess, handlerError) {   
    let url = this.host +  "/arguments?idOption=" + data.idOption;
    this.http.post(_this, url, data.argument, handlerSuccess, handlerError);
  }

  loadMenuCategories(_this, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/getMenu";
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }

  saveMenu(_this, data, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/menu";
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }

  saveOptionCategoryArguments(_this, data, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/saveOptionArgumentsCategories";
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }

  loadArgumentsByCategory(_this, data, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/getArgumentsByCategory?idCategory=" + data.id;
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }

  saveArgumentsCategory(_this, data, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/saveArgumentsCategory";
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }
  
  saveArguments(_this, data, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/saveArguments";
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }

  deleteArgumentsCategory(_this, data, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/deleteArgumentsCategory";
    this.http.post(_this, url, data, handlerSuccess, handlerError);
  }

  deleteArguments(_this, data, handlerSuccess, handlerError){
    _this.globals.isLoading = true;
    let url = this.host + "/deleteArguments";
    this.http.post(_this, url, data, handlerSuccess, handlerError);    
  }    

  loadChartDataUsageStatistics(_this, handlerSuccess, handlerError) {
    _this.globals.isLoading = true;
    let params = this.utils.getParameters(_this.globals.currentOption);
    params += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=999999";
    console.log(params);
    let url = this.host + "/getChartDataUsageStatistics?variable=" + _this.variable.id + "&xaxis=" + _this.xaxis.id + "&valueColumn=" + _this.valueColumn.id + "&function=" + _this.function.id + "&" +params+ "&optionId=" + _this.globals.currentOption.id;;
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }

  getDataTableSourceUsageStatistics(_this, handlerSuccess, handlerError) {
    _this.dataSource = null;
    _this.displayedColumns = [];
    _this.globals.isLoading = true;
    let param = this.utils.getUrlParameters(_this.globals.currentOption);
    let urlBase = param.url;
    urlBase += "&MIN_VALUE=0&MAX_VALUE=999&minuteunit=m&pageSize=100";
    console.log(urlBase);
    let urlArg = encodeURIComponent(urlBase);
    urlBase += "&optionId=" + _this.globals.currentOption.id;   
    this.http.get(_this, urlBase, handlerSuccess, handlerError, null);
  }

  getMenuString(_this, applicationId, handlerSuccess, handlerError): void
  {
    let url = this.host + "/getMenuString?appId=" + applicationId;
    this.globals.isLoading = true;
    this.http.get (_this, url, handlerSuccess, handlerError, null);
  }

  // createDashboardPanel(_this, panels, handlerSuccess, handlerError): void
  // {
  //   let url = "/addDashboardPanels";
  //   if (this.host != "")
  //     this.http.post (_this, this.host + url, panels, handlerSuccess, handlerError);
  //   else
  //     this.http.postSecure (_this, this.host + "/secure" + url, panels, handlerSuccess, handlerError);
  // }

  // createDashboardPanelInColumn(_this, panels, width, handlerSuccess, handlerError): void
  // {
  //   let url = "/addDashboardPanels/column?width=" + width;
  //   if (this.host != "")
  //     this.http.post (_this, this.host + url, panels, handlerSuccess, handlerError);
  //   else
  //     this.http.postSecure (_this, this.host + "/secure" + url, panels, handlerSuccess, handlerError);
  // }

  // deleteDashboardPanel(_this, id, width, handlerSuccess, handlerError): void
  // {
  //   let url = this.host + "/deleteDashboardPanel?width=" + width;
  //   this.http.post (_this, url, id, handlerSuccess, handlerError);
  // }

  // deleteDashboardColumn(_this, appId, column, handlerSuccess, handlerError): void
  // {
  //   let url = "/updateDashboardPanelColumns?appId=" + appId + "&column=" + column;
  //   if (this.host != "")
  //     this.http.post (_this, this.host + url, null, handlerSuccess, handlerError);
  //   else
  //     this.http.postSecure (_this, this.host + "/secure" + url, null, handlerSuccess, handlerError);
  // }

  // updateDashboardPanel(_this, panel, handlerSucess, handlerError): void
  // {
  //   let url = this.host + "/updateDashboardPanel";
  //   this.http.post (_this, url, panel, handlerSucess, handlerError);
  // }

  // updateDashboardPanelHeight(_this, dashboardIds, height, handlerSucess, handlerError): void
  // {
  //   let url = this.host + "/updateDashboardPanelHeight?height=" + height;
  //   this.http.post (_this, url, dashboardIds, handlerSucess, handlerError);
  // }

  // updateDashboardPanelWidth(_this, dashboardIds, handlerSucess, handlerError): void
  // {
  //   let url = this.host + "/updateDashboardPanelWidth";
  //   this.http.post (_this, url, dashboardIds, handlerSucess, handlerError);
  // }
  // getChartFilterValues(_this, id, handlerSuccess, handlerError): void
  // {
  //   let url = this.host + "/getMetaByOptionId?optionId=" + id;
  //   this.http.get (_this, url, handlerSuccess, handlerError, null);  
  // }  

  
  confirmationDialog(_this, message, callback)
  {
    const dialogRef = this.dialog.open (MsfConfirmationDialogComponent, {
      disableClose: false,
      panelClass: 'msf-dashboard-control-variables-dialog'
    });

    let self = _this;
    dialogRef.componentInstance.confirmMessage = message;

    dialogRef.afterClosed ().subscribe (result =>
    {
      if (result)
        callback (self);
    });
  }

  getDashboardPanels(_this, dashboardMenuId, handlerSuccess, handlerError): void
  {
    let url = "/getDashboardPanels?dashboardMenuId=" + dashboardMenuId;
    this.http.get (_this, this.host + url, handlerSuccess, handlerError, null);
  }

  getSubDataTableSource(_this,option,parameters,handlerSuccess, handlerError,) {
    // _this.globals.isLoading = true;
    // let param = this.utils.getUrlParameters(_this.globals.currentOption);
    let urlBase = option.baseUrl + parameters;
    console.log(urlBase);
    let urlArg = encodeURIComponent(urlBase);
    console.log(urlArg);
    let url = this.host + "/consumeWebServices?url=" + urlArg + "&optionId=" + option.id;
    this.http.get(_this, url, handlerSuccess, handlerError, null);
    console.log(url);
  }

  getWelcomeApplication(_this, handlerSuccess, handlerError) {
    _this.globals.isLoading = true;								   
    if(_this.globals.currentApplication==undefined){
      _this.globals.currentApplication = JSON.parse(localStorage.getItem("currentApplication"));
    }
    let url = this.host + "/getWelcomeApplication?appId=" + _this.globals.currentApplication.id;
    this.http.get(_this, url, handlerSuccess, handlerError, null);
  }
}
