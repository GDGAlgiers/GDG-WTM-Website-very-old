import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gdgWebsite';
  showFooter = true;
  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val: Event) => {
      this.showFooter = location.path() === '';

    });

  }
  public ngOnInit() {

  }
   closeMenu() {

    let menuMobile=document.getElementById("menumobile");
    let openBtn=document.getElementById("openBtn");
    menuMobile.classList.toggle('hide');
    openBtn.classList.toggle('hide');
  }
}
