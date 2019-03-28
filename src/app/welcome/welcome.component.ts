import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { Globals } from '../globals/Globals';
import { WelcomeService } from '../services/welcome.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { ApplicationService } from '../services/application.service';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  options:any[]=[];
  options2:any[]=[];

  activeElement ='Landing';

  

  customer = {
    name: 'Emiro Perez',
    lastSession:'July 12, 2018',
    overview:{
                since:'12/14/2011',
                plan: 'Administrator',
                username:'admin',
                email: 'emiro.perez@aspsols.com',
                expDate: '12/14/3011(over 994 year)',
                company: 'Jet Blue',
                jobTitle: '',
                website: 'none',
                phone: 'none',
                querySaved: '99 left',
                resultsSaved: '99 left',
              },
    lastestQueries:[
                    {
                      name:'Full Reports(234)',
                      date: 'July 10,2018 16:48',
                    },
                    {
                      name:'Full Reports(234)',
                      date: 'July 10,2018 16:48',
                    },
                    {
                      name:'Full Reports(234)',
                      date: 'July 10,2018 16:48',
                    },
                    {
                      name:'Full Reports(234)',
                      date: 'July 10,2018 16:48',
                    },
                    {
                      name:'Full Reports(234)',
                      date: 'July 10,2018 16:48',
                    }
                  ],
    SavedQueries:[
                    {
                      name:'IAD-Marchist',
                      date: 'July 10,2018 16:48',
                      desc:'Daily Statistics'
                    }
                  ]
  };




  constructor(public globals: Globals,
     private service: WelcomeService,
     private router: Router,
     private UserService: UserService,
     private appService: ApplicationService ) {     
  }

  setState(option){
      this.activeElement = option;           
  };

  ngOnInit() {
      this.UserService.validarUsuario(this, this.handlerGetSuccessData);
  }

  
  handlerGetSuccessData(_this, data) {
		var response =data;
    _this.service.getApplications(_this,_this.handlerSuccess,_this.handlerError);
    _this.globals.currentUser = response.name;
  }

  ngAfterViewInit() {
  }
    

  /*handlerGetErrorData(_this, result) {
    _this.router.navigate(['']);
  }*/

  // para prueba local  
  getApplications(){
    this.service.getApplications(this,this.handlerSuccess,this.handlerError);
  }



 handlerSuccess(_this,data){
    _this.options = data;
    _this.options2 = data.slice();
    _this.options.unshift({id:0,
                        name:"Landing",
                        url:"/welcome"})
    _this.activeElement = _this.options[0];
    
    setTimeout(() => {
      _this.globals.isLoading = false; 
  }, 3000);

  }

  handlerError(_this,result){
    console.log(result);
    _this.globals.isLoading = false;  
  }

  goTo(option:any){
    this.globals.showcurrentAgts = false;
    this.globals.currentApplication = option;
    localStorage.setItem("currentApplication", JSON.stringify(this.globals.currentApplication));
    // this.goToDashboard();
    this.router.navigate([option.url]);
  }

  // goToDashboard(): void
  // {
  //   this.globals.currentOption = 'dashboard';
  // }

  getBackground(option : any){
    var aux = option.name;
    aux = aux.replace(" ","");
    return "assets/images/w_"+aux+"1.png"
  }
  
  getBackground2(option : any){
    var aux = option.name;
    aux = aux.replace(" ","");
    return "assets/images/w_"+aux+".png"
  } 
  
  logOut(){
    this.appService.confirmationDialog (this, "Are you sure you want to Log Out?",
      function (_this)
      {
        _this.globals.isLoading = false;
        window.localStorage.removeItem("token");
        _this.router.navigate(['']);
      });
  }
}
