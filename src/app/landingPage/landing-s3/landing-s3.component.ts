import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-landing-s3',
  templateUrl: './landing-s3.component.html',
  styleUrls: ['./landing-s3.component.css']
})
export class LandingS3Component implements OnInit {

  constructor() { }
  ngOnInit() {
    $(".titleDiv").on('click', function(event){
      let parent=event.target.parentElement;
      var titleElements = document.getElementsByClassName("show");
      console.log(titleElements[0])
      for (var i = 0, len = titleElements.length; i < len; i++) {
          if(parent!=titleElements[i])
          {
              titleElements[i].classList.add("hide")
          titleElements[i].classList.remove("show")
          }
          
      }
      
      parent.classList.toggle("show");
      parent.classList.toggle("hide")
      //check if there is at least one div opened else open the last one
    titleElements = document.getElementsByClassName("show");
    if(titleElements.length==0)
    {
        var divContainers=document.getElementsByClassName("divcontainer");
        divContainers[divContainers.length-1].classList.add("show");
        divContainers[divContainers.length-1].classList.remove("hide");
    }
  });
  }

}
