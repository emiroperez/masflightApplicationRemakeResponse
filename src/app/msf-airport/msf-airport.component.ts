import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Arguments } from '../model/Arguments';
import { Airport } from '../model/Airport';
import * as moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../commons/date.adapters';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Observable, of ,  Subject } from 'rxjs';
import { MatSelect, VERSION } from '@angular/material';
import { take, takeUntil, delay } from 'rxjs/operators';
import { ApiClient } from '../api/api-client';
import { Globals } from '../globals/Globals';

interface Bank {
  id: string;
  name: string;
}

@Component({
  selector: 'app-msf-airport',
  templateUrl: './msf-airport.component.html',
  styleUrls: ['./msf-airport.component.css'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})
export class MsfAirportComponent implements OnInit {

  @Input("argument") public argument: Arguments;
  @ViewChild('airport1') airport1: ElementRef;

data: Observable<any[]>;
loading = false;
constructor(private http: ApiClient, public globals: Globals) { }


ngOnInit() { 
  this.getRecords(null, this.handlerSuccess);
}

getRecords(search, handlerSuccess){
    let url = this.globals.baseUrl+this.argument.url + "?search="+ (search != null?search:''); // para pruebas con keivis
    // let url = this.argument.url + "?search="+ (search != null?search:'');
    this.http.get(this,url,handlerSuccess,this.handlerError, null);  
}

handlerSuccess(_this,data, tab){   
  _this.loading = false;
  _this.data = of(data).pipe(delay(500));;        
}

handlerError(_this,result){
  _this.loading = false;
  console.log(result);
}

onSearch($event: any){
  this.airport1.nativeElement.scrollIntoView();
  if($event.term.length>=3){
    this.loading = true;
    this.getRecords($event.term, this.handlerSuccess);
  }
}

}
