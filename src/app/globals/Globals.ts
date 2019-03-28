import { Injectable } from '@angular/core';
import {Option} from '../model/Option';
import { MatSort } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable()
export class Globals {
  baseUrl = "http://mobile.pulse.aspsols.com:8885";
  // baseUrl = "";
  baseUrl2 = "http://69.64.45.220:8886";
  showTabs  : boolean = false;
  showCategoryArguments : boolean = false;
  labelCategory: any;
  currentCategory: any;
  currentOption: any;
  currentAgts: any;
  showcurrentAgts : boolean = false;
  isLoading: boolean = false;
  sort: MatSort;
  chart: boolean = false;
  map: boolean = false;
  usageStatistics: boolean = false;
  variables;
  values;
  generateDynamicTable = false;
  selectedIndex = 0;
  displayedColumns;
  metadata;
  totalRecord = 0;
  dataSource : boolean = false;
  template : boolean = false;
  startTimestamp = null;
  endTimestamp = null;
  bytesLoaded = 0;
  airports: Observable<any[]>;
  moreResults : boolean = false;
  moreResultsBtn : boolean = true;
  currentApplication : any;
  showMenu : boolean = false;
  showIntro : boolean = true;
  maxDate : any;
  minDate : any;
  currentAirline: any;
  currentUser: any;
  btnDashboardChart = false;
  Airportdataorigin:any;
  Airportdatadest:any;
  query : boolean= false;
  OptionDashboard : boolean= false;
  currentDashboardMenu : any;

  clearVariables(){
    this.currentOption=null;
    this.currentAgts=null;
    this.isLoading = false;
    this.chart = false;
    this.map = false;
    this.variables = null;
    this.values = null;
    this.generateDynamicTable = false;
    this.selectedIndex = 1;
    this.totalRecord = 0;
    this.startTimestamp = null;
    this.endTimestamp = null;
    this.bytesLoaded = 0;
    this.moreResults = false;
    this.moreResultsBtn = true;
    this.dataSource = true;

  }

  getTime(){
    if( this.endTimestamp != null && this.startTimestamp != null){
      return (this.endTimestamp.getTime() - this.startTimestamp.getTime())/ 1000;
    }
    return 0;
  };

  getBytesLoaded(){
    if(this.getTime() > 0){
      return this.bytesLoaded;
    }
    return 0;
  }

  getSelectedIndex(){
    return this.selectedIndex;
  }

dataAvailabilityInit(){
  const option = this.currentOption;
  if(option.dataAvailability!=null){
    this.minDate = new Date(option.dataAvailability.startDate);
    this.maxDate = new Date(option.dataAvailability.endDate);
  }else{
    this.minDate = null;
    this.maxDate = null;
  }
}
}