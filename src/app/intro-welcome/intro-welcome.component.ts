import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../globals/Globals';

@Component({
  selector: 'app-intro-welcome',
  templateUrl: './intro-welcome.component.html',
  styleUrls: ['./intro-welcome.component.css']
})
export class IntroWelcomeComponent implements OnInit {

  @Input("content")
  desc: any;

  constructor() { }

  ngOnInit() {
  }

}
