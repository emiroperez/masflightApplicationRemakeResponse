import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Arguments } from '../model/Arguments';
import { FormControl } from '@angular/forms';
import { ReplaySubject, of ,  Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { take, takeUntil, delay } from 'rxjs/operators';
import { Airport } from '../model/Airport';
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';


@Component({
  selector: 'app-msf-airport-route',
  templateUrl: './msf-airport-route.component.html',
  styleUrls: ['./msf-airport-route.component.css']
})
export class MsfAirportRouteComponent implements OnInit {

  @Input("argument") public argument: Arguments;

  @ViewChild('airportList1') airportList1: ElementRef;
  @ViewChild('airportList2') airportList2: ElementRef;

  loading = false;
  name:any;
  constructor(private http: ApiClient, public globals: Globals) { }

  ngOnInit() { 
    // this.globals.isLoading = true;
    // this.getAirports(null, this.handlerSuccess);
  }

  getAirports(search, handlerSuccess){
      let url = this.globals.baseUrl+this.argument.url + "?search="+ (search != null?search:'');
      this.http.get(this,url,handlerSuccess,this.handlerError, null);  
  }

  onAirportSelect(index){
    if(index===1){
      this.globals.Airportdataorigin =this.argument.value1; 
     }else{
      this.globals.Airportdatadest =this.argument.value2; 
     }
  }

  handlerSuccess(_this,data, tab){   
    _this.loading = false;
    _this.globals.airports = of(data).pipe(delay(500));;        
  }
  
  handlerError(_this,result){
    _this.loading = false; 
    console.log(result);
  }

  onSearch($event: any,op : any){
    if (op=='1'){
      this.airportList1.nativeElement.scrollIntoView();
      
    }else if(op=='2') {
      this.airportList2.nativeElement.scrollIntoView();
    }
    if($event.term.length>=3){
      this.loading = true;
      this.getAirports($event.term, this.handlerSuccess);
    }
  }
  

}
