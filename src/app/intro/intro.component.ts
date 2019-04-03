import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals/Globals';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  content: any[] = [];

  constructor(public globals: Globals,private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.getWelcomeApplication(this,this.handlerSuccess,this.handlerError);
  }

  handlerSuccess(_this, data) {
    _this.content = data;
    _this.globals.isLoading = false;
    console.log( _this.content)
  }

  handlerError(_this, result) {
    console.log(result);
    _this.globals.isLoading = false;
  }

  

}
