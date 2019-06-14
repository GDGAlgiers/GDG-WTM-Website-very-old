import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-landing-s7',
  templateUrl: './landing-s7.component.html',
  styleUrls: ['./landing-s7.component.css']
})
export class LandingS7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   toggle() {

      $('.paperDiv').toggleClass('goUp');
      $(".paperDiv").toggleClass('goDown');
      $(".containerDiv").toggleClass('getBigger');
      $(".containerDiv").toggleClass('getSmall');
      $(".containerDiv").toggleClass('cover');
      console.log($(".containerDiv").hasClass('cover'));
  }
  open() {
   if (! $('.paperDiv').hasClass('goUp')) {
      this.toggle();
   }
  }
  close() {
    if ( $('.paperDiv').hasClass('goUp')){
       this.toggle();
    }
  }
}
