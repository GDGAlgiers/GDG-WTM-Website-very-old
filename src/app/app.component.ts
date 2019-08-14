import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GDG Algiers';
  showFooter = true;
  blackMenuLinks = false;
  closeBtnSrc="assets/threebars.svg"
  logoSrc = "/assets/GDGA_Color_Black.svg";
  menuOpen=false;
  constructor(private location: Location, private router: Router) {
    
    this.router.events.subscribe((val: Event) => {
      if(!(location.path() === '')||location.path() === '/events'){
        this.showFooter = false;
        this.blackMenuLinks = true; // make navbar links black if it we are not in home page
        this.logoSrc="/assets/GDGA_Color_Black.svg";
        console.log(this.logoSrc);
        console.log('ddf')
      }
      else{
        this.showFooter = true;
        this.blackMenuLinks = false; // make navbar links black if it we are not in home page
        this.logoSrc="/assets/GDGA_Color.svg";
        console.log(this.logoSrc);
      }
    });
  }
  public ngOnInit() {
    
  }
   closeMenu() {

    let menuMobile=document.getElementById("menumobile");
    let openBtn=document.getElementById("openBtn");
    menuMobile.classList.toggle('hide');
    //openBtn.classList.toggle('hide');
    if(this.menuOpen)
    this.closeBtnSrc = "assets/threebars.svg"
    else
    this.closeBtnSrc="assets/close-button.svg"

    this.menuOpen=!this.menuOpen;

  }
}
