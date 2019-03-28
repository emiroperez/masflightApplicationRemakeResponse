import { Injectable } from '@angular/core';
import { ApiClient } from '../api/api-client';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from '../globals/Globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SECURITY_HEADER = "Authorization";
  TOKEN_STORAGE_KEY = "token";

  constructor(private http: ApiClient,private http2: HttpClient,private router: Router, private globals:Globals) { }

  save(_this,user,successHandler, errorHandler){
    let url= this.globals.baseUrl+'/users';
	// let url = '/users';
    this.http.post(_this,url,user,successHandler, errorHandler);
  }

  saveUser(_this,user,successHandler, errorHandler){
    let url= this.globals.baseUrl+'/saveUser';
	// let url='/saveUser';
    //let url='http://localhost:8887/saveUser';
    this.http.post(_this,url,user,successHandler, errorHandler);
  }

  /*validarUsuario(_this,successHandler){   
    // let url='http://localhost:8887/secure/getUserloggedin'; 
	// let url = '/secure/getUserloggedin';
   let url= this.globals.baseUrl+'/secure/getUserloggedin';
   this.get(_this,url,successHandler);
  }*/
  
 /* validarUsuario2(_this){    
    // let url='http://localhost:8887/secure/getUserloggedin';
	// let url = '/secure/getUserloggedin';
   let url= this.globals.baseUrl+'/secure/getUserloggedin';
   this.get2(_this,url);
  }*/


  createAuthorizationHeader() {
    httpOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // httpOptions.headers = httpOptions.headers.append(this.SECURITY_HEADER, localStorage.getItem(this.TOKEN_STORAGE_KEY));
    httpOptions.headers = httpOptions.headers.append('Authorization', localStorage.getItem('token'));
  }

  //  get = function (_this,url,successHandler){
  validarUsuario= function (_this,successHandler){
    let url= this.globals.baseUrl+'/secure/getUserloggedin';
    this.createAuthorizationHeader();
    this.http2.get(url,httpOptions).subscribe(result => {
        successHandler(_this,result);
    }, error => {
      _this.globals.isLoading = false;
      _this.router.navigate(['']);
    }
      
  );
  }

  // get2 = function (_this){
  validarUsuario2 = function (_this){
    let url= this.globals.baseUrl+'/secure/getUserloggedin';
      this.createAuthorizationHeader();
      this.http2.get(url,httpOptions).subscribe(result => {

      }, error => {
        _this.globals.isLoading = false;
        _this.router.navigate(['']);
        }
    );
    }

    // UserLoggedin = function (_this,url,successHandler, errorHandler){
    // UserLoggedin = function (_this,url){
    getUserLoggedin= function (_this){
      let url = _this.globals.baseUrl+ "/secure/getUserloggedin";
      this.createAuthorizationHeader();
      this.http2.get(url,httpOptions).subscribe(result => {
          // successHandler(_this,result);
           _this.loggedIn = true;
           _this.router.navigate(["/welcome"]);
      }, error =>
          // errorHandler(_this,error)
          console.log(error)
    );
    }
/*
  errorHandler(_this,error){
    _this.utils.showAlert('warning', 'Inicie Session para continuar '+error)
    _this.router.navigate(['/login'])
  }
*/
resetPassword(_this,user,successHandler, errorHandler){
  let url= this.globals.baseUrl+'/resetPassword';
  //let url='http://localhost:8887/saveUser';
  this.http.post(_this,url,user,successHandler, errorHandler);
}

verifyToken(_this,successHandler,errorHandler,token){
  let url= this.globals.baseUrl+'/verifytoken?token='+token;
  // let url='http://localhost:8887/sendemailreset?email='+email;
  this.http.get(_this,url,successHandler,errorHandler,null);
}

checkEmail(_this,successHandler,errorHandler,email){
  let url= this.globals.baseUrl+'/checkEmail?email='+email;
  // let url='http://localhost:8887/checkEmail?email='+email;
  this.http.get(_this,url,successHandler,errorHandler,null);
}

sendEmailPassword(_this,successHandler,errorHandler,email){
  let url= this.globals.baseUrl+'/sendemailreset?email='+email;
  // let url='http://localhost:8887/sendemailreset?email='+email;
  this.http.get(_this,url,successHandler,errorHandler,null);
}


}
