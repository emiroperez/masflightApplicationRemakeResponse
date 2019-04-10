import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Globals } from '../globals/Globals';


@Component({
  selector: 'app-menu-recursive-dashboard',
  templateUrl: './menu-recursive-dashboard.component.html',
  styleUrls: ['./menu-recursive-dashboard.component.css'],
  animations: [
    trigger('animationOption2', [
      transition(':enter', [
        style({
          opacity: 0,
          height: '0px'
        }),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({
          opacity: 0,
          height: '0px'
        }))
      ]),
      state('*', style({
        opacity: 1,
        height: '*'
      })),
    ])
  ]
})
export class MenuRecursiveDashboardComponent implements OnInit {

  @Input("menu")
  option: any;

  @Output() optionSelected = new EventEmitter();

  isOpened: any = true;

  clickedDivState = 'start';

  optionActive: any = {};

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

  toggle(option) {
    if(option.children.length==0){
      this.selectOption(option);
    }else{
      if (option.isOpened) {
        option.isOpened = false;
        this.clickedDivState = 'start';
      } else {
        option.isOpened = true;
        this.clickedDivState = 'end';   
        if (option.parentId==null){
          this.globals.labelCategory = option.label;
        }   
        console.log(option.label) 
    }
  }


}

selectOption(option) {    
  this.optionSelected.emit(option); 
  // this.toggle(option)   
}

  changeDivState(option) {
    if (option.isOpened) {
      this.clickedDivState = 'end';
    } else {
      setTimeout(() => {
        this.clickedDivState = 'start';
      }, 3000);
    }
  }

  goToDashboard(dashboard): void
  {
    this.globals.map = false; /*kp 27022019*/
    this.globals.selectedIndex = 0;
    this.globals.showCategoryArguments = false;
    // this.globals.showcurrentAgts=true;
    this.globals.showMenu = false;
    this.globals.showIntro = true;
    //
    this.globals.currentDashboardMenu = dashboard;
    this.globals.currentOption = 'dashboard';
  }

}
