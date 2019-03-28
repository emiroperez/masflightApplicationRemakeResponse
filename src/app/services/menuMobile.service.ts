import { Injectable } from '@angular/core';
import { ApiClient } from '../api/api-client';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Menu } from '../model/Menu';
import { Globals } from '../globals/Globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {
  SECURITY_HEADER = "Authorization";
  TOKEN_STORAGE_KEY = "token";

  constructor( private http: HttpClient, private globals:Globals) { }

  getMenu(_this,successHandler, errorHandler){
    let url= "/getMenuTree?"
    if(_this.globals.currentApplication==undefined){
      _this.globals.currentApplication = JSON.parse(localStorage.getItem("currentApplication"));
    }
    url = url + "appId="+_this.globals.currentApplication.id;
    _this.globals.isLoading = true;
    this.get (_this, _this.globals.baseUrl + "/secure" + url, successHandler, errorHandler);
  }

  createAuthorizationHeader() {
    httpOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // httpOptions.headers = httpOptions.headers.append(this.SECURITY_HEADER, localStorage.getItem(this.TOKEN_STORAGE_KEY));
    httpOptions.headers = httpOptions.headers.append('Authorization', localStorage.getItem('token'));
  }

  get = function (_this,url,successHandler, errorHandler){
    this.createAuthorizationHeader();
    this.http.get(url,httpOptions).subscribe(result => {
        successHandler(_this,result);
    }, error => 
        errorHandler(_this,error)
  );
  }


  getDashboardsByUser(_this, successHandler, errorHandler){
    let url = "/getDashboards?application=" + _this.globals.currentApplication.id;
      this.get (_this, _this.globals.baseUrl + "/secure" + url, successHandler, errorHandler);
  }

  
  getAdvanceFeatures(_this, successHandler, errorHandler){
    let url = "/getPlanAdvanceFeatures";
      this.get (_this, _this.globals.baseUrl + "/secure" + url, successHandler, errorHandler);
  }
}
