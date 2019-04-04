import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Globals } from '../globals/Globals';

@Component({
  selector: 'app-admin-menu-recursive',
  templateUrl: './admin-menu-recursive.component.html',
  styleUrls: ['./admin-menu-recursive.component.css'],
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
export class AdminMenuRecursiveComponent implements OnInit {

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

}
